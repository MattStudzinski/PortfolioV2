import About from "./About";
import Navbar from "./Navbar";


const Header = () => {
    return (
        <section className='header'>
            <Navbar />
            <About />
        </section>
    );
};

export default Header;