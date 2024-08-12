import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import styles from './Processo.module.css';
import ChartProc from '../chart/ChartProc';

function Processo(){
    
    const [Posts,setPosts] = useState([]);
    
    useEffect(() => {
        denovo();
    },[]);

    async function denovo(){
            
        Axios.get('http://localhost:3001/Processo')
        .then((data)=> {
            setPosts(data.data);
            // console.log(data);
        })
        .catch((err)=> console.log(err));
    };
    
    var Values = [];
    Values = Object.values(Posts); // Coleta somente o JSON results {time, Temperatura , Humidade}
    //Coleta CCM Processo
    var Temp_Proc = Values.map((item)=>{    
        let temp_arr = item.Temperatura_CCMProcesso
        return temp_arr
    }); // Coleta os valores de Temperatura
    
    var Temp_atual_Proc = [];
    Temp_atual_Proc = Temp_Proc.slice(-12,-1); // Pega os 10 primeiros

    var Hum_Proc = Values.map((item)=>{    
        let hum_arr = item.Humidade_CCMProcesso
        return hum_arr
    }); // Coleta os valores de Temperatura
    
    var Hum_atual_Proc = [];
    Hum_atual_Proc = Hum_Proc.slice(-12,-1); // Pega os 10 primeiros
    
    let Hora_Proc = Values.map((item)=>{
        let posicao = item.Hora_CCMProcesso + ''
        return posicao
    });  // Coleta os valores de Temperatura
    
    let Hora_atual_Proc = []; 
    Hora_atual_Proc = Hora_Proc.slice(-12,-1);  // Pega os 10 primeiros
    // Fim coleta Processo
    
    return(
        <div className={styles.container_chart}>
            <ChartProc data_label1={Temp_atual_Proc} set_label={Hora_atual_Proc} data_label2={Hum_atual_Proc} titulo="CCM Processo" id="LineChart_CCMProc" />
          </div>
    ) 
}
export default Processo;