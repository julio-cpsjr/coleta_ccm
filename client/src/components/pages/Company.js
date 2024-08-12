import ambev from '../img/logo-ambev-2048.png'
import styles from './Company.module.css'

function Company (){
    return (
        <div className={styles.container}>
           <img  className={styles.logo} src={ambev} alt="Ambev"/>
           <p className={styles.font}> Por mais razões para brindar </p>
        </div>
    )
}

export default Company