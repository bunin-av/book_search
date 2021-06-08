import styles from './Pagination.module.css'
import {createPages} from "../../assets/pageCreator";
import React from "react";

type PaginationType = {
    numFound: number
    currentPage: number
    onPageChange: (page: number) => void
}

export function Pagination(props: PaginationType) {
    let pagesAmount = Math.ceil(props.numFound / 5);
    let pages: number[] = [];
    createPages(pages, pagesAmount, props.currentPage)


    return (
        <div className={`${styles.wrapper} ${pages[0] ? styles.active : ''}`}>
            {
                pages[0] !== 1 &&
                <span
                    className={`${styles.pages} ${!pages[0] ? styles.disabled : ''}`}
                    onClick={() => props.onPageChange(1)}
                >{1}</span>
            }
            {pages[0] > 2 && <span>...</span>}
            {
                pages.map((p, i) => {
                    return (props.currentPage === p)
                        ? <span
                            className={`${styles.selectedPage} ${styles.pages}`}
                            key={i}
                        >{p}</span>
                        : <span
                            onClick={() => props.onPageChange(p)}
                            className={styles.pages}
                            key={i}
                        >{p}</span>
                })
            }
            {pagesAmount > 11 && <span>...</span>}
            {pagesAmount > 10 &&
            <span className={`${styles.totalPages} ${styles.pages}`}>{pagesAmount}</span>
            }
        </div>
    )
}
