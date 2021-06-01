import { Link } from "react-router-dom";

const NoteList = ({notes}) => {
  return (
    <div>
      {notes.map(note => (
        <div key={note._id}>
          <Link to={`/notes/${note._id}`}>
            <h2>{note.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default NoteList