import React from 'react';
import doctor from '../../../images/doctor.png'
import './MakeAppoinment.css'
const MakeAppoinment = () => {
    return (
        <div>
            <section  className="make-appoinment mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-none d-md-block">
                            <img  src={doctor} alt=""/>
                        </div>
                        <div className="col-md-7 appinment-des text-white py-5">
                            <h5>APPOINMENT</h5>
                            <h1 className="my-3">Make an appoinment today</h1>
                            <p className="my-4">Etiam a enim nec urna ultrices tincidunt non nec sapien. Donec massa sem, lorem ipsum dolor sit amet, consectetur adip</p>
                            <button className="learn-more">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MakeAppoinment;