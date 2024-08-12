import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import styles from './Capitacao.module.css';
import ChartCap from '../chart/ChartCap';

function Capitacao(){
    
    const [Posts,setPosts] = useState([]);
    
    useEffect(() => {
        denovo();
    },[]);

    async function denovo(){
            
        Axios.get('http://localhost:3001/Capitacao')
        .then((data)=> {
            setPosts(data.data);
            // console.log(data);
        })
        .catch((err)=> console.log(err));
    };
    
    var Values = [];
    Values = Object.values(Posts); // Coleta somente o JSON results {time, Temperatura , Humidade}
    
    
    //Coleta CCM Capitacao
    var Temp_Cap = Values.map((item)=>{    
        let temp_arr = item.Temperatura_CCMCapitacao
        return temp_arr
    }); // Coleta os valores de Temperatura
    
    var Temp_atual_Cap = [];
    Temp_atual_Cap = Temp_Cap.slice(-12,-1); // Pega os 10 primeiros

    var Hum_Cap = Values.map((item)=>{    
        let hum_arr = item.Humidade_CCMCapitacao
        return hum_arr
    }); // Coleta os valores de Temperatura
    
    var Hum_atual_Cap = [];
    Hum_atual_Cap = Hum_Cap.slice(-12,-1); // Pega os 10 primeiros
    
    let Hora_Cap = Values.map((item)=>{
        let posicao = item.Hora_CCMCapitacao + ''
        return posicao
    });  // Coleta os valores de Temperatura
    
    let Hora_atual_Cap = []; 
    Hora_atual_Cap = Hora_Cap.slice(-12,-1);  // Pega os 10 primeiros
    // Fim coleta Capitação
    
    
    return(
        <div className={styles.container_chart}>
            <ChartCap data_label1={Temp_atual_Cap} set_label={Hora_atual_Cap} data_label2={Hum_atual_Cap} titulo="CCM Capitacao" id="LineChart_CCMCap" />
          </div>
    ) 
}
export default Capitacao;