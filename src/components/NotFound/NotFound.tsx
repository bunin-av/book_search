import styles from './NotFound.module.css'
import kitten from './../../assets/kitten2.png'

export function NotFound(props: { notFound: boolean }) {
    return (
        props.notFound
            ?<div className={styles.notFound__wrapper}>
                <img src={kitten} alt="Nothing found" className={styles.kitten}/>
            </div>
            : null
    )
}