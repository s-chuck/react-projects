import { createContext,useContext } from "react";

// using the createContext we make a container with some default values and methods.
export const TodoContext = createContext({
    // the first todos is for making an array of all the todo tasks with some additional things for ex. id(put some specific id in each todo tasks),todo(it contains the message),completed(to check if the task is completed or not)
    todos: [
        {
            id: 1, 
            todo: "Todo msg",
            completed: false,
        }, 
    ],
    //addtodo to add the tasks , updateTodo for updating , deleteTodo for deleting the task and toggleComplete is for selecting a task is completed or not to toggle the checker.
    addTodo: (todo)  => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})
// useContext is used for accessing the values that are present in the container TodoContext.
export const useTodo = () => {
    return useContext(TodoContext)
}

// .Provider helps the children component of the TodoContext to access the values that are present in the container.
export const TodoProvider = TodoContext.Provider