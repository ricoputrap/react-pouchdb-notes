import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import NotePage from "./pages/NotePage";

function App() {
  const [notes, setNotes] = useState([
    {
      _id: 0,
      title: "My First Note",
      body: "This is the body of my first notes.",
      updatedAt: new Date()
    },
    {
      _id: 1,
      title: "My Second Note",
      body: "This is the body of my second notes.",
      updatedAt: new Date()
    }
  ])
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar /> 
        <div className="app-content">
          <Route exact path="/" component={props => <HomePage {...props} notes={notes} />} />
          <Route exact path="/notes/:id" component={props => <NotePage {...props} note={notes[props.match.params.id]} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
