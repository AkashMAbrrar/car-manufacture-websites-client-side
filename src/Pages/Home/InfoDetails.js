import React from 'react';

const InfoDetails = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl mt-20 m-10">
            <figure className='shadow-xl'><img className='w-2/3' src="https://previews.123rf.com/images/dezay/dezay1610/dezay161000012/68402787-carro-de-im%C3%A1genes-ensamblado-de-repuestos-de-autom%C3%B3viles.jpg" alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">Belive In Yourself And Quality</h2>
                <p>Exlpore Our Product And Get Identity Of Quality.We Providing Our Products All Over The World.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default InfoDetails;