import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero'
import About from '../../components/about/about'
import ServiceSection from '../../components/ServiceSection/ServiceSection'
import ProjectSection from '../../components/ProjectSection/ProjectSection'
import Testimonial from '../../components/Testimonial/Testimonial'
import BlogSection from '../../components/BlogSection/BlogSection'
import ContactArea from '../../components/ContactArea'
import Footer from '../../components/footer/Footer'
import Marque from '../../components/marque/marque'
import BackToTop from '../../components/backToTop/backToTop';
import { useTheme } from '../../context/ThemeContext';

const HomePage = () => {
    const { isDarkMode } = useTheme();

    return (
        <Fragment>
            <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
                <Navbar />
                <Hero />
                <Marque />
                <About />
                <ServiceSection />
                <ProjectSection />
                <Testimonial />
                <BlogSection />
                <ContactArea />
                <Footer />
                <BackToTop />
            </div>
        </Fragment>
    )
};
export default HomePage;