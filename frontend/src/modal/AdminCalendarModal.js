import Calendar from './calendar/Calendar';
import './Modal.css'
import { Button } from "react-bootstrap";
import TAHoursView from './TAHoursView';

function AdminCalendarModal() {
    return (
        <div className="modal">
            <div className="form">
                <h4 className="my-1">Current schedule</h4>
                <div className="content">
                    <Calendar/>
                    <TAHoursView/>
                </div>
                <div className="buttons">
                    <Button variant="secondary">Back</Button>      
                    <p>Hours left: 10</p>              
                    <Button variant="primary" className="my-1">Next</Button>
                </div>
            </div>
        </div>
    ) 
}

export default AdminCalendarModal;