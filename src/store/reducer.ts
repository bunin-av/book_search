import {searchAPI} from "../API/API";
import bookS from "../assets/bookS.png"
import bookM from "../assets/bookM.png"
import {ThunkDispatch} from "@reduxjs/toolkit";


const SET_BOOKS = 'SET_BOOKS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const CHANGE_PAGE = 'CHANGE_PAGE'
const SET_COUNT = 'SET_COUNT'
const SET_NOT_FOUND = 'SET_NOT_FOUND'
const ADD_SEARCH_VALUE = 'ADD_SEARCH_VALUE'

export type BooksStateType = {
    booksData: []
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

type ActionsTypes =
    ReturnType<typeof setBooks>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof changePage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof setNotFound>
    | ReturnType<typeof addSearchValue>


export const reducer = (state = initialState, action: ActionsTypes) => {
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

export type DataElementType = {
    cover_i?: number
    title: string
    author_key: string[]
    author_name: string[]
    edition_key: string[]
    isbn: number[] | string[]
    publisher: string[]
    publish_date: string[]
    coverS: string
    coverM: string
    cover_edition_key: string
    first_publish_year: number
}

export const setBooks = (data: DataElementType[]) => ({type: SET_BOOKS, data}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}) as const
export const changePage = (page: number) => ({type: CHANGE_PAGE, page}) as const
export const setTotalCount = (count: number) => ({type: SET_COUNT, count}) as const
export const setNotFound = (value: boolean) => ({type: SET_NOT_FOUND, value}) as const
export const addSearchValue = (value: string) => ({type: ADD_SEARCH_VALUE, value}) as const



export const getBooks = (value: string, currentPage: number, isChangingPage: boolean) =>
    (dispatch: ThunkDispatch<BooksStateType, unknown, ActionsTypes>) => {
        dispatch(toggleIsFetching(true))
        searchAPI.getBooks(value, currentPage)
            .then((response) => {
                dispatch(toggleIsFetching(false))
                if (!response.data.docs.length) {
                    dispatch(setNotFound(true))
                } else{
                    dispatch(setNotFound(false))
                }
                response.data.docs.forEach((b: DataElementType) => {
                    b.author_name = b.author_name ? [b.author_name.join(', ')] : ['']
                    if (b.cover_edition_key) {
                        b.coverS = `https://covers.openlibrary.org/b/olid/${b.cover_edition_key}-S.jpg`
                        b.coverM = `https://covers.openlibrary.org/b/olid/${b.cover_edition_key}-M.jpg`
                    } else {
                        b.coverS = bookS
                        b.coverM = bookM
                    }
                    if (!b.isbn) {
                        b.isbn = [' ']
                    }
                })
                dispatch(setBooks(response.data.docs));
                isChangingPage
                    ? dispatch(changePage(currentPage))
                    : dispatch(setTotalCount(response.data.numFound))
            })
    }

