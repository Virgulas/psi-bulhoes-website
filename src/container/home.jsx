import Header from "../components/header";
import About from "../components/about";
import Welcome from "../components/welcome";
import AboutMe from "../components/about_me";
import Reviews from "../components/reviews";
import More from "../components/more";
import Toast from "../components/toast";

function Home() {
    return (
    <div>
        <Header />
        <About />
        <Welcome />
        <AboutMe />
        <Reviews />
        <Toast />
        <More />
    </div>
    );
  }
  
  export default Home;