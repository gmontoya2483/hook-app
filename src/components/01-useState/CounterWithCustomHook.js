import React from 'react';
import PropTypes from 'prop-types';
import {useCounter} from "../../hooks/useCounter";
import './counter.css'

const CounterWithCustomHook = props => {

    const {state, increment, decrement,reset} = useCounter(0);


    return (
        <>
            <h1>Counter with Hook: { state }</h1>
            <hr/>

            <button onClick={ () => increment() } className={'btn btn-primary'}>+1</button>
            <button onClick={ reset } className={'btn btn-success'}>reset</button>
            <button onClick={ () => decrement() } className={'btn btn-danger'}>-1</button>

        </>
    );
};

CounterWithCustomHook.propTypes = {
    
};

export default CounterWithCustomHook;
