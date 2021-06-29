import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
           <img style={{height:'50px'}} src={service.img} alt="" />
           <h4 className="mt-4 mb-4">{service.name}</h4>
           <p className="text-secondary">lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet consectetur</p>
        </div>
    );
};

export default ServiceDetail;