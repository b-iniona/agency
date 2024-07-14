import React, { useState } from 'react';
import './Faqs.css'

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: `What is Ewuqet Bet?`,
      answer: `Ewuqet Bet is an all-in-one platform in Ethiopia that empowers creators and businesses in their online endeavors. It offers a range of services, including curated updates, consultations, mentorship programs, content creation, and digital marketing.`,
    },
   
    
   { question:`What is Ewuqet Bet Membership?`,
    answer:`Ewuqet Bet Membership unlocks the potential of your online business, freelance career, or content creation journey in Ethiopia. As a member, you gain access to a comprehensive range of tailored services and resources to support your digital growth and success.`
  },
  { question:`What can I expect from Consultations?`,
    answer:`Consultations with Ewuqet Bet's industry professionals provide personalized advice on specific challenges you're facing. Whether it's business strategy, content creation, or online marketing, they offer valuable insights and actionable recommendations to help you overcome obstacles and achieve your goals.`,
    
  },
  {
    question:`What are Mentorship Programs?`,
    answer:`Ewuqet Bet's Mentorship Programs provide guidance, support, and valuable feedback from experienced professionals. They understand the challenges and opportunities in Ethiopia's digital landscape and offer ongoing encouragement to help you navigate and succeed in your online journey.`
    
  },
  {
    question:`How does Ewuqet Bet assist with Content Creation?`,
    answer:`Their team of content creators specializes in crafting compelling blog posts, engaging social media copy, and persuasive video scripts. They help you effectively tell your brand's story, connect with your target audience, and drive meaningful engagement across various online platforms.`
    
  },
  {
    question:`Are there any additional services offered by Ewuqet Bet?`,
    answer:`Yes, Ewuqet Bet is continuously expanding its services to better serve your needs. They regularly introduce new offerings and resources to provide innovative solutions for online success in Ethiopia. Check back regularly to explore these additional services and stay updated with their evolving solutions.`
    
    
  },

  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='Faqs text-center px-3'>
    <h1 className='text-center pt-3 latestPosts mb-3'>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index}>
          <div 
            className={`faq-question ${activeIndex === index ? 'active' : '' }`}
            onClick={() => handleToggle(index)}
          >
          <div className='my-3 question'>
         {index+1}.  {faq.question}<i className="mx-2 fa-solid fa-caret-down"></i>

          </div>
          </div>
          {activeIndex === index && (
            <div className="faq-answer border text-center ">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faqs;
