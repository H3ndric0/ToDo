import React from "react";
import ToDoForm from "./ToDoForm";

const ToDolist = () => {
    return (
        <div>
            <ul>
                <li>Menyapu</li>
            </ul>
        </div>
    );
};

export default ToDolist;

const App = () => {
    return(
    <div className="App">
        <ToDoForm/>
        <ToDolist/>
    </div>
    );
};