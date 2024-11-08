import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/360_F_751973543_FKU2qGdwQ3cS6mj0UJJurf3W4TjTEdtw.jpg"
import image2 from "../../assets/360_F_886125544_wBvif49GTjzATx3VbzzaiDSMYieGee0C.jpg"
import image3 from "../../assets/pngtree-d-rendering-of-web-design-elements-with-indicators-for-internet-software-image_3731392.jpg"
import image4 from "../../assets/What_is_System_Software.avif"
import image5 from "../../assets/pngtree-d-rendering-of-web-design-elements-with-indicators-for-internet-software-image_3731392.jpg"

import "react-responsive-carousel/lib/styles/carousel.min.css"
const Banner = () => {
    return (
        <>
        <Carousel className="max-w-screen-2xl">
            <div><img src={image5}></img></div>
            <div><img src={image1}></img></div>
            <div><img src={image3}></img></div>
            <div><img src={image2}></img></div>
            <div><img src={image4}></img></div>
            
        </Carousel>
        </>
    );
};

export default Banner;