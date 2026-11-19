import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function AddTodo () {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completedMark, setCompletedMark] = useState(false);

    return(
        <Container>
            <h1 className="my-3">Add Todo</h1>
        </Container>
    )
}