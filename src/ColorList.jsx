import React from "react";
import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

const ColorList = ({ colors }) => {
  return (
    <article className="colors">
      {colors.map((color) => {
        return <SingleColor key={nanoid()} color={color} />;
      })}
    </article>
  );
};

export default ColorList;
