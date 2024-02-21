import { Content } from "./Content";
import "../App.css";
import { ColorChange } from "./ColorChange";
import { useState } from "react";
import { Slider } from "./Slider";

export function App() {
  const [styleContent, setStyleContent] = useState({ color: "red" });


  function updateTextSize(newSize) {
    setStyleContent({
      ...styleContent, // Je conserver les autres styles
      fontSize: `${newSize}px`, // J'ajoute le nouveau
    });

  }

  function updateInterlettrage(newValue){
    setStyleContent({
    ...styleContent,
    letterSpacing : `${newValue}px`
    });
    }

    function updateColor(newColor) {
      setStyleContent({
        // ... est un spread opérator
        ...styleContent,
        color: `rgba(${newColor.red},${newColor.green},${newColor.blue})`,
      });
    }

    function updatePadding(newValue){
      setStyleContent({
        ...styleContent,
        padding:`${newValue}px`

      })
    }
    function updateBorderRadius(newValue){
      setStyleContent({
        ...styleContent,
        borderRadius:`${newValue}px`
      })
    }

    function updateBackgroundColor(newColor){
      setStyleContent({
        ...styleContent,
        backgroundColor: `rgba(${newColor.red},${newColor.green},${newColor.blue})`
      })
    }

  return (
    <>
      <ColorChange onColorChange={updateColor} />
      <Slider
        name="Taille du texte"
        onValueChange={updateTextSize}
      />
      <Slider
        name="Interlettrage"
        onValueChange={updateInterlettrage}
      />
      <Slider 
        name="Padding"
        onValueChange={updatePadding}
      />
      <Slider 
      name="BorderRadius"
      onValueChange={updateBorderRadius}
      />
      <ColorChange name="Background" onColorChange={updateBackgroundColor}/>

      <Content style={styleContent}/>
    
      
    </>
  );
}
