import React from 'react'
import NoteList from '../components/NoteList'

const HomePage = ({notes}) => {
  return (
    <div>
      <h1>Notes</h1>
      <NoteList notes={notes} />
    </div>
  )
}

export default HomePage
