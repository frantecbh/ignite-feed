import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR'
import { useState } from 'react'
import { Avatrar } from './Avatrar'
import { Comment } from './Comment'
import styles from './Post.module.css'




export function Post({ author, publishedAt, content }) {

    // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit',
    // }).format(publishedAt)

    const [comments, setComments] = useState([
        'Post muito bacana heim! 👏👏'
    ])

    const [newCommentsText, setNewCommentsText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRealtiveToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentsText])
        setNewCommentsText('')

    }

    function deleteComment(comment) {
        console.log(`Deletar comentario: ${comment}`)
    }

    return (
        <article className={styles.post}>

            <header>
                <div className={styles.author}>
                    <Avatrar hasBorder src={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRealtiveToNow}</time>

            </header>

            <div className={styles.content}>

                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content} ><a href="#">{line.content}</a></p>
                    }
                })}

            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea name='comment'
                    value={newCommentsText}
                    onChange={(e) => setNewCommentsText(e.target.value)}
                    placeholder='Deixe seu comentário...' />


                <footer>
                    <button type='submit'>Publicar</button>
                </footer>



            </form>

            <div className={styles.commnetList}>

                {
                    comments.map(comment => {
                        return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                    })
                }

            </div>

        </article>
    )
}
