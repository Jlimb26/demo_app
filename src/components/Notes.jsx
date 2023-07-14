import Note from "./Note";
import PropTypes from "prop-types";
import { Accordion } from "@mantine/core";
import NoteControl from "./NoteControl";

function Notes(props) {
  const { notes, query } = props;

  return (
    <Accordion chevronPosition="left">
      {notes
        .filter(
          (note) =>
            note.title.toLowerCase().includes(query.trim().toLowerCase()) ||
            note.text.toLowerCase().includes(query.trim().toLowerCase())
        )
        .map((note, index) => (
          <Note key={index} note={note} />
        ))}
    </Accordion>
  );
}

export default Notes;

Notes.propTypes = {
  query: PropTypes.string,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};
