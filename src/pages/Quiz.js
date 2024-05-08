import React from "react";
import Border from "../components/Border";
import { questions } from '../question';
import { UseUserContext } from "../context/UseContext";
import { Link } from "react-router-dom";
import Progress from '../components/Progress';
import Result from "./Result";

const Quiz = () => {
    const { index, next, value, onRadioChange, submit, timer, interval } = UseUserContext();
    const { id, q, o1, o2, o3 } = questions[index];
    return (
        <> { (timer.sec !== 30) ?
        <div className="container">
            <div className="row">
                <h1 className="text-center">Quiz Application</h1>
                <Border className="content">
                    <p>{id} - {q}</p>
                    <ul>
                        <li>
                            <label>
                                <input type="radio" value={o1} checked={value === o1} onChange={onRadioChange} />
                                <span> {o1}</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" value={o2} checked={value === o2} onChange={onRadioChange} />
                                <span> {o2}</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" value={o3} checked={value === o3} onChange={onRadioChange} />
                                <span> {o3}</span>
                            </label>
                        </li>
                    </ul>
                    {index === questions.length - 1 ? <Link to="/result" onClick={submit} className="display-5 text-decoration-none">Submit</Link> :
                        <button type="button" className="btn btn-primary" onClick={next}>Next</button>
                    }
                </Border>
                <Progress />
                <div className="display-4 text-center">{timer.min} : {timer.sec}</div>
            </div>
        </div> : <>{clearInterval(interval)}<Result /></> }
        </>
    )
}

export default Quiz;
