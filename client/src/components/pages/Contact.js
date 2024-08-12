import styles from './Contact.module.css'
import ambev from '../img/logo-ambev-2048.png'


function Contact (){
    return (
        <div className={styles.container_contact}>
          
          <h1 className={styles.title_contact}> Alguma duvida? </h1>
          <p className={styles.p}> Entre em contato com um de nossos colaboradores </p>
          <p> Contato </p>
          <ui className={styles.list}>
            <li>Nome: Julio Cesar</li>
            <li>Email: 99807331@ambev.com.br</li>
            <li>Tel: (34) 99762-3481</li>
          </ui>

          <img className={styles.logo} src={ambev} alt="Ambev"/>
        </div>
    )
}

export default Contact