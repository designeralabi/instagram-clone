import React from "react";
import highlights from "../../Api/highlights";
import "../Highlight/Highlight.css";

export default function Highlight() {
  return (
    <div className="highlight_container">
      {highlights.map((highlight) => (
        <div key={highlight.id} className="highlight_wrapper">
          <img src={highlight.href} alt="dummy" className="higlight_img" />
          <p className="highlight_title">{highlight.title}</p>
        </div>
      ))}
    </div>
  );
}
