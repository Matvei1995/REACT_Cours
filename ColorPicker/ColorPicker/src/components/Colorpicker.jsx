import { useState } from "react";

export function Colorpicker() {
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(27);
  const [blue, setBlue] = useState(0.1);

  const [transparence, setTransparence] = useState();

  const colorPickerStyle = {
    display:"flexbox",
    justifyContent:"center",
    height:150,
    width:150,
    borderRadius:"15px",
    backgroundColor:
      `rgba(${red} ,${green}, ${blue}, ${transparence})`,
  };

  const styleIpsumP = {
    color:`rgba(${red} ,${green}, ${blue}, ${transparence})`,
  }
  function updateRed(e) {
    const range = e.target.value;
    setRed(range);
  }

  function updateGreen(e) {
    const range = e.target.value;
    setGreen(range);
  }

  function updateBlue(e) {
    const range = e.target.value;
    setBlue(range);
  }
  function updateOpacity(e) {
    const opac = e.target.value;
    setTransparence(opac);
  }
  return (
    <div>
      <h1>Color picker</h1>
      <div style={colorPickerStyle}></div>
      <p style={styleIpsumP}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nulla mollitia hic eveniet. Alias, est neque, voluptas laudantium aut ipsa accusantium officia harum rem quasi molestiae quas possimus! Eaque, quidem!</p>

      <span>Red</span>
      <input type="range" onInput={updateRed} min="0" max="255" />
      <br />
      <span>Green</span>
      <input type="range" onInput={updateGreen} min="0" max="255" />
      <br />

      <span>Blue</span>
      <input type="range" onInput={updateBlue} min="0" max="255" />
      <br />
      <span>Transparence</span>
      <input
        type="range"
        onInput={updateOpacity}
        step="0.01"
        min="0.0"
        max="1.0"
      />
    </div>
  );
}
