const NotePage = ({note}) => {

  // wait for the asynchronous operation of fetching the note until it is completed
  if (!note) return null;

  return (
    <div>
      <h1>{ note.title }</h1>
      <div>{ note.body }</div>
    </div>
  )
}

export default NotePage;