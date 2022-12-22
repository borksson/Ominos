import { Form } from 'react-bootstrap';

function TAForm() {
  return (
    <Form className="my-1 w-100">
      <Form.Group controlId="formFirstName" className="my-3">
        <Form.Control type="text" placeholder="First name" />
      </Form.Group>
      <Form.Group controlId="formLastName"className="my-3">
        <Form.Control type="text" placeholder="Last name" />
      </Form.Group>
      <Form.Group controlId="formNetID"className="my-3">
        <Form.Control type="text" placeholder="Net ID" />
      </Form.Group>
      <Form.Group controlId="formEmail"className="my-3">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group controlId="formHours"className="my-3">
        <Form.Control type="number" placeholder="Total hours" />
      </Form.Group>
    </Form>
  );
}

export default TAForm;