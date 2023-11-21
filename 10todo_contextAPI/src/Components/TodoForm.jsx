import React, {useState} from 'react'
import { useTodo } from '../Context';

function TodoForm() {
    //Made 1 state here for the individual todo that we gonna write in the input field , the second one is for accesssing the addTodo functionality from TodoContext.js 
    const [todo, setTodo] = useState();
    const {addTodo} = useTodo()

    //Now lets see how are we gonna add a new todo in the existing array of todos first we are preventDefault which prevents the default function of the button which is reload the page, then see if something is even in the input field or not
    const add = (e) => {
        e.preventDefault()
        if(!todo) {
            alert("input field is empty!! please fill it")
            return;
        }
        //addTodo is from the above destructuring from the useTodo().
        addTodo({todo: todo, completed: false})
        //here setTodo("") is used to clear the input field.
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value = {todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

