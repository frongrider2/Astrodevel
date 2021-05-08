import React from "react";

import * as Scroll from "react-scroll";

const Header = (props) => {
  const handlesetActive = (e) => {
    console.log(e);
  };
  return (
    <div className="main-menu-contain">
      <div className="main-menu">
        <b style={{ fontSize: "50px" }}>👨‍🚀</b>
      </div>
      <Scroll.Link
        activeClass={"active-links"}
        spy={true}
        to="home"
        smooth={true}
        duration={1000}
        onSetActive={handlesetActive}
      >
        <div className="main-menu">
          <i className="fas fa-home"></i>
        </div>
      </Scroll.Link>
      <Scroll.Link
        activeClass={"active-links"}
        spy={true}
        to="about"
        smooth={true}
        duration={1000}
        onSetActive={handlesetActive}
        offset={-50}
      >
        <div className="main-menu">
          <i className="fas fa-user-tie"></i>
        </div>
      </Scroll.Link>
      <Scroll.Link
        activeClass={"active-links"}
        spy={true}
        to="skills"
        smooth={true}
        duration={1000}
        onSetActive={handlesetActive}
        offset={-50}
      >
        <div className="main-menu">
          <i className="fas fa-graduation-cap"></i>
        </div>
      </Scroll.Link>
      <Scroll.Link
        activeClass={"active-links"}
        spy={true}
        to="work"
        smooth={true}
        duration={1000}
        onSetActive={handlesetActive}
        offset={-50}
      >
        <div className="main-menu">
          <i className="fas fa-briefcase"></i>
        </div>
      </Scroll.Link>
      <Scroll.Link
        activeClass={"active-links"}
        spy={true}
        to="service"
        smooth={true}
        duration={1000}
        onSetActive={handlesetActive}
        offset={-50}
      >
        <div className="main-menu">
          <i className="fas fa-rocket"></i>
        </div>
      </Scroll.Link>
      <Scroll.Link
        activeClass={"active-links"}
        spy={true}
        to="contact"
        smooth={true}
        duration={1000}
        onSetActive={handlesetActive}
        offset={-50}
      >
        <div className="main-menu">
          <i className="far fa-address-book"></i>
        </div>
      </Scroll.Link>
    </div>
  );
};

export default Header;
