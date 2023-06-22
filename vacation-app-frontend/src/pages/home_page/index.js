// import AddVacation from '../../components/add_vacation';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar'
import VacationPictures from '../../components/vacation_pictures';
import VacationTable from '../../components/vacation_table';
import Content from '../../components/header_image';

const Homepage=()=>{
    return(
        <div>
          <Navbar activePage="home"/>
          <Content/>
          <VacationPictures/>
          {/* <AddVacation/> */}
          <VacationTable/>
          <Footer/>
        </div>
    )
}
export default Homepage;