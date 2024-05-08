import React from "react";
import { Link } from "react-router-dom";
import { UseUserContext } from "../context/UseContext";

const Instruction = () => {
    const { startTimer } = UseUserContext();
    return (
        <center>
            <div className="display-4">Instruction</div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">1. You are given 1 minutes to answer the question</li>
                <li className="list-group-item">2. You are not allowed to skip the question.</li>
                <li className="list-group-item">3. All question must be answered.</li>
                <li className="list-group-item">4. You are not allowed to go Back</li>
                <li className="list-group-item">5. Score will be displayed at end</li>
            </ul>
            <Link to="/quiz" className="display-5 text-decoration-none" onClick={startTimer}>Start Test</Link>
        </center>
    )
}

export default Instruction;
