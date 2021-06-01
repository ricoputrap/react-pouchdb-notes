const NotePage = ({note}) => {
  return (
    <div>
      <h1>{ note.title }</h1>
      <div>{ note.body }</div>
    </div>
  )
}

export default NotePage;