import React, { useState } from 'react';
import axios from 'axios';
import '../Posts/Posts.css';
import './EmailSubscription.css';
import { ToastContainer, toast } from 'react-toastify';

const EmailSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://www.server.com/api/subscribe', { email });

      if (response.status === 200) {
        toast.success('Your subscription has been successful! Please check your email!');
      } else {
        toast.error('Subscription failed, Please try again!');
      }
    } catch (error) {
      toast.error(error.response.data);
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
    <ToastContainer/>
      <div className='posts my-3'>
        <h1 className='text-center pt-5 emailSubscribtion mb-3'>E-mail Subscription</h1>
        <p className='subscribeParagraph px-5'>Join our community today and never miss out on the latest trends. Simply enter your email below and start enjoying the perks of being an insider!</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
          required
          className='inputEmail'
        />
        <button className='subscribe btn-success' type="submit">Subscribe</button>
      </div>
    </form>
  );
};

export default EmailSubscription;
