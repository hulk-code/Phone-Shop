import Banner from "../Bannar/Banner";
import BrandName from "../BrandName/BrandName";
import Footer from "../SharedPage/Footer";
import MarqueeSlider from "./MarqueeSlider";




const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <BrandName></BrandName>
            <MarqueeSlider></MarqueeSlider>
            <Footer></Footer>
        </div>
    );
};

export default Home;