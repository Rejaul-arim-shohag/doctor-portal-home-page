import React from 'react';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import FeateredService from '../FeateredService/FeateredService';
import Header from '../Header/Header';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import OurDoctor from '../OurDoctor/OurDoctor';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeateredService></FeateredService>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
            <Blog></Blog>
            <OurDoctor></OurDoctor>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;