import React, { useState, useEffect } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

function Rockets() {
    const [rockets, setRockets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getRockets() {
            const response = await api.get('/rockets');

            setRockets(response.data);
            setLoading(false);
        }

        getRockets();
    }, []);

    return (
        <>
            {loading ? <h1>Loading</h1> :
                rockets.map(rocket => (
                    <h5>{rocket.rocket_name}</h5>
                ))
            }
        </>
    );
}

export default Rockets;