import React from "react";
import { BsArrowDown} from "react-icons/bs";
import { Link } from "react-router-dom";

const Welcome = () => {
    
    return (
       <center>
        <div className="display-5">Welcome to the Quiz APP</div>
        <br/>
        <div className="display-5">Click here to Enter</div>
        <br/>
        <div><BsArrowDown /></div>
        <Link to="/instruction" className="display-5 text-decoration-none">Click Here</Link>
        </center>
    )
}

export default Welcome;
