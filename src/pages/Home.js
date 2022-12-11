import React from 'react';
import Banner from '../components/banner/Banner';
import Blog from '../components/blog/Blog';
import Features from '../components/features/Features';
import Footer from '../components/footer/Footer';
import From from '../components/from/From';
import Man from '../components/man/Man';
import Navbar from '../components/navbar/Navbar';
import Projects from '../components/projects/Projects';
import Work from '../components/work/Work';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Work></Work>
            <Projects></Projects>
            <Features></Features>
            <Man></Man>
            <From></From>
            <Blog></Blog>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;