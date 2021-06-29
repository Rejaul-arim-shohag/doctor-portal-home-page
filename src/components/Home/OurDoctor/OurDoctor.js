import React from 'react';
import Doctor from '../Doctor/Doctor';

const OurDoctor = () => {
    
    return (
        <section className="doctor my-5">
            <div className="container">
                <h5 style={{color:"#1CC7C1"}} className="text-center">OUR DOCTORS</h5>
                <div className="row">
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                </div>
            </div>
        </section>
    )};

export default OurDoctor;