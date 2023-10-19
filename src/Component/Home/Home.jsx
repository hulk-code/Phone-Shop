import Banner from "../Bannar/Banner";
import BrandName from "../BrandName/BrandName";
import Footer from "../SharedPage/Footer";
import Navber from "../SharedPage/Navber";


const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <BrandName></BrandName>
            <Footer></Footer>
        </div>
    );
};

export default Home;