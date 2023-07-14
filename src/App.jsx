import { useState } from 'react'
import Notes from './components/Notes'
import { Container } from '@mantine/core'
import Search from './components/Search'

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
  const [query, setQuery] = useState("")

  return (
    <Container>
      <Search query={query} setQuery={setQuery} />
      <Notes notes={notes} query={query}/>
    </Container>
  )
}

export default App
