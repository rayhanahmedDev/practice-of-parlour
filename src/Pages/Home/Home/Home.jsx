import Navber from "../../Shared/Navber/Navber";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ScreenCare from "../ScreenCare/ScreenCare";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <div>
                <Navber></Navber>
            </div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Services></Services>
            </div>
            <div>
                <ScreenCare></ScreenCare>
                <Testimonial></Testimonial>
            </div>
            <div className="w-full bg-[#FFF8F5]">
                <Contact></Contact>
            </div>
            <div className="bg-[#F63E7B] w-full">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;