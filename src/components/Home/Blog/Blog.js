import React from 'react';
import wilson from '../../../images/Ellipse1.png'
import BlogPost from '../BlogPost/BlogPost';
const Blog = () => {
    const blogData=[
        {
            title:'Check at least a doctor in a year for your teeth',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam',
            author:'Dr. Rejaul',
            authorImg: wilson,
            date: '12 March 2021'
        },
        {
            title:'Two time brush in a day can keep you healthy',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam',
            author:'Dr. Sinthiya',
            authorImg: wilson,
            date: '5 March 2021'
        },
        {
            title:'The tooth cancer is taking a challenge',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam',
            author:'Dr. Karim',
            authorImg: wilson,
            date: '12 March 2021'
        }
    ]
    return (
        <section style={{marginTop:'120px'}} className="blogs py-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-primary">OUR BLOGS</h5>
                    <h1 style={{color:"#3D4357"}}>FROM OUR BLOGS NEWS</h1>
                </div>
                <div className="card-deck row mt-5 pt-5">
                    {
                        blogData.map(blog =><BlogPost blog={blog}></BlogPost>)

                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;