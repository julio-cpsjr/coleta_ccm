import styles from './Maintenance.module.css'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import MaintenanceForm from '../maintenance/MaintenanceForm'



function Maintenance(){

    const {id} = useParams()
    
    const [maintenance,setMaintenance] = useState([])
    const [showMaintenanceForm, setShowMaintenanceForm] = useState(false) 

    useEffect(() => {
     setTimeout(()=>{
        fetch(`http://localhost:5000/maintenance/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((resp)=> resp.json())
    .then((data)=> {
        console.log(data)
        setMaintenance(data)
    })},1000)      
    }, [id])

    function editPost(maintenance){

      fetch(`http://localhost:5000/maintenance/${maintenance.id}`,{
        method: 'PATCH',
        headers:{
            'Content-type':'application/json',
        },
        body: JSON.stringify(maintenance),
      })
      .then(resp => resp.json())
      .then((data) => {

       setMaintenance(data)
       setShowMaintenanceForm(false)

      })
      .catch(err => console.log(err))
    }

     
    function toggleMaintenanceForm(){
        setShowMaintenanceForm(!showMaintenanceForm)
    }

    return(
        <>
        {maintenance.name ? 
        (<div className={styles.maintenance_details}>
          <Container customClass="column">
            <div className={styles.details_container}>
                <h1> Equipamento: {maintenance.name}</h1>
                <button className={styles.btn} onClick={toggleMaintenanceForm}>
                     {!showMaintenanceForm ? 'Editar Manutenção' : 'Fechar'}
                </button>
                {!showMaintenanceForm ? (
                    <div className={styles.maintenance_info}>
                        <p>
                          <span> Categoria:</span> {maintenance.category.name}    
                        </p>
                        <p>
                          <span> Data:</span> {maintenance.budget}  
                        </p>
                        <p>
                          <span> Comentario:</span> {maintenance.coment}    
                        </p>
                    </div>    
                ) : (
                    <div className={styles.maintenance_info}>
                        <MaintenanceForm 
                        handleSubmit={editPost} 
                        btnText="Concluir edição" 
                        maintenanceData={maintenance}/>
                    </div>
                )}
            </div>  
          </Container>         
        </div>) : (<Loading/>)}
        </>
    )
}

export default Maintenance