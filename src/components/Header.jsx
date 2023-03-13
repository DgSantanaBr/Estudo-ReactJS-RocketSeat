//import "./Header.module.css" - errado, e necessario dar um nome ao arquivo como no :
 
import styles from './Header.module.css'

import igniteLogo from '../image/ignite-logo.svg';

export function Header(){
// usamos classname ao invés de class para o react nao se confundir com a classe javascript

  return(
<header className={styles.header}>
    <img src={igniteLogo} alt="Logotipo do Ignite"/>
</header>
    );
}