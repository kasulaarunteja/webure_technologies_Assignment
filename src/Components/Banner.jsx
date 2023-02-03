import React from "react";

const Banner = () => {
  return (
    <div>
      <div>
        <img src="/imgs/banner.jpg" alt="Backgroud" height="100%" width="95%"/>
      </div>
      <div>
      <img src="/imgs/bannerr.png" alt="Backgroud" height="100%" width="95%"/>
      </div>
      <div className="mainbox">
         <div className="boxdiv">
            <h2>96%</h2>
            <h6>Client retetion</h6>
            <p>By Dalibor and Marino </p>
            <p>in Hong Kong</p>
         </div>
         <div className="boxdiv">
            <h2>10+</h2>
            <h6>Year of service</h6>
            <p>By Dalibor and Marino </p>
            <p>in Hong Kong</p>
         </div>
         <div className="boxdiv">
            <h2>70+</h2>
            <h6>Professionals</h6>
            <p>By Dalibor and Marino </p>
            <p>in Hong Kong</p>
         </div>
         <div className="boxdiv">
            <h2>$40M</h2>
            <h6>In funding</h6>
            <p>By Dalibor and Marino </p>
            <p>in Hong Kong</p>
         </div>
      </div>
    </div>
  );
};

export default Banner;
