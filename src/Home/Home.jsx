import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";
import Banner from "./Banner/Banner";
import EssentialTools from "./EssentialTools/EssentialTools.jsx";
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
        <EssentialTools></EssentialTools>
        <MyProjects></MyProjects>
        <WhatWeDo></WhatWeDo>
        <WhatWeOffer></WhatWeOffer>
        <Newsletter></Newsletter>
        <Footer></Footer>

        </div>
        
        
        </>
    );
};

export default Home;