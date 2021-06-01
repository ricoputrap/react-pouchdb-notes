import { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import NewPage from "./pages/NewPage";
import NotePage from "./pages/NotePage";
import DB from "./db";

function App() {
  const [notes, setNotes] = useState({});
  const [db, setDB] = useState(new DB());

  useEffect( () => {
    const fetchNotes = async () => {
      const fetchedNotes = await db.getAllNotes();
      console.log('fetchedNotes:', fetchedNotes)
      setNotes(fetchedNotes);
    }
    fetchNotes();
  }, []);

  const saveNewNote = async (newNote) => {
    let { id } = await db.createNote(newNote);
    // setNotes(prevNotes => [...prevNotes, newNote]);
    setNotes(prevNotes => {
      return {
        ...prevNotes,
        [id]: newNote
      }
    })

    return id;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar /> 
        <div className="app-content">
          <Route exact path="/" component={props => <HomePage {...props} notes={notes} />} />
          <Route exact path="/notes/:id" component={props => <NotePage {...props} note={notes[props.match.params.id]} />} />
          <Route exact path="/new" component={props => <NewPage {...props} onSave={saveNewNote} /> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
