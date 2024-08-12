import {Link} from 'react-router-dom'

import Container from './Container'
import styles from './Navbar.module.css'

import logo from '../img/logo.png'

export default function Navbar(){
    return(
        <Container>
        <nav className={styles.navbar}>
          <Link to="/">
          <img className={styles.logo} src={logo} alt='logo' />
          </Link>
          <ui className={styles.list}>
            <li className={styles.item}>
          <Link to="/">Pagina Inicial</Link>
            </li>
            <li className={styles.item}>
          <Link to="/maintenances">Manutenção</Link>
            </li>
            <li className={styles.item}>
          <Link to="/measure">Monitoramento</Link>
            </li>
            <li className={styles.item}>
          <Link to="/company">Empresa</Link>  
            </li>
            <li className={styles.item}>
          <Link to="/contact">Contato</Link>
            </li>
          </ui>
        </nav>
        </Container>
    )
}