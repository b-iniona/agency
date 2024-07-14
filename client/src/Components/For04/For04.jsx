import React from 'react'
import { Link } from 'react-router-dom'
import '../Login/Login.css'


function For04() {
  return (
    <div className="For04">
    
        <div className="">
                <div className="container-fluid">
                    <div className="row justify-content-center text-center">
                        <div className="col-12">
                            <div className="title-wrapper">
                                <h2><i class="fa-solid fa-skull"></i><br/>404<br/>The page you are looking for <br/> 
                                Couldn't be found </h2>
                                
                                <Link className=" " to="/">
                                <button className=" mx-5 my-2 submit registerBtn">
                                  Home Page
                                  </button>
                                  </Link>
                            </div>
                        </div>
                            
                    </div>
  
  </div>
</div>
        
    </div>
  )
}

export default For04