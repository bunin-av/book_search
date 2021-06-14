import {DataElementType} from "../../store/reducer";
import styles from "./SearchResult.module.css"
import {Modal} from "../Modal/Modal";
import React, {useState} from "react";

type SearchPropsType = {
    data: DataElementType[]
    isFetching: boolean
    modalActive: boolean
    setModalActive: (active: boolean) => void
}

export function SearchResult(props: SearchPropsType) {
    const classNameSetter = `${styles.searchResult__wrapper} ${
        props.isFetching ? styles.isFetching : ''} ${props.data.length ? styles.active : ''}`
    const [elemID, setElemID] = useState<string>()

    const searchResultElements = props.data.map((b,i) => {
        return (
            <div
                className={styles.snippet__wrapper}
                key={i}
                onClick={() => {
                    props.setModalActive(true)
                    setElemID(b.edition_key[0])
                }}>
                <div className={styles.book__cover}>
                    <img
                        src={b.coverM}
                        className={styles.book__cover_img}
                        alt={`${b.title} cover`}/>
                </div>
                <div className={styles.book__description}>
                    <span className={styles.book__title}>{b.title}</span>
                    <span className={styles.book__author}>{b.author_name}</span>
                </div>
            </div>
        )
    })

    const selectedBook = props.data.find(b => {
        return b.edition_key[0] === elemID
    })

    const modalElem = props.modalActive && selectedBook &&
        <Modal active={props.modalActive} setActive={props.setModalActive}>
            <div className={styles.book__cover_modal}>
                <img
                    src={selectedBook.coverM}
                    alt={`${selectedBook.title} cover`}
                    className={styles.book__cover_img}
                />
            </div>
            <div className={styles.book__description_modal}>
                <div className={styles.book__title_modal}>
                    {selectedBook.title}
                </div>
                <div className={styles.book__author_wrapper_modal}>
                    by <span className={styles.book__author_modal}>
                  {selectedBook.author_name}</span>
                </div>
                <div>
                    Published in <b>{selectedBook.first_publish_year}</b> by <b>{selectedBook.publisher[0]}</b>
                </div>
                <div>ISBN: {selectedBook.isbn[0]}</div>
            </div>
        </Modal>


    return (
        <div className={classNameSetter}>
            {searchResultElements}
            {modalElem}
        </div>
    )
}

