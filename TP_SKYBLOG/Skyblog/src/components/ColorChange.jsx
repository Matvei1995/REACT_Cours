import { useEffect, useState } from "react"

export function ColorChange({onColorChange,name="Colors"}){
    

    const [red,setRed] = useState(255);
    const [green,setGreen] = useState(27);
    const [blue,setBlue] = useState(0);

    const backgroundColorStyle = {
        bacgroundColor: `rgba ${red},${green},${blue}`
    }

    useEffect(()=>{
        onColorChange({
            red: red,
            green : green,
            blue : blue
        });
    },[red,green,blue]);

    function updateRed(e){
        const range = e.target.value;
        setRed(range); 
    }

    function updateGreen(e){
        const range = e.target.value;
        setGreen(range);
    }

    function updateBlue(e){
        const range = e.target.value;
        setBlue(range);
    }


    return(
        <>
        <h1>{name}</h1>
        <label>
        <span>RED</span>
        <input style={backgroundColorStyle} onInput={updateRed} type="range" max="255" />
        </label>
        <label>
        <span>GREEN</span>
        <input style={backgroundColorStyle} onInput={updateGreen}type="range" max="255"/>
        </label>
        <label>
        <span>BLUE</span>
        <input style={backgroundColorStyle} onInput={updateBlue} type="range" max="255" />
        </label>
        
        
        
        </>
    )



}