import { Button } from "react-bootstrap";
import AdminForm from "./AdminForm";

function AdminModal() {
    return (
        <div className="modal">
            <div className="form">
                <h4 className="my-1">Admin login</h4>
                <AdminForm/>
                <div className="buttons">
                    <Button variant="link">TA form</Button>
                    <Button variant="primary" className="my-1">Login</Button>
                </div>
            </div>
        </div>
    ) 
}

export default AdminModal;