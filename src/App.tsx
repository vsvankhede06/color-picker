import "./styles.css";
import { useState } from "react";

export default function App() {
  const [selectedColor, setSelectedColor] = useState("#000000");
  const handleOnChange = (e) => {
    setSelectedColor(e.target.value);
  };
  return (
    <div>
      <div
        className="App"
        id="display-color"
        style={{ background: selectedColor }}
      >
        <input
          type="color"
          id="color-picker"
          value={selectedColor}
          onChange={handleOnChange}
        />
      </div>
      <h1 style={{ color: selectedColor }}>Color</h1>
    </div>
  );
}
