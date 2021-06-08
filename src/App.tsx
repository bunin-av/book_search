import React, {useState} from 'react';
import './App.css';
import {SearchInput} from "./components/SearchInput/SearchInput";
import {connect, ConnectedProps} from 'react-redux';
import {addSearchValue} from "./store/reducer";
import {changePage, DataElementType, getBooks} from "./store/reducer";
import {Pagination} from "./components/Pagination/Pagination";
import {Preloader} from "./components/Preloader/Preloader";
import {SearchResult} from "./components/SearchResult/SearchResult";
import wallpaper from "./assets/wallpaper.jpg"
import {NotFound} from "./components/NotFound/NotFound";


function App(props: AppPropsType) {
    const [modalActive, setModalActive] = useState(false)

    const goSearch = (value: string) => {
        value.trim() &&
        // props.addSearchHistory()
        props.getBooks(value.trim().split(' ').join('+'), 1, false)
        props.changePage(1)
    }

    const onPageChange = (pageNum: number) => {
        props.getBooks(props.searchValue.trim().split(' ').join('+'), pageNum, true);
    }
    const disableScroll = () => {
        const body = document.getElementsByTagName('body')
        body[0].style.overflow = 'hidden';
    }
    const enableScroll = () => {
        const body = document.getElementsByTagName('body')
        body[0].style.overflow = 'visible';
    }
    modalActive ? disableScroll() : enableScroll()

    return (
        <div className='App'>
            <div className='wallpaper__wrapper'></div>
            <img src={wallpaper} alt="Wallpaper" className="wallpaper"/>
            <div className={`logo ${props.books.length ? 'logo_searched' : ''}`}>
                <span>Bookle</span>
                <span className='author'>by Alex Bunin</span>
            </div>
            <div className='content__wrapper'>
                <NotFound notFound={props.notFound}/>
                <SearchInput
                    searchValue={props.searchValue}
                    goSearch={goSearch}
                    addSearchValue={props.addSearchValue}
                    onPageChange={onPageChange}
                    currentPage={props.currentPage}
                />
                {/*<SearchHistory value={this.props.searchHistory}/>*/}
                <SearchResult
                    data={props.books}
                    isFetching={props.isFetching}
                    setModalActive={setModalActive}
                    modalActive={modalActive}
                />
                {props.isFetching && <Preloader/>}
                <Pagination
                    numFound={props.numFound}
                    onPageChange={onPageChange}
                    currentPage={props.currentPage}
                />
            </div>
        </div>
    );
}

type MSTPType = {
    reducer: {
        booksData: DataElementType[]
        currentPage: number
        numFound: number
        isFetching: boolean
        notFound: boolean
        searchValue: string
    }
}

const mapState = (state: MSTPType) => ({
    searchValue: state.reducer.searchValue,
    // searchHistory: state.search.searchHistory,
    books: state.reducer.booksData,
    currentPage: state.reducer.currentPage,
    numFound: state.reducer.numFound,
    isFetching: state.reducer.isFetching,
    notFound: state.reducer.notFound
})

const connector = connect(mapState, {
        addSearchValue,
        // addSearchHistory,
        getBooks,
        changePage,
    }
)

type AppPropsType = ConnectedProps<typeof connector>

export default connector(App);
