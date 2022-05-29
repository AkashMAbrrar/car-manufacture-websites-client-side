import React from 'react';

const Reviews = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold text-center mt-20'>Our Clients Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-3 gap-4 p-3 py-20 ml-10'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-3/5' src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Brad Jhonson</h2>
                        <p>Rattings: *****</p>
                        <p>These Things are so useful and powerful parts in the world.i am so impressed for got those products in this platform</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-3/5' src="https://image.shutterstock.com/image-photo/sexy-female-model-lowkey-portrait-260nw-1867040653.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Brad Jhonson</h2>
                        <p>Rattings: *****</p>
                        <p>These Things are so useful and powerful parts in the world.i am so impressed for got those products in this platform</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-3/5' src="https://media.istockphoto.com/photos/shot-of-a-young-entrepreneur-using-a-mobile-phone-picture-id618348040?b=1&k=20&m=618348040&s=170667a&w=0&h=vn1wz8bli-CbKGzvsSm5IloqzK9ceXCpyU2CyfXSZpY=" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Brad Jhonson</h2>
                        <p>Rattings: *****</p>
                        <p>These Things are so useful and powerful parts in the world.i am so impressed for got those products in this platform</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-3/5' src="https://media.istockphoto.com/photos/smiling-young-man-having-online-conference-from-home-picture-id1275841749?k=20&m=1275841749&s=170667a&w=0&h=5k6nkaDBTo7dJNCvBzpcZmwOpDBp1MLct3iaXd16KnM=" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Brad Jhonson</h2>
                        <p>Rattings: *****</p>
                        <p>These Things are so useful and powerful parts in the world.i am so impressed for got those products in this platform</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;