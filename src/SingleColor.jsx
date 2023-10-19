import React from "react";
import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const { weight, hex } = color;

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copied to clipboard");
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    }
  };

  return (
    <div
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </div>
  );
};

export default SingleColor;
