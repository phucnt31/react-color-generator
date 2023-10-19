import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  const createColor = (color) => {
    const newColor = new Values(color).all(10);
    setColors(newColor);
    toast.success("New color created");
  };

  return (
    <main>
      <ToastContainer position="top-center" />
      <Form createColor={createColor} />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;
