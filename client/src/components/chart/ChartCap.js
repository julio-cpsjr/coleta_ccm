import Chart from 'chart.js/auto';
import React, {useEffect} from 'react';
import styles from './ChartCap.module.css';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, LineController } from 'chart.js';
import Annotation from 'chartjs-plugin-annotation';
import ChartDataLabels from 'chartjs-plugin-datalabels';


ChartJS.register(
    Title, Tooltip,LineElement,Legend,
    CategoryScale,LinearScale, PointElement, LineController, Annotation,ChartDataLabels
)

let LineChart;
function ChartCap({data_label1,data_label2, set_label,titulo,id}){
    
    useEffect(() => {
        buildChart();
    },[
        setTimeout(()=>{
            buildChart();
        }, 1000)
    ]);
    
    const buildChart = ()=>{
         var ctx = document.getElementById(`${id}`).getContext("2d");
          if (typeof LineChart !== "undefined")
          LineChart.destroy();
          LineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: set_label,
                // labels: ['Teste1','Teste2','Teste3','Teste4','Teste5'],
                datasets: [
                    {
                        label: '*C',
                        // data: Temp_atual1,
                        data: data_label1,
                        fill: false,
                        backgroundColor: 'rgb(0,0,0)',
                        borderColor: 'rgb(255,255,0)',
                        borderWidth: 1,
                       },
                       {
                        label: '*%',
                        display: true,
                        // data: Temp_atual1,
                        data: data_label2,
                        fill: false,
                        backgroundColor: 'rgb(0,0,0)',
                        borderColor: 'rgb(0,0,255)',
                        borderWidth: 1,
                       }
                    ],
                   },
            options: {
                scales: {
                    x: {
                        grid: {
                            display: false,
                            offset: false,
                        },
                    },
                    y: {
                        grid: {
                            display: false,
                        },
                        min: 0,
                    }
                },
                animation: {
                    duration: 750,
                },
                
                plugins: {
                    datalabels:{
                        display:true,
                        color: 'rgb(255,255,255)',
                        clamp: true,
                        font: {
                            weight: 'bold',
                        },
                    },
                    tooltip: {
                        enabled: true,
                        title: 'Texte'
                    },
                    title: {
                        display: true,
                        text: `${titulo}`,
                        position: 'top',
                        align: 'center',
                        font: {
                            weight: 'bold',
                        },
                        color: 'rgb(255,255,255)',
                    },
                    legend:{
                      labels:{
                          font:{
                              weight: 'bold',
                          }
                        }
                  },
                  annotation: {
                      annotations: {
                        line1: {
                          display: true,
                          type: 'line',
                          yMin: 45,
                          yMax: 45,
                          borderColor: 'rgb(255, 0, 0)',
                          borderWidth: 1,
                                },
                            }
                        },
                },
            },
        });
    };
    return(
        <div className={styles.chart}>
            
      <canvas  id ={`${id}`} className={styles.canvas}/>
      
     </div>
    ) 
}
export default ChartCap;