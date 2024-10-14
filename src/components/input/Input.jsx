import React from 'react';
import './Input.css'
import Task from "../task/Task";
import useInput from "../../hooks/useInput";

const Input = () => {
    const {inputValue, tasks, setInputValue, addTask} = useInput();

    return (
        <div>
            <div className="input-container">
                <input
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    className="input"
                    type="text"
                    placeholder="Enter task"
                />
                <button
                    onClick={addTask}
                    className="input-btn"
                >
                    Enter
                </button>
            </div>

            <div className="task-container">
                {tasks.map((task) => (
                   <Task
                       key={task.id}
                       task={task.task}
                       color={task.color}
                       defaultPos={task.defaultPos}
                   />
                ))}
            </div>
        </div>
    );
};

export default Input;