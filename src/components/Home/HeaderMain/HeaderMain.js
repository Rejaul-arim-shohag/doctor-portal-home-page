import React from 'react';
import chair from '../../../images/chair.png'
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:"#3A4256"}}>Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary">The Doctor Portal provides you with a single intuitive system that lets you take total control of your online presence.</p>
                <button className="btn btn-primary btn-grad">GET APPOINMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
        
        
    );
};

export default HeaderMain;