import { useState } from "react";

export function App(){

    const [red,setRed] = useState(255);
    const [green,setGreen] = useState(27);
    const [blue,setBlue] = useState(0.10);
    
    const [transparence,setTransparence] = useState();

    const colorPickStyle = {
        height : 100,
        width : 100,
        backgroundColor : "rgba("+red+","+green+","+blue+","+transparence+")"
    };
    function updateRed(event){
        const range = event.target.value;
        setRed(range);
        
    }

    function updateGreen(event){
        const range = event.target.value;
        setGreen(range);
    }

    function updateBlue(event){
        const range = event.target.value;
        setBlue(range);
    }
    function updateOpacity(ev){
        const opa = ev.target.value;
        console.log(opa);
        setTransparence(opa)
    }
    return (
        <div>
            <h1>Color picker</h1>
            <div style={colorPickStyle}>

            </div>

            <span>Red</span>
            <input type="range" onInput={updateRed} min="0" max="255"/>
            <br />
            <span>Green</span>
            <input type="range" onInput={updateGreen} min="0" max="255"/>
            <br />

            <h2>Exercice : Mettre en place le blue et la transparence.</h2>
            <span>Blue</span>
            <input type="range" onInput={updateBlue} min="0" max="255"/>
            <br />
            <span>Transparence</span>
            <input type="range" onInput={updateOpacity} step='0.01' min="0.0" max="1.0"/>



            
        </div>
    )
}




// const [date,setDate] = useState(new Date());
// //mise ajour de la date
// setTimeout(()=>{
//   setDate(new Date());
// },1000)

// const name_app = "Task";
// const today = "Aujourd'hui nous somme le ";
// const today_ = date.toLocaleDateString();
// return (
//   <>
//    <h1>{name_app}</h1>
//    <p>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>
//    <p> {today} {today_}</p>
//    <h2>Voici mon h2</h2>
//    <img src="https://picsum.photos/200/300" alt="image" />
  
//   </>