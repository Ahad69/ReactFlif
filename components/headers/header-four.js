import React, { useEffect } from "react";
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import TopBar from "./common/topbar-dark";
import CartContainer from "../containers/CartContainer";
import LogoImage from "./common/logo";
import { Container, Col, Row, Media } from "reactstrap";
import Currency from "./common/currency";
import SearchOverlay from "./common/search-overlay";

const HeaderFour = ({ logoName, topClass, fluid, hfluid }) => {
  //   const isLoading = false;

  /*=====================
         Pre loader
     ==========================*/

  useEffect(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = "display: none";
    }, 2000);
  }, []);

  const openNav = () => {
    var openmyslide = document.getElementById("mySidenav");
    if (openmyslide) {
      openmyslide.classList.add("open-side");
    }
  };
  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  };

  return (
    <div>
      <header>
        <div className="mobile-fix-option"></div>
        {/*Top Header Component*/}
        <TopBar fluid={fluid} topClass={topClass} />

        <Container fluid={hfluid}>
          <Row>
            <Col>
              <div className="main-menu">
                <div className="menu-left">
                  <div className="navbar">
                    <a href="#" onClick={openNav}>
                      <div className="bar-style">
                        <i
                          className="fa fa-bars sidebar-bar"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </a>
                    {/*SideBar Navigation Component*/}
                    <SideBar />
                  </div>
                  <div className="brand-logo">
                    <LogoImage logo={logoName} />
                  </div>
                </div>
                <div className="menu-right pull-right">
                  {/*Top Navigation Bar Component*/}
                  <NavBar />

                  <div>
                    <div className="icon-nav">
                      <ul>
                        <li className="onhover-div mobile-search">
                          <div>
                            <Media
                              src={`/assets/images/icon/search.png`}
                              onClick={openSearch}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </li>

                        <Currency icon={"/assets/images/icon/setting.png"} />
                        {/*Header Cart Component */}
                        <CartContainer icon={"/assets/images/icon/setting.png"} />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <SearchOverlay />
    </div>
  );
};

export default HeaderFour;
