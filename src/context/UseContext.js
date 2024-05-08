import { useContext, createContext, useState } from "react";
import { answer, questions } from "../question";

export const UserContext = createContext(null);
const final_answer = [];
var percent = 0;
const UserContextProvider = ({ children }) => {
    const [index, setIndex] = useState(0);
    const [value, setValue] = useState("");
    const [mark, setMark] = useState(0);
    const [timer, setTimer] = useState({hr:0, min:0, sec:0, ms:0});
    const [interval, setinterval] = useState();
    var  updatedHr = timer.hr, updatedMin=timer.min, updatedSec=timer.sec, updatedMs=timer.ms;

    const startTimer = () => {
        run();
        setinterval(setInterval(run, 10));
    }

    const run = () => {
        if(updatedMin === 60) {
            updatedHr++;
            updatedMin=0;
        }
        if(updatedSec === 60) {
            updatedMin++;
            updatedSec=0;
        }
        if(updatedMs === 100) {
            updatedSec++;
            updatedMs=0;
        }
        updatedMs++;
        return setTimer({ ms: updatedMs, sec: updatedSec, min: updatedMin, hr: updatedHr });
    }

    const next = () => {
        if(value === '') {
            alert('Please select option');
            return;
        }
        percent = percent + (100/questions.length);
        final_answer.push(value);
        callMark();
        setIndex(prev => prev + 1);
    }

    const onRadioChange = (e) => {
        setValue(e.target.value);
    }

    const submit = () => {
        final_answer.push(value);
        callMark();
        setIndex(prev => prev + 1);
    }

    const callMark = () => {
        if(final_answer.includes(answer[index])) {
            setMark(prev => prev + 1);
        }
    }
    return (
        <UserContext.Provider value={{index, next, value, onRadioChange, submit, mark, startTimer, timer, interval, percent}}>
            {children}
        </UserContext.Provider>
    )
}

export const UseUserContext = () => {
    const {index, next, value, onRadioChange, submit, mark, startTimer, timer, interval, percent} = useContext(UserContext)
    return {index, next, value, onRadioChange, submit, mark, startTimer, timer, interval, percent};
}

export default UserContextProvider;
