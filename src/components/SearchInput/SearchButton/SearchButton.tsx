import styles from './SearchButton.module.css'

export type ButtonPropsType = {
    goSearch: (value: string) => void
    searchValue: string
}

export function SearchButton(props: ButtonPropsType) {
    return (
        <div className={styles.button__wrapper}>
            <button
                onClick={() => props.goSearch(props.searchValue)}
                className={styles.button}
            >Search
            </button>
        </div>
    )
}