
import Header from './Header';
import Benefits from "./Benefits";
import Properties from "./Properties";
import AddProperty from './AddProperty';
import Flexibility from "./Flexibility";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
//import { useLocation } from 'react-router-dom';

export default function Home() {
 
  return (
    
    <div>
      <Header />
      <Benefits />
      <Properties />
      <Flexibility />
      <AddProperty />
      <Testimonials />
      <Footer />
    </div>
  );
}
