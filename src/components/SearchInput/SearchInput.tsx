import React, {useState} from 'react';
import styles from './SearchInput.module.css'
import {SearchButton} from './SearchButton/SearchButton';
import search from './../../assets/search.svg'

type SearchInputType = {
    searchValue: string
    goSearch: (value: string) => void
    addSearchValue: (value: string) => void
    onPageChange: (page: number) => void
    currentPage: number
}

export function SearchInput(props: SearchInputType) {
    const [timer, setTimer] = useState<number>()

    const onChangeCB = (e: React.ChangeEvent<HTMLInputElement>) => {
        timer && clearTimeout(timer)
        props.addSearchValue(e.currentTarget.value)
        let timeOutId = setTimeout(props.goSearch, 1000, e.currentTarget.value)
        setTimer(timeOutId)
    }
    const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            timer && clearTimeout(timer)
            props.goSearch(props.searchValue)
        }
    }
    const onSearchButtonPress = () => {
        timer && clearTimeout(timer)
        props.goSearch(props.searchValue)
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.search}>
                <input type="text"
                       value={props.searchValue}
                       onChange={onChangeCB}
                       onKeyPress={onEnterPress}
                       className={styles.search_field}
                       placeholder={'Search a book'}
                       autoFocus
                />
                <img src={search}
                     alt=""
                     className={styles.search_icon}/>
            </div>

            <SearchButton searchValue={props.searchValue} goSearch={onSearchButtonPress}/>
        </div>
    )
}

