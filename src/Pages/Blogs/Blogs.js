import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5'>
            <div className="card w-96 bg-primary text-primary-content my-10">
                <div className="card-body">
                    <h2 className="card-title text-center text-white">How I Improve My React Application?</h2>
                    <p className='text-white'>Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged. According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.
                        In React applications.
                    </p>
                </div>
            </div>
            <div className="card w-96 bg-primary text-primary-content my-10">
                <div className="card-body">
                    <h2 className="card-title text-center text-white">Diffrent Ways To Manage A React Application</h2>
                    <p className='text-white'>With a lot of trial and error, pilot programs, and personal observance, it has been proven that React Native apps can be structured into 5 types of state. Each type of state follows a set of defined rules and interacts with one another in a particular manner.Based on these rules of each state, you can easily store data as per your needs (as long as you follow the rules) without worrying about creating a dynamic data mess.

                    </p>
                </div>
            </div>
            <div className="card w-96 bg-primary text-primary-content my-10">
                <div className="card-body">
                    <h2 className="card-title text-center text-white">How does work prototypycal inheritance</h2>
                    <p className='text-white'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.
                    </p>
                </div>
            </div>
            <div className="card w-96 bg-primary text-primary-content my-10">
                <div className="card-body">
                    <h2 className="card-title text-center text-white">Why you do not set the state directly in React?</h2>
                    <p className='text-white'>With React 16.8, function components can now use state. Before this, data from the state had to be passed down as props from class components to function components or you had to convert your function component to a class component
                    </p>
                </div>
            </div>
            <div className="card w-96 bg-primary text-primary-content my-10">
                <div className="card-body">
                    <h2 className="card-title text-center text-white">What Is unit Testing?</h2>
                    <p className='text-white'>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                    </p>
                </div>
            </div>
            <div className="card w-96 bg-primary text-primary-content my-10">
                <div className="card-body">
                    <h2 className="card-title text-center text-white">How I Improve My React Application?</h2>
                    <p className='text-white'>Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged. According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.
                        In React applications.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;