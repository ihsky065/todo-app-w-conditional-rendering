import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function AddTodo () {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completedMark, setCompletedMark] = useState(false);

    return(
        <Container>
            <h1 className="my-3">Add Todo</h1>
            <Form>
                <Form.Group className='mb-3' controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Example: Get software engine job"
                    required
                    type="text"
                    >        
                    </Form.Control>
                </Form.Group>
            </Form>
        </Container>
    )
}