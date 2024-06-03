import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

const App = () => {
  return <div>
    <section id = "Home">
      <Navbar/>
      <Hero/>
    </section>
    <section id = "Bio">Bio</section>
    <section id = "Work">Work</section>
    <section id = "Socials">Socials</section>
  </div>;
};

export default App;
