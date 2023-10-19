import React from "react";
import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

const ColorList = ({ colors }) => {
  return (
    <article className="colors">
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </article>
  );
};

export default ColorList;
