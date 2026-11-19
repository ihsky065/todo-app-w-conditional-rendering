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

                <Form.Group className='mb-3' controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={`Example:
                    \n1. Clean up project code
                    \n2. Meeting about project
                    \n3. Crush interview`}
                    as="textarea"
                    rows={3}
                    required
                    >        
                    </Form.Control>
                </Form.Group>

                <Form.Check
                id="completed"
                type="checkbox"
                label='Mark as completed'
                checked={completedMark}
                onChange={(e) => setCompletedMark(e.target.checked)}
                className="mb-3"
                />

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    )
}