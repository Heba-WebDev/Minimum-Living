import Header from "./Header";
import Benefits from "./Benefits";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import Flexibility from "./Flexibility";
import Testimonials from "./Testimonials";


export default function Home() {
  
  return (
    <>
      <Header />
      <main>
        <Benefits />
        <Properties />
        <Flexibility />
        <AddProperty />
      </main>
      <Testimonials />
    </>
  );
}
