import React, { Component } from "react";
import "./Hero.css";
import profileImg from "../../Api/_dsc9068-editar-editar-2-170x256.jpeg";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero_container">
        <img src={profileImg} id="profile_img" alt="profile_image" />
        <div className="hero_profile">
          <div id="hero_top_profile">
            <h1>Profile_name</h1>
            <button id="follow_button"> Follow </button>
          </div>
          <div className="hero-followers">
            <span>256 post</span>
            <span>1,812 followers</span>
            <span>1,634 followers</span>
          </div>
          <div className="hero_bio">
            <h3>profile_name</h3>
            <span> 🤟 profile_category 😇</span>
            <span> 🎓 B.A Management (Lasustech)</span>
            <span> 👨‍💻 i-design | i-code | i-edit</span>
            <span> 🌍 Lagos, Nigeria</span>
            <span>
              <a href="www.instagram.com">www.instagram.com</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
