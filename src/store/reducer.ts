import {searchAPI} from "../API/API";
import bookM from "../assets/bookM.png"
import {ThunkDispatch} from "@reduxjs/toolkit";


const SET_BOOKS = 'SET_BOOKS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const CHANGE_PAGE = 'CHANGE_PAGE'
const SET_COUNT = 'SET_COUNT'
const SET_NOT_FOUND = 'SET_NOT_FOUND'
const ADD_SEARCH_VALUE = 'ADD_SEARCH_VALUE'

export type BooksStateType = {
    booksData: DataElementType[]
    isFetching: boolean
    currentPage: number
    numFound: number
    notFound: boolean
    searchValue: string
}

const initialState: BooksStateType = {
    booksData: [],
    isFetching: false,
    currentPage: 1,
    numFound: 0,
    notFound: false,
    searchValue: '',
}

export type DataElementType = {
    title: string
    author_name: string[]
    isbn: string[]
    publisher: string[]
    coverM: string
    cover_edition_key: string
    first_publish_year: number
    edition_key: string[]
}

type ActionsTypes =
  ReturnType<typeof setBooks>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof changePage>
  | ReturnType<typeof setTotalCount>
  | ReturnType<typeof setNotFound>
  | ReturnType<typeof addSearchValue>


export const reducer = (state = initialState, action: ActionsTypes): BooksStateType => {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                booksData: [...action.data]
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_COUNT:
            return {
                ...state,
                numFound: action.count
            }
        case SET_NOT_FOUND:
            return {
                ...state,
                notFound: action.value
            }
        case ADD_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.value
            }
        default:
            return state
    }
}


export const setBooks = (data: DataElementType[]) => ({type: SET_BOOKS, data}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}) as const
export const changePage = (page: number) => ({type: CHANGE_PAGE, page}) as const
export const setTotalCount = (count: number) => ({type: SET_COUNT, count}) as const
export const setNotFound = (value: boolean) => ({type: SET_NOT_FOUND, value}) as const
export const addSearchValue = (value: string) => ({type: ADD_SEARCH_VALUE, value}) as const


export type GetResponse = {
    docs: DataElementType[]
    numFound: number
    numFoundExact: boolean
    num_found: number
    start: number
}

export const getBooks = (value: string, currentPage: number, isChangingPage: boolean) =>
  async (dispatch: ThunkDispatch<BooksStateType, unknown, ActionsTypes>) => {
      dispatch(toggleIsFetching(true))
      const response = await searchAPI.getBooks(value, currentPage)
      dispatch(toggleIsFetching(false));
      (!response.data.docs.length)
        ? dispatch(setNotFound(true))
        : dispatch(setNotFound(false))
      let data: DataElementType[] = response.data.docs.map((el: DataElementType) => ({
          title: el.title,
          author_name: authorNameCheck(el),
          isbn: el.isbn ? el.isbn : [''],
          publisher: el.publisher ? el.publisher : [''],
          coverM: el.cover_edition_key ? `https://covers.openlibrary.org/b/olid/${el.cover_edition_key}-M.jpg` : bookM,
          cover_edition_key: el.cover_edition_key,
          first_publish_year: el.first_publish_year,
          edition_key: el.edition_key
      }))
      dispatch(setBooks(data));
      isChangingPage
        ? dispatch(changePage(currentPage))
        : dispatch(setTotalCount(response.data.numFound))
  }

const authorNameCheck = (el: DataElementType) => {
    let author_name: string[]
    if (el.author_name) {
        if (el.author_name.length > 5) {
            author_name = [el.author_name.filter((a, i) => i <= 3).join(', ') + ' & others']
        } else {
            author_name = [el.author_name.join(', ')]
        }
    } else {
        author_name = ['']
    }
    return author_name
}