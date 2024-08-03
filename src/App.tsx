import { Box } from '@chakra-ui/react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Clients from './components/Clients/Clients'


function App() {

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
