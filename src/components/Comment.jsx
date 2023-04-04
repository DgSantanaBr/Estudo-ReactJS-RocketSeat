import { ThumbsUp, Trash } from 'phosphor-react'
import styles from '/src/components/Comment.module.css'


export function Comment() {

    return (

        <div className={styles.comment}>
            <img src="https://github.com/DgSantanaBr.png" alt="" />


            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ivan Dange Junior</strong>
                            <time title='14 de Março às 11:15h' dateTime='2023-03-14 11:15:50' >Cerca de 1h atrás</time>
                        </div>
                        <button title=" Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Diego parabéns !!</p>
                </div>


                <footer>
                    <button>
                        
                        <ThumbsUp />
                      
                          Aplaudir <span> 20</span>
                          
                    </button>

                </footer>
            </div>


        </div>


    )


}