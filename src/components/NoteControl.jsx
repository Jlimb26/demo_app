import PropTypes from "prop-types";
import { Accordion, ActionIcon, Box } from "@mantine/core";
import { IconTrashX } from "@tabler/icons-react";

function NoteControl(props) {
  const { note } = props;

  const handleOnRemove = () => {
    // TODO remove the note!
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Accordion.Control>{note.title}</Accordion.Control>
      <ActionIcon onClick={handleOnRemove} size="lg">
        <IconTrashX size={16} />
      </ActionIcon>
    </Box>
  );
}

export default NoteControl;

NoteControl.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
