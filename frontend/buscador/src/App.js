import React from "react";
import './estilo.css';
import { useState } from 'react';
import api from './services/api';
import apibcb from './services/apibcb'
import axios from "axios"

 function App() {

  const[input, setInput] = useState('')
  const[Dados, setOdata] = useState({})

  async function handleSearch(){

    if(input ===''){
      alert("Preencha alguma data")
      return;
    }

    try{
      const response = await api.get(`${input}.json`) 
      setOdata(response.data)

    }catch{
        try{
          alert("O dado não está no banco de dados")
          
          var dataf = formatadata({input})
          const response = await apibcb.get(`${dataf}.'&$top=1&$format=json&$select=cotacaoCompra,cotacaoVenda`);
          setOdata(response.data.value[0])

          if(Dados.cotacaoCompra===undefined){
            alert("Data não Válida")
            window.location.reload()
          }else{
            const headers = {
              'odata':`${input}`,
              'cotacaoCompra':`${Dados.cotacaoCompra}`,
              'cotacaoVenda':`${Dados.cotacaoVenda}`,
            };          

            const resp = await axios.post('http://127.0.0.1:8000/tabelas/', headers )
            return;
        }

        }catch{
          alert("Error: Verifique se é uma data válida")
        }
    }
  }

  return (
    <div className="container">
      <h1 className= 'title' >Cotação Histórica - Dólar $$</h1>
      <div className="container_input">
        
        <input type= "date"
        value={input}
        onChange={(e)=> setInput(e.target.value)  }
        />
        
        <button className="Botao_Procurar" onClick={handleSearch}>
          Buscar
        </button>
      </div>

      <div>
        <main className="main">
          <h3>
            Cotações - Compra e Venda
          </h3>

          <span>Data da Requisição: {input}  </span>
          <span>Compra: {Dados.cotacaoCompra}</span>
          <span>Venda: {Dados.cotacaoVenda}</span>


        </main>
      </div>
    </div>
  );

  function formatadata(datai){
    const aux = JSON.stringify(datai)
    const text = aux.split('"')[3].split('-')

    //alert(text[1]+'-'+text[2]+'-'+text[0])
    
    return text[1]+'-'+text[2]+'-'+text[0]
  }
}
export default App;
