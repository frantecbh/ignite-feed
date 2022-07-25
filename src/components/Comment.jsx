import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatrar } from './Avatrar';
import styles from './Coment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatrar hasBorder={false} src="https://github.com/frantecbh.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Francisco Menezes</strong>
                            <time dateTime='2022-05-11 00:15:30'>Cerca de 1hs</time>
                        </div>
                        <button title='Deletar comentario'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>

                </footer>
            </div>
        </div>
    )
}
