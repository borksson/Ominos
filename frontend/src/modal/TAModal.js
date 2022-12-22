import { Button } from "react-bootstrap";
import TAForm from "./TAForm";
import './Modal.css';

function TAModal() {
    return (
        <div className="modal">
            <div className="form">
                <h4 className="my-1">TA Information</h4>
                <TAForm/>
                <div className="buttons">
                    <Button variant="link">Admin login</Button>                    
                    <Button variant="primary" className="my-1">Next</Button>
                </div>
            </div>
        </div>
    ) 
}

export default TAModal;