import React from "react";
import { footerText, footerSubTexts } from "../../assets/data";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-topics">
        {footerText.map((item, index) => {
          return (
            <div key={`footer-${index}`}>
              <h4>{item}</h4>
              {footerSubTexts[index].map((it, idx) => {
                return <p key={`footer-${index}-${idx}`}>{it}</p>;
              })}
            </div>
          );
        })}
      </div>
      <a
        href="https://github.com/LightSync24"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <p className="made-by">Made By Kshitij Tiwari</p>
      </a>
    </div>
  );
};

export default Footer;
