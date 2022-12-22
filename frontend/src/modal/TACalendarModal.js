import Calendar from './calendar/Calendar';
import './Modal.css'
import { Button } from "react-bootstrap";

function TACalendarModal() {
    return (
        <div className="modal">
            <div className="form">
                <h4 className="my-1">Schedule your first choice work week</h4>
                <Calendar/>
                <div className="buttons">
                    <Button variant="secondary">Back</Button>      
                    <p>Hours left: 10</p>              
                    <Button variant="primary" className="my-1">Next</Button>
                </div>
            </div>
        </div>
    ) 
}

export default TACalendarModal;