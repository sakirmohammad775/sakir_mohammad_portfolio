import Navbar from "../Component/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Card from "./Card/Card";
import InfoSection from "./InfoSection";



const Home = () => {
    return (
        <>
        <div >
        <Navbar ></Navbar>
        <Banner></Banner>
        <InfoSection></InfoSection>
        <Card></Card>

        </div>
        
        
        </>
    );
};

export default Home;