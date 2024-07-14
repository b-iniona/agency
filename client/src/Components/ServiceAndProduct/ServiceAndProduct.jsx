import React, { useState } from 'react';
import consultancy from "../../Images/consultancy.jpg";
import Membership from "../../Images/member.jpg";
import content from "../../Images/contenCreate.jpg";
import mentorship from "../../Images/mentorship.jpg";
import digital from "../../Images/digitalMarketing.jpg";
import socialMedia from "../../Images/socialMediaManagement.jpg";
import money from "../../Images/money.jpg";
import "./ServiceAndProduct.css";
import "../Posts/Posts.css"
import { Link } from 'react-router-dom';


function ServiceAndProduct() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <div className='service'>

      <div className='serviceWrapper'>
        <h1 className='serviceTitle my-5'>What We Offer</h1>
        <div className='row col-12 all'>
          <div className='image col-lg-6 col-sm-12'>
            <img src={Membership} alt='Group of members networking and collaborating' />
          </div>
          <div className='content col-lg-6 col-sm-12 bordercustom'>
            <h3 className='text-center my-3' >Ewuqet Bet Membership</h3>
            <p>
                  
            Unlock the potential of your online business, freelance career, or content creation journey in Ethiopia with Ewuqet Bet Membership. Gain access to a comprehensive range of services and resources tailored to your needs. 
                 
            </p>
                  {!expanded && (
                    <div className='text-center'> 
                    <button className='my-1 seeMoreButton fixedSizeButton' onClick={toggleExpanded}>
                    See More...
                  </button> 
                    
                  </div>
                  
                  
                                    )}
                                    
                    {expanded && (
                      <div>
                      <p >
                    Stay ahead of the curve with important updates, receive personalized consultations from industry professionals, benefit from mentorship programs, and engage your audience with high-quality content creation. Increase your reach and visibility online with targeted digital marketing campaigns and optimization strategies. Join the Ewuqet Bet family today and redefine the boundaries of digital influence.
                      </p>
                      <div className='text-center'>
                      <button className='my-1 seeMoreButton fixedSizeButton text-center' onClick={toggleExpanded}>
                      See Less </button> 
                      </div>
                      <div className='text-center my-2'> 
                      <Link to="/contactus">
                      <button className='my-1 seeMoreButton fixedSizeButton text-center' >
                      Contact us <i className=" fa-brands fa-telegram"></i> </button>
                      </Link>
                    
                      </div>
                      
                      </div>
                      )}
          </div>
         
        </div>
        <div className='reverse d-flex col-12 all my-5'>
          <div className='image col-lg-6 col-sm-12'>
            <img src={socialMedia} alt='Social Media Management Social media manager creating engaging content' />
          </div>
          <div className='content col-lg-6 col-sm-12 bordercustom'>
            <h3 className='reverseContent text-center my-3'>Social Media Management</h3>
            <p className='reverseContent mx-2'>Our team of digital experts specializes in social media management, helping businesses and individuals optimize their online presence and turn their social media platforms into profitable ventures. We provide tailored strategies to enhance engagement, increase followers, and drive conversions. From content creation to campaign execution, we'll help you leverage the power of social media to transform your online presence and achieve financial success.
            </p>
            <div className='text-center my-2'> 
            <Link to="/contactus">
            <button className='my-1 seeMoreButton fixedSizeButton text-center' >
            Contact us <i className=" fa-brands fa-telegram"></i> </button>
            </Link>
          
            </div>
          </div>
        </div>
        <div className='row col-12 all my-5'>
          <div className='image col-lg-6 col-sm-12'>
            <img src={consultancy} alt='Expert consultant providing guidance and advice' />
          </div>
          <div className='content col-lg-6 col-sm-12 bordercustom'>
            <h3 className='text-center my-3'>Consultations</h3>
            <p className='mx-2'>
            Get personalized advice from our industry professionals on specific challenges you're facing. Whether you need assistance with business strategy, content creation, or online marketing, our experts are here to guide you. Through one-on-one consultations, we'll provide valuable insights and actionable recommendations to help you overcome obstacles and achieve your goals in the Ethiopian online sphere.
            </p>
            <div className='text-center my-2'> 
            <Link to="/contactus">
            <button className='my-1 seeMoreButton fixedSizeButton text-center' >
            Contact us <i className=" fa-brands fa-telegram"></i> </button>
            </Link>
          
            </div>
          </div>
        </div>
        <div className='reverse d-flex col-12 all my-5'>
          <div className='image col-lg-6 col-sm-12'>
            <img src={content} alt='Content creation process with a focus on research and writing' />
          </div>
          <div className='content col-lg-6 col-sm-12 bordercustom'>

            <h3 className='reverseContent text-center my-3'>Content Creation</h3>
            <p className='reverseContent mx-2'>
            Engage your audience with high-quality, culturally relevant content. Our team of content creators specializes in crafting compelling blog posts, captivating social media copy, and persuasive video scripts. We'll help you tell your brand's story effectively, connect with your target audience, and drive meaningful engagement across various online platforms.
            </p>
            <div className='text-center my-2'> 
            <Link to="/contactus">
            <button className='my-1 seeMoreButton fixedSizeButton text-center' >
            Contact us <i className=" fa-brands fa-telegram"></i> </button>
            </Link>
          
            </div>
          </div>
        </div>
        <div className='row col-12 all my-5'>
          <div className='image col-lg-6 col-sm-12'>
            <img src={digital} alt='Creating effective digital marketing strategies' />
          </div>
          <div className='content col-lg-6 col-sm-12 bordercustom'>
            <h3 className='text-center my-3'>Digital Marketing</h3>
            <p className='mx-2'>
            Increase your reach and visibility online with our targeted marketing campaigns and optimization strategies. Our digital marketing experts will develop customized strategies to maximize your online presence, drive traffic to your website or social media channels, and convert leads into customers. From search engine optimization (SEO) to pay-per-click (PPC) advertising, we'll help you achieve your marketing goals in the Ethiopian online market.
            </p>
            <div className='text-center my-2'> 
            <Link to="/contactus">
            <button className='my-1 seeMoreButton fixedSizeButton text-center' >
            Contact us <i className=" fa-brands fa-telegram"></i> </button>
            </Link>
          
            </div>
          </div>
        </div>
        <div className='reverse d-flex col-12 all my-5'>
          <div className='image col-lg-6 col-sm-12'>
            <img src={mentorship} alt='Experienced mentor guiding a mentee in a mentoring session mentorship' />
          </div>
          <div className='content col-lg-6 col-sm-12 bordercustom'>

            <h3 className='reverseContent text-center my-3'>Mentorship Programs</h3>
            <p className='reverseContent mx-2'>
            Benefit from our mentorship programs designed to provide guidance and support in your online journey. Our experienced mentors will work closely with you to help you develop the necessary skills, navigate challenges, and unlock your full potential. Whether you're just starting or looking to take your online presence to the next level, our mentorship programs will provide valuable insights and personalized advice to help you achieve your goals.
            </p>
            <div className='text-center my-2'> 
            <Link to="/contactus">
            <button className='my-1 seeMoreButton fixedSizeButton text-center' >
            Contact us <i className=" fa-brands fa-telegram"></i> </button>
            </Link>
          
            </div>
          </div>
        </div>
        <div className='row col-12 all my-5'>
        <div className='image col-lg-6 col-sm-12'>
          <img src={money} alt='Smartphone displaying a mobile banking app, representing convenient online money management' />
        </div>
        <div className='content col-lg-6 col-sm-12 bordercustom'>
          <h3 className='text-center my-3'>Online Money Making</h3>
          <p className='mx-2'>
          Discover the ultimate guide to online money making at Ewuqet Bet. Join our vibrant community and unlock your earning potential with practical strategies and expert advice. Whether you're an aspiring entrepreneur, small business owner, or digital enthusiast, we provide the tools and knowledge to thrive in the digital landscape. Let us help you turn your online presence into a profitable venture. Start your journey to financial success today with Ewuqet Bet.
                  </p>
                  <div className='text-center my-2'> 
                  <Link to="/contactus">
                  <button className='my-1 seeMoreButton fixedSizeButton text-center' >
                  Contact us <i className=" fa-brands fa-telegram"></i> </button>
                  </Link>
                
                  </div>
          
        </div>
      </div>
       
      </div>
    </div>
  );
}

export default ServiceAndProduct;