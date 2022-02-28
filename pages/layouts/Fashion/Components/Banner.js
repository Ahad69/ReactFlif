import React, { Fragment } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "./MasterBanner";

const Data = [
  {
    img: "home1",
    title: "welcome to fashion",
    desc: "men fashion",
    link: "/left-sidebar/collection ",
  },
  {
    img: "home2",
    title: "welcome to fashion",
    desc: "women fashion",
    link: "/left-sidebar/collection ",
  },
];

const Banner = () => {
  const settings = {

    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,

  };
  return (
    <Fragment>
      <section className="p-0">
        <Slider className="slide-1  home-slider" {...settings}>
          {Data.map((data, i) => {
            return (

              <MasterBanner
                key={i}
                img={data.img}
                desc={data.desc}
                title={data.title}
                link={data.link}
              />
            );
          })}
        </Slider>
      </section>
    </Fragment >
  );
};

export default Banner;
