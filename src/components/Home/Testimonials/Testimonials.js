import React from 'react';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Testimonials.css';
import winsonHenry from '../../../images/Ellipse1.png';
import Aliza from '../../../images/Ellipse2.png';
import mart from '../../../images/Ellipse3.png';
import SingleTestMonial from '../SingleTestMonial/SingleTestMonial';

const Testimonials = () => {
    const testimonialData = [
        {
            name: 'Winson Hery',
            quote: 'Etiam a enim nec urna ultrices tincidunt non nec sapien. Donec massa sem, commodo ut ipsum eget, tempor eleifend sem. Nulla sollicitudin sem vel metus elementum pharetra. Integer interdum tortor maximus congue tempor. Maecenas ac tortor metus. Integer aliquet, dui quis tristique ultrmarticies, augue nibh dapibus tortor, vitae blandit dui purus eu erat. Curabitur sit amet purus consectetur, cursus sapien ut, mollis tellus. Suspendisse ',
            from: 'California',
            img: winsonHenry

        },
        {
            name: 'Aliza Mart',
            quote: 'Etiam a enim nec urna ultrices tincidunt non nec sapien. Donec massa sem, commodo ut ipsum eget, tempor eleifend sem. Nulla sollicitudin sem vel metus elementum pharetra. Integer interdum tortor maximus congue tempor. Maecenas ac tortor metus. Integer aliquet, dui quis tristique ultricies, augue nibh dapibus tortor, vitae blandit dui purus eu erat. Curabitur sit amet purus consectetur, cursus sapien ut, mollis tellus. Suspendisse ',
            from: 'Alaska',
            img: Aliza

        },
        {
            name: 'Mart Philips',
            quote: 'Etiam a enim nec urna ultrices tincidunt non nec sapien. Donec massa sem, commodo ut ipsum eget, tempor eleifend sem. Nulla sollicitudin sem vel metus elementum pharetra. Integer interdum tortor maximus congue tempor. Maecenas ac tortor metus. Integer aliquet, dui quis tristique ultricies, augue nibh dapibus tortor, vitae blandit dui purus eu erat. Curabitur sit amet purus consectetur, cursus sapien ut, mollis tellus. Suspendisse',
            from: 'California',
            img: mart

        }

    ]
    return (
        <section className="testimonials  my-5 ">
            <div className="container">
                <div className="section-header row">
                    <div className="col-md-6 align-self-center">
                       <h5 className="text-primary">TESTIMONIAL</h5>
                       <h1 style={{color:"#3D4457"}}>What Our Patients <br/> Says</h1>
                    </div>
                    <div className="col-md-6 testimonial-icon">
                    <FontAwesomeIcon  icon={faQuoteLeft} />
                    </div>
                </div>
                <div className="card-deck row mt-5">
                    {
                        testimonialData.map(testimonial =><SingleTestMonial testimonial={testimonial} key={testimonial.name}></SingleTestMonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;