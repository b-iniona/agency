import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./bootstrap.css";
import App from "./App";

import { AuthContexProvider } from "./Context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    
    <AuthContexProvider>
    <App />
    
    </AuthContexProvider>
    
   
    
    
);
