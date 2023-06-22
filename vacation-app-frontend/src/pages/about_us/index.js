import AboutUs from "../../components/about_us";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const AboutUsPage=()=>{
    return(
        <div>
          <Navbar activePage="about"/>
          <AboutUs/>
          <Footer/>
        </div>
    )
}
export default AboutUsPage;