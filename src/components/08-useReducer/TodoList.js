import React from 'react';
// import PropTypes from 'prop-types';
import TodoListItem from "./TodoListItem";

const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <ul className={'list-group list-group-flush'}>
            {
                todos.map((todo, i) => (

                    <TodoListItem
                        key ={ todo.id }
                        todo={ todo }
                        index={ i }
                        handleToggle={ handleToggle }
                        handleDelete={ handleDelete }
                    />


                ))
            }
        </ul>
    );
};

TodoList.propTypes = {

};

export default TodoList;
