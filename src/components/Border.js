import React from "react";
import "./Border.css";

const Border = (props) => {
    return (
        <div className="card bg-secondary">
            <div className="row">
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Border;
