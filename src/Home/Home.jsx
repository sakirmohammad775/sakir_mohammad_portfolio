import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Card from "./Card/Card";
import InfoSection from "./InfoSection";
import MyProjects from "./MyProject/MyProject";
import Newsletter from "./NewsLetter/NewsLetter";
import WhatWeDo from "./WhatToDo/WhatToDo";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";



const Home = () => {
    return (
        <>
        <div >
        <Navbar ></Navbar>
        <Banner></Banner>
        <InfoSection></InfoSection>
        <MyProjects></MyProjects>
        <Card></Card>
        <WhatWeDo></WhatWeDo>
        <WhatWeOffer></WhatWeOffer>
        <Newsletter></Newsletter>
        <Footer></Footer>

        </div>
        
        
        </>
    );
};

export default Home;