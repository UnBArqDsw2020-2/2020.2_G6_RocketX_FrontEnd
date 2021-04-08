import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

function Rockets() {
    const [rockets, setRockets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function getRockets() {
            try {
                const response = await api.get('/rockets');
    
                setRockets(response.data);
                setLoading(false);
            } catch (error) {
                setError('Ocorreu um erro, tente novamente mais tarde.');
            }
        }

        getRockets();
    }, []);

    return (
        <>
            {loading && !error ? <h1>Loading</h1> :
                rockets.map(rocket => (
                    <div key={rocket.id}>
                        <Link to="/rocket">{rocket.rocket_name}</Link>
                    </div>
                ))
            }
            { error || <h1>{error}</h1> }
        </>
    );
}

export default Rockets;