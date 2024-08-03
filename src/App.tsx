import { Box } from '@chakra-ui/react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Clients from './components/Clients/Clients'
import { useLayoutEffect, useEffect } from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

function App() {
  useLayoutEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, []);

  useEffect(() => {

    Events.scrollEvent.register('begin', () => {});

    Events.scrollEvent.register('end', () => {});

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <Box>
      <Header />
      <Hero />
      <About />
      <Clients />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  )
}

export default App
