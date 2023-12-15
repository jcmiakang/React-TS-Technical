import { useState } from "react";
import ContentContainer from "./ContentContainer";

export type Name = {first: string, last: string}

function App() {
  const [name, setName] = useState({
    first: "",
    last: "",
  });

  const handleNameUpdate=(field: keyof typeof name , newName: string) => {
    setName((prevState) => {
      prevState[field] = newName
      return prevState
    })
  }

  return (
   
      <div className="container">
        <h5>App</h5>
        <ContentContainer handleNameUpdate={handleNameUpdate} name={name} />
      </div>
 
  );
}

export default App;
