import React, {useEffect, useReducer} from 'react';
import './styles.css'
import {todoReducer} from "./todoReducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";




const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);





    useEffect(()=> {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const handleDelete = (todoId) => {

        const action = {
            type: "delete",
            payload: todoId
        }

        dispatch(action);

    }

    const handleToggle = (todoId) => {
        const action = {
            type: 'toggle',
            payload: todoId
        }

        dispatch(action);
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }



    return (
        <div>
            <h1>TodoApp ({ todos.length }) </h1>
            <hr/>

            <div className={'row'}>
                <div className="col-7">

                    {/* TodoList Component */}
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />

                </div>
                <div className={'col'}>

                    <TodoAdd handleAddTodo={ handleAddTodo }/>

                </div>
            </div>

        </div>
    );
};

export default TodoApp;
