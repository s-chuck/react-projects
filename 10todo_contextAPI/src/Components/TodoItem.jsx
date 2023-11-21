import React, { useState } from 'react'
import {useTodo} from '../Context'


function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg,setTodoMsg] = useState(todo.todo);
    const {updateTodo, deleteTodo, toggleComplete}  = useTodo()
    //as the above code is self understandable what is happening is we are updating the current todo using the todo.id targeting the specific todo, {...todo(spread operator to copy the existing todo into the newone),but changing the todo: (with)todoMsg}
    // also setiing setIsTodoEditable = false means that it is now not in editable mode.
    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }


    const toggleCompleted = () =>{
        toggleComplete(todo.id)
    }

    return (
        <div
        // the below todo.complete? means if it is true or checked then change it's color to green else gray
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            {/* This below input is for when we click the edit button in our website in front of a task when that is clicked it's border becomes black/10 and px-2 else the border will be transparent and in this if we click the side toggle it will make a line through the text. */}
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            {/* So lets now understand hwo  this editing thing is working 
                1.first every thing is false isTodoEditable = false; so whenever we click into the edit button first it will check if the toggle box is checked or not if yes then return else do nothing 
                2. Then at the next step it will check isTodoEditable true or false obviously false then it goes to else part and make it true because the button is clicked.
                3.at the end as the isTodoEditable is true it will call two things first it changed the icons and second it call the above input tag responsible for the todo message.
                4.as soon as the isTodoEditable is true the input box will change the styling and the input box changes into read and write functionality previously it is only offering read.
                5.Using that we can again insert new message and it will assign that message to the value and tehn it would be set it to setTodoMsg(e.target.value);
                6.Then when we again click the button it will again call the function this time if condition will work and editTodo() method would be called which would update the existing todo and again setistodoEditable=false;.
            */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
