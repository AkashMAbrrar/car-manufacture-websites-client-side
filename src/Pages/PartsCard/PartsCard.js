import React from 'react';

const PartsCard = ({ part }) => {
    const { name, img, description, MinQuantity, AvailAbleQuantity, price } = part;

    return (
        <div class="card w-96 bg-base-100 shadow-xl px-10">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <span>Minimum Quantity:{MinQuantity}</span>
                <span>Available Quantity:{AvailAbleQuantity}</span>
                <p>Price:{price}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default PartsCard;