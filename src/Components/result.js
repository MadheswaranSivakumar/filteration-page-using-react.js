import React from "react";
import {Link} from 'react-router-dom';
import {Form ,Table} from 'react-bootstrap';
import App1 from './index2';

function Resulttable(){
    var sessionString = JSON.parse(sessionStorage.getItem('name'));
    console.log(sessionString);
    return(
        <h1>{sessionString}</h1>
    );
};

export default Resulttable;