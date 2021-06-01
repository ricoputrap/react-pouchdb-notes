import { useState } from "react";
import './App.css';
import HomePage from "./pages/HomePage";

function App() {
  const [notes, setNotes] = useState([
    {
      _id: 1,
      title: "My First Note",
      body: "This is the body of my first notes.",
      updatedAt: new Date()
    },
    {
      _id: 2,
      title: "My Second Note",
      body: "This is the body of my second notes.",
      updatedAt: new Date()
    }
  ])
  return (
    <div className="App">
      <HomePage notes={notes} />
    </div>
  );
}

export default App;
