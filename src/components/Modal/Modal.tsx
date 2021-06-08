import styles from './Modal.module.css'
import {FC} from "react";

type ModalPropsType = {
    active: boolean
    setActive: (active: boolean) => void
}

export const Modal:FC<ModalPropsType> = (props) => {
    return (
      <div className={props.active ? `${styles.modal} ${styles.active}` : styles.modal}
           onClick={() => props.setActive(false)}>
          <div className={props.active ? `${styles.modal__content} ${styles.active}` : ''}
               onClick={(e) => e.stopPropagation()}>
              {props.children}
          </div>
      </div>
    )
}