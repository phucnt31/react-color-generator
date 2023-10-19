import React from "react";

const SingleColor = ({ color }) => {
  const { weight, hex } = color;

  return (
    <div className="color" style={{ background: `#${hex}` }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </div>
  );
};

export default SingleColor;
