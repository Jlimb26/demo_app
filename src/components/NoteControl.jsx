import PropTypes from "prop-types";
import { Accordion, ActionIcon, Box } from "@mantine/core";
import { IconTrashX, IconPencil } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function NoteControl(props) {
    const { note, remove } = props;
    const { id, title } = note;
    const navigate = useNavigate();

    const handleOnEdit = () => {
        navigate("/edit");
    };

    const handleOnRemove = () => {
        remove(id);
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Accordion.Control>{title}</Accordion.Control>
            <ActionIcon onClick={handleOnEdit} size="lg">
                <IconPencil size={16} />
            </ActionIcon>
            <ActionIcon onClick={handleOnRemove} size="lg">
                <IconTrashX size={16} />
            </ActionIcon>
        </Box>
    );
}

export default NoteControl;

NoteControl.propTypes = {
    remove: PropTypes.func.isRequired,
    note: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }),
};
