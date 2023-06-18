import Navbar from '../../components/navbar'
import Content from '../../home_content';

// import Footer from '../../components/footer';
const Homepage=()=>{
    return(
        <div>
          <Navbar activePage="home"/>
          <Content/>
          {/* <Footer/> */}
        </div>
    )
}
export default Homepage;