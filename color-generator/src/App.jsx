import { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f63763').all(10))

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            placeholder="#h68383"
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
          />
          <button
            type="submit"
            className="btn"
            style={{ marginLeft: "9px", height: "30px" }}
          >
            generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          console.log(color);
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>;
        })}
      </section>
    </>
  );
};
export default App;
