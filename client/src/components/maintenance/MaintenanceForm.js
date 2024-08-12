import Input from '../form/Input'
import Select from '../form/Select'
import Submitbutton from '../form/Submitbutton'
import styles from './MaintenanceForm.module.css'

import {useState, useEffect} from 'react'

function MaintenanceForm({btnText, handleSubmit, maintenanceData}){
    const [categories, setcategories] = useState([])
    const [maintenance, setmaintenance] = useState(maintenanceData || {})

  useEffect(()=>{
    fetch("http://localhost:5000/categories",{
        method: "GET",
        headers:{
            'Content-Type': 'application/json'
        }
    }).then((resp)=> resp.json())
    .then((data)=> {
        setcategories(data)
    })
    .catch((err)=> console.log(err))

  },[])
    
    const submit = (e) => {
        e.preventDefault()
        handleSubmit(maintenance)
    }
    
    function handleChange(e){
        setmaintenance({...maintenance, [e.target.name]: e.target.value})
    }

    function handleCategory(e){
        setmaintenance({...maintenance, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,

        }})
    }


    return(
        <form onSubmit={submit} className={styles.form}>
         <Input 
         type="text" 
         text="Nome do equipamento" 
         name="name" 
         placeholder="Insira a tag do equipamento"
         handleOnChange={handleChange}
         value={maintenance.name ? maintenance.name : ''}
         />
         <Input 
         type="date" 
         text="Data da manutenção" 
         name="budget" 
         placeholder="Insira o dia da manutenção"
         handleOnChange={handleChange}
         value= {maintenance.budget ? maintenance.budget : ''}
         />
         <Input 
         type="text" 
         text="Comentario" 
         name="coment" 
         placeholder="Insira o comentario"
         handleOnChange={handleChange}
         value={maintenance.coment ? maintenance.coment : ''}
         />
         <Select 
         name="category_id" 
         text="Selecione a categoria" 
         options={categories}
         handleOnChange={handleCategory}
         value= {maintenance.category ? maintenance.category.id : ''}
         />
         <Submitbutton text={btnText}/>
        </form>
    )
}

export default MaintenanceForm