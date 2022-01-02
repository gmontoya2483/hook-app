import React from 'react';
import PropTypes from 'prop-types';
import {useForm} from "../../hooks/useForm";

const TodoAdd = ({ handleAddTodo }) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });


    const handleSubmit = (e) => {
        e.preventDefault()

        if( description.trim().length <= 1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description.trim(),
            done: false
        };

        handleAddTodo(newTodo);
        reset();
    }


    return (
        <>
            <h4>Agregar TODO</h4>
            <hr/>

            <form onSubmit={ handleSubmit }>
                <input
                    className={'form-control'}
                    type="text"
                    name="description"
                    placeholder="Aprender ..."
                    autoComplete="off"
                    value={ description }
                    onChange={ handleInputChange }
                />

                <div className="d-grid gap-2">
                    <button
                        type={'submit'}
                        className={'btn btn-outline-primary mt-2'}
                    >
                        Agregar
                    </button>
                </div>



            </form>

        </>
    );
};

TodoAdd.propTypes = {
    
};

export default TodoAdd;
