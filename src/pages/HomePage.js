import React from 'react'
import NoteList from '../components/NoteList'

const HomePage = ({notes}) => {
  const noteList = Object.values(notes);

  return (
    <div>
      <h1>Notes</h1>
      <NoteList notes={noteList} />
    </div>
  )
}

export default HomePage
