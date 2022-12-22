import "./Calendar.css"
import { Table } from "react-bootstrap";
import HourCell from "./HourCell";

function Calendar() {
    const daysTitle = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const hours = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM"]

    return (
        <Table striped bordered hover size="sm" className="my-2">
            <thead>
                <tr>
                    {daysTitle.map((day) => (
                        <th key={day}><div style={{width:"100px"}}>{day}</div></th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {hours.map((hour) => (
                    <tr key={hour}>
                        {daysTitle.map((day) => (
                            <HourCell key={day} data={{hour:hour}}/>
                        ))}
                    </tr>
                ))}
            </tbody>                          
        </Table>
    ) 
}

export default Calendar;