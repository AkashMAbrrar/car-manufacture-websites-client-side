import React from "react";
const Modal = ({ order, setOrder }) => {

    const { name, MinQuantity, AvailAbleQuantity, price } = order;

    const handleOrder = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        console.log(quantity);
        setOrder(null);
    }

    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="order-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary text-center">Order For:{name}</h3>
                    <form onSubmit={handleOrder} className="grid grid-cols-1 gap-3 justify-items-center mt-2">
                        <input type="number" name="quantity" value={AvailAbleQuantity} placeholder="Availble Quantity" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name="name" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;