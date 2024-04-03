import React from "react";
import "./style.css";
import { IMAGES_PATHS } from "../../../constants";

function Navbar({ search, notificationAndprofile }) {
  return (
    <div className="main">
      <div  className="left-side">
        <h1 className="heading">Attendify</h1>
        {search && (

            <input type="text" placeholder="Search...." className="search"/>
        
        )}
      </div>
      {notificationAndprofile && (
        <div className="rightSide">
          <img src={IMAGES_PATHS.notificationBell} alt="Notification bell" />

          <div className="profile">
            <img
              className="profileImg"
              src={IMAGES_PATHS.profileImg}
              alt="Profile picture"
            />
            <h3>Hassan</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
