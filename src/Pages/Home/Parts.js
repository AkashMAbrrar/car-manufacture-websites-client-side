import React, { useEffect, useState } from 'react';
import PartsCard from '../PartsCard/PartsCard';
import Modal from './Modal/Modal';

const Parts = () => {
    const [parts, setParts] = useState([]);
    const [order, setOrder] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])

    return (
        <div>
            <div className='text-4xl text-center text-nuetral font-bold mb-10'>
                <h2>Theres Our Parts Collections</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 gap-4'>
                {
                    parts.map(part => <PartsCard
                        key={part._id}
                        part={part}
                        setOrder={setOrder}
                    ></PartsCard>)
                }
            </div>
            {order && <Modal
                setOrder={setOrder}
                order={order}
            ></Modal>}
        </div>
    );
};

export default Parts;