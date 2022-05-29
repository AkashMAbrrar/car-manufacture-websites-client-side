import React from 'react';
import myself from '../../image/myself-1.JPG';

const Portfolio = () => {
    return (
        <div className='mt-5'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={myself} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">Name:Akash Muhammad Abrrar</h1>
                        <h1 className='text-xl font-bold'>Email: mabrrar9@gmail.com</h1>
                        <h1 className='text-xl font-bold'>Qualification:<small>My name is Akash Muhammad Abrrar.I reading in honours 2nd Year at Govt Barhamgonj College Shibchar.Subject: Philosophy</small></h1>
                        <p className="py-6">I am a student of hons 2nd year.my goal is a become a web developer.and i always try to learning it.and already i completed my full stack web development course.and also i making web application by React js.React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.now i want to continue my job</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-xl text-center font-bold my-10'>Here Is My Best Three Projects What I Made</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5'>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://doctors-portal-208da.web.app/static/media/chair.3ca333d1fa050f6e6eb4.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center">Medication Services</h2>
                            <div className="card-actions justify-end">
                                <a className="btn btn-primary" href="https://doctors-portal-208da.web.app/?fbclid=IwAR2EYT_pjcCv5LT4bX93P2PxXnE5GEXGRE579OoZ4Vh70kwOXm3wzrgOfhQ">Visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://genius-car-services-78784.web.app/static/media/banner1.a56cf880f63ad1ddfb50.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center">Car Carnival</h2>
                            <div className="card-actions justify-end">
                                <a className="btn btn-primary" href="https://genius-car-services-78784.web.app/home">Visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cee64414e1f4f31baf1ae270099d950_9366/Lunar_New_Year_Ultraboost_DNA_Shoes_Black_GZ6074_01_standard.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center">Amajhon Commercial</h2>
                            <div className="card-actions justify-end">
                                <a className="btn btn-primary" href="https://emajon-simple-firebase.web.app/?fbclid=IwAR2eVEvOviDgue72Uryb97zHvEjPqU1LHiyGlxNTCj_b9ryqBm77D7P5qBI">Visit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;