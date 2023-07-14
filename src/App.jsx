import { useState } from 'react'

function App() {
  const [notes, setNotes] = useState([
    {
      title: "test1",
      text: "test1.1"
    },
    {
      title: "test2",
      text: "tes2.1"
    }
  ])

  return (
    <>
      {
        notes.map(note => (
          <div>
            <p>{note.title}</p>
            <p>{note.text}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
