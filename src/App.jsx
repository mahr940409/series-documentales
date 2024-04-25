
import { useState } from "react";
import { useRef } from "react";
import series from './components/seriesDocumentales.json'
import Subseries from "./components/Subseries";

const App = () => {
  
 const [inputValor, setInputValor] = useState() 
 const [serieS, setSerieS] = useState(0)
 

 const inputSearch = useRef()

 const recibeEvento = e => {
    e.preventDefault()
    setInputValor(inputSearch.current.value)
    setSerieS(inputSearch.current.value-1)
 }

const serie1 = () => {
  setSerieS(0)
}
const serie2 = () => {
  setSerieS(1)
}
const serie3 = () => {
  setSerieS(2)
}
const serie4 = () => {
  setSerieS(3)
}

  return (
    <div>
      <h1>Series Documentales</h1>
       <ul>
          <li onClick = {serie1}>{series[0].nombre}</li>
          <li onClick = {serie2}>{series[1].nombre}</li>
          <li onClick = {serie3}>{series[2].nombre}</li>
          <li onClick = {serie4}>{series[3].nombre}</li>
        </ul>
        <form onSubmit={recibeEvento} action="">
            <input ref={inputSearch} type="text" />
            <button>Presiona</button>
        </form>
           <Subseries series = {series}
           serieSel = {serieS}
           />  
    </div>
  );
};

export default App;
