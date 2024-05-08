import React from "react";
import { UseUserContext } from "../context/UseContext";
import { questions } from "../question";
import Border from "../components/Border";

const Result = () => {
    const { mark } = UseUserContext();
    return (
        <div className="container">
            <h1 className="text-center">Quiz Application</h1>
            <Border className="content">
                Your mark is {mark} / {questions.length}
            </Border>
        </div>
    )
}

export default Result;
