import React from "react";
import facebook from "../Images/fb.png";
import instagram from "../Images/instagram.png";
import github from "../Images/github.png";
import twitter from "../Images/twitter.png";
function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebook} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={github} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
