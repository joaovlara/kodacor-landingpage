import React from 'react';
import Navbar from './components/navbar/Index';
import About from './Containers/About/Index';
import Footer from './Containers/Footer/Index';
import Galery from './Containers/Galery/Index';
import Hero from './Containers/Hero/Index';
import Pricing from './Containers/Pricing/Index';
import Tattoo from './Containers/Tattoo/Index';
import Team from './Containers/Team/Index';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Galery />
      <Pricing />
      <Tattoo />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
