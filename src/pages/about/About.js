import React from 'react';
import Benefits from '../../components/benefits/Benefits';
import Footer from '../../components/footer/Footer';
import Group from '../../components/Group/Group';
import Improvment from '../../components/improvment/Improvment';
import Inspire from '../../components/inspire/Inspire';
import Meet from '../../components/meet/Meet';
import Navbar from '../../components/navbar/Navbar';
import Process from '../../components/process/Process';
import './About.css'
const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Group></Group>
            <Improvment></Improvment>
            <Process></Process>
            <Inspire></Inspire>
            <Benefits></Benefits>
            <Meet></Meet>
            <Footer></Footer>
        </div>
    );
};

export default About;