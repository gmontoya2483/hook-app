import React from 'react';
// import PropTypes from 'prop-types';

// todo, index, handleDelete, handleToggle

const TodoListItem = ({todo, index, handleDelete, handleToggle}) => {
    return (
        <li
            className={'list-group-item'}
            key={todo.id}
        >
            <p
                className={`${todo.done && 'complete'}`}
                onClick={() => {handleToggle(todo.id)}}
            >
                { index + 1 }. {todo.desc}
            </p>
            <button
                onClick={ () => {handleDelete(todo.id)} }
                className={'btn btn-danger'}
            >
                borrar
            </button>
        </li>
    );
};

TodoListItem.propTypes = {

};

export default TodoListItem;
