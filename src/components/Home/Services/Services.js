import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const servicesData = [
        {
            name:'Fluoride Treatment',
            img:fluoride
        },
        {
            name:'Cavity Filling',
            img:cavity
        },
        {
            name:'Teath Whitening',
            img:whitening
        }
    ]
    return (
        <section style={{marginTop:"130px"}} className="services-container">
            <div className="text-center mb-5">
                <h6 style={{color:"#1CC7C1"}}>OUR SERVICES</h6>
                <h2 style={{color:"#3D4357"}}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5">
                {
                    servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;