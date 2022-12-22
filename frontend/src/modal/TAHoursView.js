import {Table} from 'react-bootstrap';

function TAHoursView() {
    return (
        <div style={{marginLeft:"20px"}}>
            <Table>
                <thead>
                    <tr>
                        <th>
                            <div style={{width:"50px"}}>NetID</div>
                        </th>
                        <th>
                            <div style={{width:"100px"}}>First Name</div>
                        </th>
                        <th>
                            <div style={{width:"100px"}}> Scheduled Hours</div>
                        </th>
                    </tr>
                </thead>
            </Table>
            <div style={{ height: "200px", minWidth: "wrap-content", overflowY:"scroll", overflowX:"clip"}}>
                <Table hover>
                    <tbody>
                        <tr>
                            <td>
                                <div style={{width:"50px"}}>NetID</div>
                            </td>
                            <td>
                                <div style={{width:"100px"}}>First Name</div>
                            </td>
                            <td>
                                <div style={{width:"100px"}}> Scheduled Hours</div>
                            </td>
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default TAHoursView;