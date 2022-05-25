import "../../styles/layout/Footer.scss";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <span>Challenge by </span>
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        className="footer__challenge"
      >
        Frontend Mentor
      </a>
      <span>. Coded by </span>
      <a href="https://github.com/khaizter" className="footer__coded">
        Khaizter
      </a>
      .
    </footer>
  );
};

export default Footer;
