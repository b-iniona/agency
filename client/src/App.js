import "./App.css";
import Header from "./Components/Header/Header";
import SharedLayout from "./Components/SharedLayout/SharedLayout";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import SinglePost from "./Components/SinglePost/SinglePost";
import Write from "./Components/Write/Write";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Context/authContext";
import AboutUs from "./Components/AboutUs/AboutUs";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import ServiceAndProduct from "./Components/ServiceAndProduct/ServiceAndProduct";
import For04 from "./Components/For04/For04";
import ContactUs from "./Components/ContactUs/ContactUs";
import EmailSubscription from "./Components/EmailSubscription/EmailSubscription";
import Faqs from "./Components/Faqs/Faqs";
import Read from "./Components/Read/Read";
import BackToTop from "./Components/BackToTop/BackToTop";

function App() {
 
  const {currentUser}=useContext(AuthContext);
  
  return (
      <Router>
        <Header />
        <Routes>
          <Route element={<SharedLayout /> } exact path="/" > </Route>
          <Route element={<SinglePost/>} path="/post/:Id"></Route>
          <Route element={ <Login/>} path="/login"></Route>
          <Route element={ <Register/> } path="/register"></Route>
          <Route element={<ServiceAndProduct/>} path="/services"></Route>
          <Route path="/write" element={currentUser? <Write />:<For04 />}/>
          <Route path="/aboutus" element={<AboutUs/>}> </Route>
          <Route path="/contactus" element={<ContactUs/>}> </Route>
          <Route path="/ChangePassword" element={<ChangePassword/>}> </Route>
          <Route path="/read" element={currentUser?<Read/>:<For04 />}> </Route>
          <Route element={ <For04 />} path="*"/>
        </Routes>
            <EmailSubscription/>
            <Faqs/>
            <BackToTop/>
            <Footer/>

        
      </Router>
    
  );
}

export default App;
