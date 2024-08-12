import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import styles from './Packaging.module.css'
import ChartPack from '../chart/ChartPack';


function Packaging(){
    
    const [Posts,setPosts] = useState([]);
    
    useEffect(() => {
        denovo();
    },[]);

    async function denovo(){
            
        Axios.get('http://localhost:3001/Packaging')
        .then((data)=> {
            setPosts(data.data);
            // console.log(data);
        })
        .catch((err)=> console.log(err));
    };
    
    var Values = [];
    Values = Object.values(Posts); // Coleta somente o JSON results {time, Temperatura , Humidade}
    
    //Coleta CCM Packaging
    var Temp_Pack = Values.map((item)=>{    
        let temp_arr = item.Temperatura_CCMPackaging
        return temp_arr
    }); // Coleta os valores de Temperatura
    
    var Temp_atual_Pack = [];
    Temp_atual_Pack = Temp_Pack.slice(-12,-1); // Pega os 10 primeiros      
    
    var Hum_Pack = Values.map((item)=>{    
        let hum_arr = item.Humidade_CCMPackaging
        return hum_arr
    }); // Coleta os valores de Temperatura
    
    var Hum_atual_Pack = [];
     // Pega os 10 primeiros
     Hum_atual_Pack = Hum_Pack.slice(-12,-1);

    let Hora_Pack = Values.map((item)=>{
        let posicao = item.Hora_CCMPackaging + ''
        return posicao
    });  // Coleta os valores de Temperatura
    
    let Hora_atual_Pack = []; 
    Hora_atual_Pack = Hora_Pack.slice(-12,-1);// Pega os 10 primeiros
    // Fim coleta Packaging
    
    return(
        <div className={styles.container_chart}>
            <ChartPack data_label1={Temp_atual_Pack} set_label={Hora_atual_Pack} data_label2={Hum_atual_Pack} titulo="CCM Packaging" id="LineChart_CCMPack" />
          </div>
    ) 
}
export default Packaging;