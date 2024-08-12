import Message from "../layout/Message"
import {useLocation} from 'react-router-dom'
import styles from './Maintenances.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import MaintenanceCard from "../maintenance/MaintenanceCard"
import {useState, useEffect} from 'react'
import Loading from "../layout/Loading"

function Maintenances(){
    
    const [Maintenance, setMaintenance] = useState([])
    const [RemoveLoading, setRemoveLoading] = useState(false)
    const [MaintenanceMessage, setMaintenanceMessage] = useState('')

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }
    
    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:5000/maintenance', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((resp)=> resp.json())
            .then((data)=> {
                console.log(data)
                setMaintenance(data)
                setRemoveLoading(true)
            })
            .catch((err)=> console.log(err))
        }, 3000)
       
    },[])
    
    function removeMaintenance(id){
       
        fetch(`http://localhost:5000/maintenance/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp)=> resp.json())
        .then(()=> {
            setMaintenance(Maintenance.filter((maintenance)=> maintenance.id !== id))
            setMaintenanceMessage('Manutenção removida com sucesso')
        })
        .catch((err)=> console.log(err))
    }

    return (
        <div className={styles.maintenances_container}>
            <div className={styles.title_container}>
               <h1>Minhas Manutenções</h1>
               <LinkButton to="/newmaintenance" text="Cadastrar Manutenção"/>
            </div >
            { message && 
                (<Message type="sucess" msg={message}/>)
            }
            { MaintenanceMessage && 
                (<Message type="sucess" msg={MaintenanceMessage}/>)
            }
            <Container customClass="start" >
                {Maintenance.length > 0 && Maintenance.map((maintenance)=> (
                    <MaintenanceCard 
                        id={maintenance.id}
                        name={maintenance.name}
                        budget={maintenance.budget}
                        coment={maintenance.coment}
                        category={maintenance.category.name}
                        key={maintenance.id}
                        handleRemove={removeMaintenance}
                    />
                ))}
                {!RemoveLoading && <Loading/>}
                {RemoveLoading && Maintenance.length === 0 && (
                    <p>Não ha Manutenções criadas!</p>
                )}
            </Container>
        </div>
        
    )
}

export default Maintenances