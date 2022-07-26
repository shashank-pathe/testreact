import React from "react";
import landingImage from "../../img/landing.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Header() {
	return ( 
		<>
			<div className="headerCarousel">
				<Carousel showArrows={false} autoPlay={true} labels={false} infiniteLoop={true} showStatus={false} showThumbs={false} swipeable={true}>
                <div>
                    <img src={landingImage} />
                </div>
                <div>
                    <img src="https://www.infratech.ind.in/assets/images/slider-img/landing-page--05.jpg" />
              
                </div>
                <div>
                    <img src="https://www.infratech.ind.in/assets/images/slider-img/landing-page--05.jpg" />
                
                </div>
            	</Carousel>
			</div>
		</>
	);
}
