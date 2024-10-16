import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-green-500 p-3">
        Vite with Tailwind-css
      </h1>
      <Card username="John Doe"/>
      <Card />
      <Card />
    </>
  );
}

export default App;
