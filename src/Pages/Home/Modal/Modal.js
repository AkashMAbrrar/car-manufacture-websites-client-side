import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

const Modal = ({ order, setOrder }) => {

    const { _id, name, MinQuantity, AvailAbleQuantity, price } = order;
    const [user, loading] = useAuthState(auth);


    const handleOrder = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        console.log(quantity);
        const purchase = {
            orderId: _id,
            order: name,
            order: price,
            buyer: user.email,
            buyerName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('https://mighty-wave-39162.herokuapp.com/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                //close the modal
                console.log(data)
                if (data) {
                    toast('Purchase Success')
                }
                else {
                    toast('Purchase Failed')
                }
                setOrder(null);
            })

    }

    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary text-center">Order For:{name}</h3>
                    <form onSubmit={handleOrder} className="grid grid-cols-1 gap-3 justify-items-center mt-2">
                        <input type="number" name="quantity" value={AvailAbleQuantity} placeholder="Availble Quantity" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="name" disabled value={user?.displayName || ""} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;