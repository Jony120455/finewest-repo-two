import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Ppricing from '../../components/process/Ppricing/Ppricing';

const Pricing = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Ppricing></Ppricing>
            <Footer></Footer>
        </div>
    );
};

export default Pricing;