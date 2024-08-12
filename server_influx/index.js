
const express = require("express");
const app = express();
const cors = require("cors");
const Influx = require('influx');
const { response } = require("express");

 


const client = new Influx.InfluxDB({
    host: 'localhost',
    port: 8086,
    username: 'root',
    password: '20102011',
    database: 'HUNTER',
});
app.use(express.json());
app.use(cors());

app.get('/Capitacao',(req,res) => {
    client.query('SELECT * FROM Capitacao').then(results => {
        res.send(results);
    }, (err,result) =>{
       if (err){
        console.log(err)
       }
  });  
})
app.get('/Processo',(req,res) => {
    client.query('SELECT * FROM Processo').then(results => {
        res.send(results);
    }, (err,result) =>{
       if (err){
        console.log(err)
       }
  });  
})
app.get('/Packaging',(req,res) => {
    client.query('SELECT * FROM Packaging').then(results => {
        res.send(results);
    }, (err,result) =>{
       if (err){
        console.log(err)
       }
  });  
})


app.listen(3001, () => {
    console.log("Rodando na porta 3001")
})
