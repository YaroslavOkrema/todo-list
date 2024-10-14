import {useState} from 'react';
import {v4 as uuid} from "uuid";
import {randomColor} from "randomcolor";

const UseInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState([]);

    function addTask() {
        if (inputValue.trim() !== '') {
            const newTask = {
                id: uuid(),
                task: inputValue,
                color: randomColor({
                    luminosity: 'light'
                }),
                defaultPos: {
                    x: 500,
                    y: -500
                }
            }

            setTasks((prevTask) => [...prevTask, newTask]);
            setInputValue('');
        }
    }
    return {
        inputValue,
        tasks,
        setInputValue,
        addTask
    }
};

export default UseInput;