
import Home from '../Home/Home'
import Posts from '../Posts/Posts'
import React, { useEffect, useState } from "react"
import axios from 'axios';
import './SharedLayout.css'
import About from '../About/About';
import ServiceAndProduct from '../ServiceAndProduct/ServiceAndProduct';

function SharedLayout() {
const [posts, setPosts]=useState([]);


  useEffect(()=>{
    const fetchPost = async ()=>{
      const res = await axios.get("https://www.server.com/api/post")
     setPosts(res.data);
      
      

    }
    fetchPost()
    
  }, []);


  return (
    <div>
    
    <Home/>
    <About/>
    <Posts postsArray={posts}/>
    <ServiceAndProduct/>
   
    
    
    </div>
  )
}

export default SharedLayout