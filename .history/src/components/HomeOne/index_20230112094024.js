/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import Drawer from '../Mobile/Drawer';
// import BlogHomeOne from './BlogHomeOne';
// import FaqHomeOne from './FaqHomeOne';
// import FeaturesHomeOne from './FeaturesHomeOne';
import FooterHomeOne from './FooterHomeOne';
import HeroHomeOne from './HeroHomeOne';
import HomeOneHeader from './HomeOneHeader';
import PricingHomeOne from './PricingHomeOne';
import ProjectHomeOne from './ProjectHomeOne';
import WhySection from './WhySection';
// import TeamHomeOne from './TeamHomeOne';
// import TestimonialHomeOne from './TestimonialHomeOne';
import ServiceSection from './ServiceSection';
import AboutSection from './AboutSection';

function HomeOne() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HomeOneHeader action={drawerAction.toggle} />
            <HeroHomeOne />
            <AboutSection />
            <WhySection />
            <ServiceSection />
            <PricingHomeOne />
            <ProjectHomeOne />
            <FooterHomeOne />
            <BackToTop />


            {/* <FeaturesHomeOne /> */}
            {/* <TestimonialHomeOne /> */}
            {/* <TeamHomeOne /> */}

            {/* <div className='bg-white'>
                <FaqHomeOne />
            </div> */}
            {/* <BlogHomeOne /> */}
        </>
    );
}

export default HomeOne;
