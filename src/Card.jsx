import React from "react";
import girl_image from "./Images/girl_image.png";
import Buttons from "./Components/Buttons";
import TextIntro from "./Components/TextIntro";
import Description from "./Components/Description";
import Footer from "./Components/Footer";
function Card() {
  return (
    <div className="main_div">
      <div className="sub-div">
        <img src={girl_image} alt="" />
        <div className="text-intro">
          <TextIntro />
          <Buttons />
        </div>
        <Description />
        <Footer />
      </div>
    </div>
  );
}

export default Card;
