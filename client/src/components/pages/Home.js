import styles from './Home.module.css'
import ambev from '../img/logo-ambev-2048.png'
import LinkButton from '../layout/LinkButton'
function Home (){
    return ( 
    <section className={styles.container}>
      <h1> Bem-vindo ao <span> Hunter</span></h1>
      <img className={styles.logo} src={ambev} alt="ambev"/>
      <p className={styles.font}> # Por mais razões para brindar </p>
      <p>Comece a gerenciar as suas manutenções agora mesmo!</p>
      <LinkButton to="/newmaintenance" text="Cadastrar Manutenção"/>
    </section>
    )
}


export default Home