import Background from "./components/Background";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const Home = () => {

    return (
        <div className="relative h-screen">
            <Background />
            <div className="relative z-10">
                <Navbar />
                <Hero />
            </div>
        </div>
    );
};

export default Home;
