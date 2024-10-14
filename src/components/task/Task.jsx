import React from 'react';
import Draggable from "react-draggable";
import './Task.css'

const Task = ({task, color, defaultPos}) => {
    return (
        <div>
            <Draggable defaultPosition={defaultPos}>
                <div style={{backgroundColor: color}} className="task-item">
                    {task}
                </div>
            </Draggable>
        </div>
    );
};

export default Task;