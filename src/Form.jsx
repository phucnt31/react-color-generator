import React, { useState } from "react";

const Form = () => {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="container">
      <form className="color-form" onSubmit={handleSubmit}>
        <h4>color generator</h4>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          placeholder="#f15025"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit" className="btn">
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;
