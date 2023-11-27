//Here, we're importing two functions from the Redux Toolkit. createSlice is used to create a Redux slice, and nanoid is a utility function to generate unique IDs.
import {createSlice, nanoid } from '@reduxjs/toolkit';

// We're defining the initial state of our Redux slice. It includes a todos array with a sample todo item.
const initialState = {
    todos: [{id: 1, text: "hello world"}]
}

// Using createSlice, we define a slice of the Redux store named 'todo'. Inside reducers, we specify two actions: addTodo and removeTodo.
export const todoSlice = createSlice({
    name: 'todo', 
    initialState,
    reducers: {
        // This reducer is responsible for adding a new todo to the todos array.It generates a unique ID using nanoid.It uses the payload property of the action to get the text for the new todo.The new todo is then pushed into the todos array in the state.Here we have two parameters in addTodo first one is state shows the current status of the state and action conatins the data which is sent by the user.
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },

        // This reducer removes a todo from the todos array based on its ID.It uses the payload property of the action to get the ID of the todo to be removed.The filter method is used to create a new array without the todo that matches the specified ID.
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})


export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer


