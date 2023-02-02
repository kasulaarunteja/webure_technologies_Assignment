import React from "react";

const Navbar = () => {
  return (
    // <div className='Navbar'>
    //     <div className='left'>
    //         <h3>Webure Technologies</h3>
    //     </div>
    //     <div className='right'>
    //         <div>About us</div>
    //         <div>Service</div>
    //         <div>Careers</div>
    //         <div> ROI Stroies</div>
    //         <div>Blog</div>
    //         <div>Contact Us</div>
    //         <div>
    //         <button>Let's Talk</button>
    //         </div>
    //     </div>
    // </div>

    <div id="container">
      <nav>
        <div id="logo">webure testtechch</div>
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
