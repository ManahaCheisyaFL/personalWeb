import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer"

function App() {
  return (
    // make personal resume, cv portofolio with tailwind css
    <div>
      <NavBar />
      <Home />
      <About />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
