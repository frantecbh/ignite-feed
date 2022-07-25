import styles from './Avatar.module.css'

export function Avatrar({ hasBorder = true, src }) {



    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src} />
    )
}

