import React from "react";

function Buttons() {
  return (
    <div className="buttons">
      <button className="email">
        <i className="fa fa-envelope"></i> Email
      </button>
      <button className="linkedin">
        <i className="fa fa-linkedin" style={{ color: "white" }}></i> LinkedIn
      </button>
    </div>
  );
}

export default Buttons;
