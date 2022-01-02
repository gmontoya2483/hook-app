import React, {useEffect, useState} from 'react';

const Message = () => {

    const [coords, setCoors] = useState({x: 0, y: 0});
    const { x, y } = coords;

    useEffect(()=>{
        // Effect

        console.log('componente montado!');

        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y };
            setCoors( coords );
        }


        window.addEventListener('mousemove', mouseMove);

        return () => {
            // Cleanup
            console.log('componente desmontado!');
            window.removeEventListener('mousemove', mouseMove);
        }
    },[]);

    return (
        <div>
            <h3>Eres genial!!</h3>
            <p> x: { x }, y: { y }</p>

        </div>
    );
};

export default Message;
