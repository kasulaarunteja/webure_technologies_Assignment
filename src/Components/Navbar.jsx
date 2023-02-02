import React from "react";

const Navbar = () => {
  return (
    <div id="container">
      <nav>
        <div id="logo">Webure Technologies</div>
        <ul>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">ROI Stroies</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <button className="button">Let's Talk</button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
