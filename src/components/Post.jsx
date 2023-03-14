import styles from "./Post.module.css"


export function Post() {
    return (
        <article className={styles.Post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/DgSantanaBr.png" />
                    <div className={styles.authorInfo}>
                        <strong>Diego Santana</strong>
                        &nbsp;
                        <span>Web Develpoer</span>
                    </div>
                </div>
                <time title="14 de Março às 11:15h" dateTime="2023-03-14 11:15:50">Publicado há 1h</time>

            </header>

            <div className={styles.content}>
            <p>Fala galeraa 👋</p>

           <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

           <p> 👉 <a href=""> jane.design/doctorcare</a></p>

           <p> <a href=""> #novoprojeto </a>
           &nbsp;
           <a href=""> #nlw</a>
           &nbsp;
           <a href=""> #rocketseat</a>
           </p>
            </div>
        </article>

    )

};
                    