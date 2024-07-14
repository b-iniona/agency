import { useState } from "react";
import "./About.css";

function About() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="aboutWrapper">
      <div className="py-5 ">
        <div className="container-fluid">
          <div className="row justify-content-center ">
            <div className="col-12">
              <div className="title-wrapper">
                <h1 className='about'>About Ewuqet Bet</h1>
                <div className={`aboutDesc ${expanded ? 'expanded' : ''}`}>
                  <p>
                    Welcome to Ewuqet Bet, where we redefine the boundaries of digital influence and spearhead a new era of online money-making for Ethiopians.
                    We are more than just a media agency. We are a vibrant community dedicated to empowering individuals to unlock their online earning potential.
                    </p>
                    {!expanded && (
                      <div className="text-center">
                      <button className='my-1 seeMoreButton fixedSizeButton' onClick={toggleExpanded}>
                      See More...
                    </button> 
                      </div>
                                         )}
                    {expanded && (
                      <div>
                      <p >
                      Our mission is to provide practical, innovative, and ethical online money-making strategies that anyone can implement, no matter their background or experience.
                      Our team of digital experts specializes in social media management, helping businesses and individuals optimize their online presence and turn their social media platforms into profitable ventures.
                      Our robust strategies are tailored to your unique needs, ensuring you get the most out of your online platforms.
                      At Ewuqet Bet, we believe in the power of social media to transform lives.
                      Our commitment is to provide you with the tools, strategies, and knowledge you need to make a living online.
                      Whether you're an aspiring entrepreneur, a small business owner, or a digital enthusiast, we're here to guide you on your journey to online financial success.
                      Join the Ewuqet Bet family today, and let's make the internet work for you.
                      Together, we can create a future where everyone has the opportunity to thrive online.
                      </p>
                      <div className="text-center">
                      <button className='my-1 seeMoreButton fixedSizeButton' onClick={toggleExpanded}>
                      See Less
                    </button> 
                      </div>                 
                      </div>
                      )}
                      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;