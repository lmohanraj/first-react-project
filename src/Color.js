import { useState } from 'react';
import { ColorBox } from './ColorBox';

export function Color() {
  const [color, setColor] = useState();
  const [colors, setcolors] = useState([]);
  const styles = {
    backgroundColor: color,
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "10px"
  };
  return (
    <div>
      <input
        style={styles}
        placeholder="Enter a color"
        value={color}
        onChange={(evt) => setColor(evt.target.value)} />

      <button class="Add-color-button" onClick={() => { setcolors([...colors, color]); }}>Add color</button>
      {colors.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
