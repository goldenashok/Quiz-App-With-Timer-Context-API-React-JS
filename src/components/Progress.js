import React from "react";
import { UseUserContext } from "../context/UseContext";

const Progress = () => {
    const { percent } = UseUserContext();
    const width = percent+'%';
    return (
        <div class="progress mt-2" style={{width:'100%', border:'5px solid black'}}>
            <div class="progress-bar" role="progressbar" style={{width: width}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{width}</div>
        </div>
    )
}

export default Progress;
