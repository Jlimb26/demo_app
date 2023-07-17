import { useState } from 'react'
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import Edit from './pages/Edit'
import Home from './pages/Home'

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "test1",
      text: "test1.1"
    },
    {
      id: 2,
      title: "test2",
      text: "tes2.1"
    }
  ])
  const [query, setQuery] = useState("")

  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const remove = (id) => {
    setNotes((notes) => notes.filter((note) => note.id !== id));
  };

  const add = () => {
    const note = {
      id: 4,
      title: "New note title",
      text: "New note text",
    };
    setNotes((notes) => [...notes, note]);
    return note;
  };


  const edit = (id, title, text) => {
    setNotes((notes) =>
      notes.map((note) => {
        if (note.id !== id) {
          return note;
        } else {
          return { id, title, text };
        }
      })
    );
  };


  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Routes>
          <Route
            path="/"
            element={
              <Home
                notes={notes}
                query={query}
                setQuery={setQuery}
                add={add}
                remove={remove}
              />
            }
          />
          <Route path="/edit" element={<Edit edit={edit} />} />
        </Routes>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App
