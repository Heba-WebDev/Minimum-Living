import Header from "./Header";
import Benefits from "./Benefits";
import Properties from "./Properties";
import AddProperty from "../Components/AddProperty";
import Flexibility from "./Flexibility";
import Testimonials from "./Testimonials";
import { motion } from "framer-motion"

export default function Home() {
  
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <Header />
      <main>
        <Benefits />
        <Properties />
        <Flexibility />
        <AddProperty />
      </main>
      <Testimonials />
    </motion.div>
  );
}
