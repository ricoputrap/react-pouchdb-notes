const NoteList = ({notes}) => {
  return (
    <div>
      {notes.map(note => (
        <div>
          <h2>{note.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default NoteList
