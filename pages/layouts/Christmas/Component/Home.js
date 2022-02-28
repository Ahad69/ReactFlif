import React from "react";
import Slider from "react-slick";
import { Media } from "reactstrap";

const Home = () => {
  const settings = {
    fade: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,

  };
  const banners = ['/assets/images/christmas/home-banner/1.jpg', '/assets/images/christmas/home-banner/2.jpg', '/assets/images/christmas/home-banner/3.jpg'];
  const Banner = ({ img }) => {
    return (
      <div>
        <Media src={img} className="img-fluid" style={{ width: '100%' }} alt="" />
        <div className="slider-details">
          <div>
            <h3>bring</h3>
            <h2>christmas</h2>
            <h1>sale</h1>
            <h4>upto - 50%</h4>
            <h4>OFF</h4>
            <a href="#" className="btn btn-white" tabIndex="0">
              shop now
            </a>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="p-0 snow-slider">
      <Slider className="slide-1 home-slider">
        {banners.map((banner, i) => {
          return <Banner key={i} img={banner} />;
        })}
      </Slider>
    </section>
  );
};
export default Home;
