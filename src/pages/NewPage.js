import { useState } from "react";
import { Link } from "react-router-dom";

import "./NewPage.css";

const NewPage = ({onSave, history}) => {
  const [note, setNote] = useState({
    title: '',
    body: '',
    createdAt: undefined,
    updatedAt: undefined
  });

  const updateValue = e => {
    setNote(prevNote => {
      return {
        ...prevNote,
        [e.target.name]: e.target.value
      }
    });
  }

  const submitNote = async (e) => {
    e.preventDefault();
    const newNoteID = await onSave(note);

    history.replace(`/notes/${newNoteID}`);
  }

  return (
    <div className="note-form">
      <h1>New Note</h1>
      <form onSubmit={submitNote}>
        <div className="note-form-field">
          <label>Title</label>
          <input type="text" name="title" value={note.title} onChange={updateValue} />
        </div>
        <div className="note-form-field note-form-field-text">
          <label>Body</label>
          <textarea name="body" value={note.body} onChange={updateValue} />
        </div>
        <div className="note-form-buttons">
          <button className="btn">Save</button>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  )
}

export default NewPage;