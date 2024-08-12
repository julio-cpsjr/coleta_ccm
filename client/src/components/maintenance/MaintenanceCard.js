import styles from './MaintenanceCard.module.css'
import {Link} from 'react-router-dom'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

function MaintenanceCard({id, name, budget, coment, category, handleRemove}){
    
     
    const remove = (e)=>{
       e.preventDefault()
       handleRemove(id)
    }

    return(
         <div className={styles.maintenance_card}>
            <h4>{name}</h4>
            <p>
                <span>Data:</span> {budget}
            </p>
            <p>
                <span>Comentario:</span>{coment}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[category.toLowerCase()]}`}></span> {category}
            </p>
            <div className={styles.maintenance_card_actions}>
                <Link to= {`/maintenance/${id}`}>
                    <BsPencil/> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill/> Excluir
                </button>
            </div>
         </div>
    )
}

export default MaintenanceCard