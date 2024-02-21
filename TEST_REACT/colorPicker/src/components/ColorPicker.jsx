import { useState } from "react";

export function ColorPicker(){

    const [red,setRed] = useState(255);
    const [green,setGreen] = useState(27);
    const [blue,setBlue] = useState(1);
    
    const [transparence,setTransparence] = useState();

    const colorPickStyle = {
        height : 100,
        width : 100,
        borderRadius : "15px",
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
        setTransparence(opa)
    }
    return (
        <div className="Layout"> 
            <h1>Color picker</h1>
            <div style={colorPickStyle}>

            </div>

            <span>Red</span>
            <input type="range" onInput={updateRed} min="0" max="255"/>
            <br />
            <span>Green</span>
            <input type="range" onInput={updateGreen} min="0" max="255"/>
            <br />
            <span>Blue</span>
            <input type="range" onInput={updateBlue} min="0" max="255"/>
            <br />
            <span>Transparence</span>
            <input type="range" onInput={updateOpacity} step='0.01' min="0.0" max="1.0"/>



            
        </div>
    )
}
