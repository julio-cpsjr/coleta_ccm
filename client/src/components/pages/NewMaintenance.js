import MaintenanceForm from '../maintenance/MaintenanceForm'
import styles from './NewMaintenance.module.css'
import {useNavigate} from 'react-router-dom'


export default function NewProject(){

    const history = useNavigate()
        
    function createPost(maintenance){
        // initialize costs and services
        maintenance.costs = 0
        maintenance.services = []

        fetch('http://localhost:5000/maintenance',{
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(maintenance),    
        }).then((resp)=> resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            
            history('/maintenances', {message:"Manutenção inserida com sucesso!"})
            
        })
        .catch((err) => console.log(err))
    }

    return(
        <div>
        <section className={styles.newmaintenance_container}>
            <h1>Cadastrar manutenção</h1>
            <p>Insira a manutenção realizada</p>
            <MaintenanceForm handleSubmit={createPost} btnText="Cadastrar manutenção"/>
        </section>
        </div>
    )
}