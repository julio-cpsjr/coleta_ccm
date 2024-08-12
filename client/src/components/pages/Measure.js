import styles from './Measure.module.css';
import Packaging from '../get_dados/Packaging';
import Processo from '../get_dados/Processo';
import Capitacao from '../get_dados/Capitacao';


function Measure(){
    
    return (
    <div className={styles.container}>
        <h1>Monitoramento dos CCM's da Cervejaria</h1>
       <div className={styles.container_chart}>
          <Packaging className={styles.container_chart_hover} />
          <Capitacao className={styles.container_chart_hover}/>
          <Processo className={styles.container_chart_hover}/>
        </div>
    </div>
       )
}

export default Measure;