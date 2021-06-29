import React from 'react';
import featured from '../../../images/featured.png';
import './FeateredService.css'

const FeateredService = () => {

    return (
        <section style={{marginTop:"100px"}} className="features-service pb-0 pb-md-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img className="img-fluid" src={featured} alt=""/>   
                    </div>
                    <div className="col-md-7 align-self-center">
                    <h1 style={{color:"#3D4457"}}>Exceptional Dental <br/> Care, on your Terms</h1>
                    <p className="text-secondary featuredtext my-5">Vivamus at euismod nibh. Sed id semper arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque elementum mauris vitae neque vulputate rutrum. Maecenas mollis, dui at ornare pharetra, ligula leo fermentum enim, sit amet semper arcu libero eget diam. Sed quis ex sed dolor congue vulputate. Maecenas mollis, dui at ornare pharetra, ligula leo fermentum enim, sit amet semper arcu libero eget diam. Sed quis ex sed dolor congue vulputate</p>
                    <button className="learn-more">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeateredService;