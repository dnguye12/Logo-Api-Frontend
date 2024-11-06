import Background from "./components/Background";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

const Home = () => {

    return (
        <div className="relative h-screen">
            <Background />
            <div className="relative z-10">
                <Navbar />
                <Hero />
                <Main />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
