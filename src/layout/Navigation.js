import React from "react";
import "./styles/Navigation.css";
import user from "../assets/user-3.png";
import notification from "../assets/notification-bell.png";
import upArrow from "../assets/up-arrow.png";
import downArrow from "../assets/down-arrow.png";

export default function Navigation() {
  return (
    <div className="user-bar-parent">
      <div className="page-style">
        <div className="icons-userbar">
          <img className="logo-userbar" alt="user" src={notification} />
          <img className="logo-userbar" alt="user" src={user} />
        </div>
        {/* <label style={{color:"black", display:"flex", fontSize:"0.8vw", fontWeight:"normal"}}>{(props.fn).concat(" ").concat(props.ln)}</label> */}

        <label
          style={{
            color: "black",
            display: "flex",
            fontSize: "0.8vw",
            fontWeight: "normal",
          }}
        >
          {"FirstName".concat(" ").concat("LastName")}
        </label>

        <button
          style={{
            border: "none",
            background: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "1rem",
          }}
        >
          <img
            className="arrow-ico-userbar"
            alt="arrow-up"
            src={downArrow}
            // src={props.profileComp === false ? downArrow : upArrow}
          />
          
        </button>
      </div>
    </div>
  );
}
