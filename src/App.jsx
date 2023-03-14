import { Header } from "./components/header"
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css'


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>

      <Sidebar/>
        <main>
        <Post
        author="Diego Santana"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, est odit. Eum quae necessitatibus nesciunt officia corrupti rerum, aperiam nisi doloremque inventore natus, quod, repudiandae voluptas? Distinctio repellendus illo quidem."
      />
      <br/>
      <Post 
      author = "Ivan Junior"
      content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quo dicta doloribus qui veniam laudantium quasi in illum nobis maiores molestiae possimus quisquam eius, rerum tempore, illo fuga sapiente cum."/>
   

        </main>
      </div>
    </div>
  )
}

export default App

