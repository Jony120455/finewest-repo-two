import React from 'react';
import Bcompany from '../../components/bcompanies/Bcompany';
import Bfeatures from '../../components/bfeatures/Bfeatures';
import Fbenefits from '../../components/fbenefits/Fbenefits';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Group from '../../components/Group/Group';
import StudyTwo from '../../components/studytwo/StudyTwo';
import StudyThree from '../../components/studythree/StudyThree';

const Features = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Bfeatures></Bfeatures>
            <Bcompany></Bcompany>
            <Fbenefits></Fbenefits>
            <Group></Group>
            <StudyTwo></StudyTwo>
            <StudyThree></StudyThree>
            <Footer></Footer>
        </div>
    );
};

export default Features;