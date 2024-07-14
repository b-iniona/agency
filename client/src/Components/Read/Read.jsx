import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Read.css';
import { AuthContext } from '../../Context/authContext';

const Read = () => {
  const [subscribers, setSubscribers] = useState({});
  const [showAll, setShowAll] = useState(false);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await axios.get('https://www.server.com/api/subscribers');
        if (response.status === 200) {
          setSubscribers(response.data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchSubscribers();
  }, []);

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  const visibleSubscribers = showAll
    ? Object.keys(subscribers)
    : Object.keys(subscribers).slice(0, 10);

  return (
    <div className="read">
      <div>
        <h1 className="mt-5 pt-5 subscribers text-center">Subscribers</h1>
        <div className="email-list text-center">
          <div className='clickemail'> Click <i className="fa-regular fa-hand-point-up"></i> to email them automatically </div> 
          {visibleSubscribers.map((key, index) => (
            <div className='email-list' key={index}>
              {logout ? (
                <a className="text-decoration-none email" href={`mailto:${subscribers[key]}`}>
                  {index + 1}. {subscribers[key]}
                </a>
              ) : (
                <p> You are not authorized to see email</p>
              )}
            </div>
          ))}
          {Object.keys(subscribers).length > 10 && !showAll && (
            <button className="btn btn-primary" onClick={handleToggleShowAll}>
              See More
            </button>
          )}
          {showAll && (
            <button className="btn btn-primary" onClick={handleToggleShowAll}>
              See Less
            </button>
          )}
          <div className='clickemail my-1'>You have <span className="fw-bold text-success border p-1">{Object.keys(subscribers).length}</span> Subscribers</div>
        </div>
      </div>
    </div>
  );
};

export default Read;