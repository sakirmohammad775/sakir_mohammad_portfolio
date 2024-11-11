// Home.js
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";
import EssentialTools from "./EssentialTools/EssentialTools";
import ExperienceSection from "./Experience Section/ExperienceSection";
import InfoSection from "./InfoSection";
import MyProjects from "./MyProject/MyProject";
import Newsletter from "./NewsLetter/NewsLetter";
import WhatWeDo from "./WhatToDo/WhatToDo";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <ExperienceSection></ExperienceSection>
            <div id="home">
                <InfoSection />
            </div>
            <EssentialTools />
            <div id="myProject">

                <MyProjects />
            </div>
            <div id="services">
                <WhatWeDo />
            </div>
            <WhatWeOffer />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;
