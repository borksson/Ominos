import { Form } from 'react-bootstrap';

function AdminForm() {
  return (
    <Form className="my-1 w-100">
      <Form.Group controlId="formUsername" className="my-3">
        <Form.Control type="text" placeholder="Username" />
      </Form.Group>
      <Form.Group controlId="formLastName"className="my-3">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
  );
}

export default AdminForm;