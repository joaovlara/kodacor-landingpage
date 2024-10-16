import React from 'react';
import NavBar from './components/navbar/Index';
import Footer from './Containers/Footer/Index';
import Galery from './Containers/Galery/Index';
import Hero from './Containers/Hero/Index';
import Pricing from './Containers/Pricing/Index';
import Tattoo from './Containers/Tattoo/Index';
import Team from './Containers/Team/Index';

const App: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <Hero />
      <Tattoo />
      <Team />
      {/* <Pricing /> */}
      <Galery />
      <Footer />
    </div>
  );
}

export default App;
