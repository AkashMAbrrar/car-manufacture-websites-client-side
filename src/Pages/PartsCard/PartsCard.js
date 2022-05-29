import React from 'react';

const PartsCard = ({ part, setOrder }) => {
    const { name, img, description, MinQuantity, AvailAbleQuantity, price } = part;

    return (
        <div className="card w-96 bg-base-100 shadow-xl px-10">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <span>Minimum Quantity:{MinQuantity}</span>
                <span>Available Quantity:{AvailAbleQuantity}</span>
                <p>Price:{price}</p>
                <div className="card-actions">
                    <label
                        htmlFor="order-modal"
                        onClick={() => setOrder(part)}
                        className="btn btn-primary">Purchase</label>
                </div>
            </div>
        </div>
    );
};

export default PartsCard;