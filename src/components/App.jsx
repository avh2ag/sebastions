import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Members from './Members/Members';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
  membersData,
  carouselData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [members, setMembers] = useState([]);
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setMembers([...membersData]);
    setCarousel([...carouselData]);
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer, members, carousel }}>
      <Hero />
      <About />
      <Projects />
      <Members />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
