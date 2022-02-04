import React from "react";
import { Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

const FunctionBar  = (props) =>{
    const menunames = ["Blink","Back","next","Sq On/Off"];

    return(
        menunames.map(item => <li className="coias-li"><Button variant="success">{item}</Button></li>)
    )
}

export default FunctionBar;