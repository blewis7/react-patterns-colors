import React, { useEffect, useState } from "react";
import ColorList from "./ColorList";
import ColorForm from "./ColorForm";
import Color from "./Color";
import {BrowserRouter, Route, Routes, Navigate, useParams} from "react-router-dom";

function App() {
  const [colors, setColors] = useState({});

  

  const Add = (color) => {
    setColors(colors => ({...colors, ...color}));
    useEffect(
      () => localStorage.setItem("colors", JSON.stringify(colors)),
      [colors]
    );
  };

  
  function renderCurrentColor() {
    const { name } = useParams;
    const color = colors[name];
    return <Color name={color} />;
  };
  
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route path="/colors/:name" render={renderCurrentColor} />
        <Route path="/colors/new" element={<ColorForm createColor={Add} />} />
        <Route path="/" element={<Navigate replace to="/colors" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
