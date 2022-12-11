import React from 'react';
import Bblog from '../../components/bblog/Bblog';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Uxdesign from '../../components/uxDesign/Uxdesign';

const Blog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Uxdesign></Uxdesign>
            <Bblog></Bblog>
            <Footer></Footer>
        </div>
    );
};

export default Blog;