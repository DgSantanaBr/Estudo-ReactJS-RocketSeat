import styles from './Sidebar.module.css'
//importação da biblioteca de icones
 import {PencilLine} from 'phosphor-react'
export function Sidebar() {

    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=230&h=80&q=60" alt="*" />
            
            
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/DgSantanaBr.png"/>
           <br/>

                <strong>Diego Santana</strong> &nbsp;
                <span>Web Developer</span>
            </div>


            <footer>                   
            <a href=''>
                <PencilLine size={20}/>
                Editar seu perfil
            </a>
            </footer>
        </aside>
    );


}