import React, {useEffect, useRef, useState} from 'react';
import './focus.css'
import MultipleCustomHooks from "../03-examples/MultipleCustomHooks";

const RealExampleRef = () => {


    const [show, setShow] = useState(false);





    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr/>


            { show && <MultipleCustomHooks/> }

            <button
                onClick={ ()=> { setShow(!show); } }
                className={'btn btn-primary mt-5'}
            >
                Show/ Hide
            </button>

        </div>
    );
};

export default RealExampleRef;
