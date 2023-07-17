import { Button, Container, Group, Stack } from "@mantine/core";
import { TextInput, Textarea } from "@mantine/core";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";

function Edit(props) {
    const { edit } = props;
    const navigate = useNavigate();
    const location = useLocation();
    const { id, text: _text, title: _title, mode } = location.state;

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    useEffect(() => {
        if (_text !== text) {
            setText(_text);
        }

        if (_title !== title) {
            setTitle(_title);
        }
    }, [_text, _title]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSave = () => {
        edit(id, title, text);
        navigate("/", { replace: true });
    };

    const handleCancel = () => {
        console.log("cancel");
        navigate("/", { replace: true });
    };

    return (
        <Container>
            <Stack spacing="lg">
                <TextInput
                    placeholder="Your note's title"
                    label="Title"
                    withAsterisk
                    value={title}
                    onChange={handleTitleChange}
                />
                <Textarea
                    placeholder="Your note's text"
                    label="Text"
                    withAsterisk
                    autosize
                    minRows={5}
                    value={text}
                    onChange={handleTextChange}
                />
                <Group position="center" spacing="xl" grow>
                    <Button variant="subtle" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="default" onClick={handleSave}>
                        Save
                    </Button>
                </Group>
            </Stack>
        </Container>
    );
}

export default Edit;

Edit.propTypes = {
    edit: PropTypes.func,
}; 
