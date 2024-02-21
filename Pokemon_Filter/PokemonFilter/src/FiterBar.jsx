export function FiterBar({ handleChange }) {
  return (
    <div>
      <label >Attaque min : </label>
      <input
        type="range"
        id="attaqueMin"
        name="attaqueMin"
        onChange={handleChange}
      />
    </div>
  );
}
