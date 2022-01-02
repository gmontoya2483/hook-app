import React, {useLayoutEffect, useRef} from 'react';
import './layout.css';
import {useFetch} from "../../hooks/useFetch";
import {useCounter} from "../../hooks/useCounter";
// import PropTypes from 'prop-types';

const Layout = () => {

    const {counter, increment} = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { quote } = !!data && data[0];


    const pTag = useRef();
    
    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect());
    }, [])


    return (
        <div>
            <h1>Layout Effect !!!</h1>
            <hr/>

            
                
                        <blockquote className="blockquote text-end">
                            <p  
                                className="mb-3"
                                ref={ pTag }
                            >
                                { quote }
                            </p>
                            
                        </blockquote>


            <button
                className={'btn btn-primary'}
                onClick={ () => increment() }
            >
                Siguiente quote
            </button>


        </div>
    );
};

// MultipleCustomHooks.propTypes = {
//
// };

export default Layout;
