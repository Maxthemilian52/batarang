import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import art1 from '../../assets/images/image1.png';
import art2 from '../../assets/images/image2.png';
import art3 from '../../assets/images/image3.png';
import art4 from '../../assets/images/image4.png';

function Home() {
    return (
        <main>
            
            <div className='backgroundImg d-flex flex-row justify-content-around flex-wrap p-4'>
            <Carousel autoPlay={true} showStatus={false} infiniteLoop={true} showThumbs={false} showIndicators={false} showArrows={false} dynamicHeight={true}>
                <div classsName= 'carousel'>
                    <img className='carousel' src={art1} alt='CMA Art'/>
                </div>
                <div>
                    <img className='carousel' src={art2} alt='CMA Art' />
                </div>
                <div>
                    <img className='carousel' src={art3} alt='CMA Art'/>
                </div>
                <div>
                    <img className='carousel' src={art4} alt='CMA Art'/>
                </div>
            </Carousel>

            </div>
            <div className='missionStatement d-flex flex-column align-items-center p-4'>
                <h2>Mission:</h2>
                <p>Our mission is to maintain a website where CMA Docents can see up-to-date information; such as, active 
docents and their contact information, policies and procedures, tour 
availability, educational resources and be able to communicate in a 
social media format.</p>
                <h3>Where is Everything?</h3>
                <ul>
                    <li>Posts: This page will have all of the blog posts that Docents have posted for others to see</li>
                    <li>Directory: This page will provide the contact information for all active docents</li>
                    <li>Events: This page will show all of the current events scheduled for docents, and how many volunteers are needed</li>
                </ul>
            </div>
        </main>
    );
}

export default Home;