import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bannerMobile from "../../Images/mobilebanner.png";
import bannerTablet from "../../Images/bannerTablet.png";
import banner from "../../Images/bannergirl.png";
import successMobile from "../../Images/successMobile.png";
import successTablet from "../../Images/successTablet.png";
import success from "../../Images/successbanner.png";
import "./Home.css";
import "../../bootstrap.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Home = () => {
 
  useEffect(() => {
    const interval = setInterval(() => {
      const nextButton = document.querySelector(".carousel-control-next");
      if (nextButton) {
        nextButton.click();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide py-5" data-bs-ride="carousel">
    <ToastContainer/>
  <ol className="carousel-indicators">
    <li data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" className="active"></li>
    <li data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="Home">
        <div className="HomeTitles text-center">
          <span className="HomeTitle-sm text-center col-6 black">Ewuqet Bet</span>
          <span className="HomeTitle-lg text-right col-6 black">Empowering Ethiopian Creators and Businesses.<br/> Ewuqet Bet is your all-in-one platform for unlocking the potential of your online business, freelance career, or content creation journey in Ethiopia.
          </span>
        </div>
        <div className="img-fluid slide">
          <img src={bannerMobile} alt="Slide 2 Mobile" className="img-fluid d-lg-none" />
          <img src={bannerTablet} alt="Slide 2 Tablet" className="img-fluid d-none d-lg-block d-xl-none" />
          <img src={banner} alt="Slide 2 Desktop" className="img-fluid d-none d-xl-block" />
        </div>  
      </div>
    </div>
    <div className="carousel-item">
      <div className="Home">
        <div className="HomeTitles text-center">
        <span className="HomeTitle-sm text-center col-6">እውቀት ቤት</span>
        <span className="HomeTitle-lg  text-center col-6">የእኛ ተልእኮ ማንኛውም ሰው ሊተገብራቸው የሚችላቸው ተግባራዊ፣ ፈጠራ ያለው እና ሥነ ምግባራዊ የኢንተርኔት ገንዘብ ማስገኛ ስልቶችን ማቅረብ ነው፣ ምንም ዓይነት የኋላ ታሪክ ወይም ልምድ ቢኖረውም::
        </span>
        </div>
        <div className="slide">
          <img src={successMobile} alt="Slide 2 Mobile" className="img-fluid d-lg-none" />
          <img src={successTablet} alt="Slide 2 Tablet" className="img-fluid d-none d-lg-block d-xl-none" />
          <img src={success} alt="Slide 2 Desktop" className="img-fluid d-none d-xl-block" />
        </div>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </a>
</div>
  );
};

export default Home;
