import React, {useState} from 'react';

function HourCell(props) {
    const { data } = props;

    const [state, setState] = useState({toggle: true, style: {backgroundColor: 'white'}});
    
      const handleClick = () => {
        if (state.toggle) {
            setState({
            toggle: false,
            style: {backgroundColor: 'lightblue'}
            });
        } else {
            setState({
            toggle: true,
            style: {backgroundColor: 'white'}
            });
        }
      };

    return (
        <td style={state.style} onClick={handleClick}>{data.hour}</td>
    )
}

export default HourCell;