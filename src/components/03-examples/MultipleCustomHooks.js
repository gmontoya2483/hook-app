import React from 'react';
import './customHooks.css';
import {useFetch} from "../../hooks/useFetch";
import {useCounter} from "../../hooks/useCounter";
// import PropTypes from 'prop-types';

const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>BreakingBad Quotes!!!</h1>
            <hr/>

            {
                (loading)
                    ? (
                        <div className="alert alert-info">
                            Loading ...
                        </div>
                    )
                    : (
                        <blockquote className="blockquote text-end">
                            <p className="mb-3">{ quote }</p>
                            <footer className={'blockquote-footer'}>{ author }</footer>
                        </blockquote>

                    )
            }

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

export default MultipleCustomHooks;
