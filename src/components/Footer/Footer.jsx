import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-text"><b>Follow Us For More Information</b></p>
        <div className="socials">
          <a href="#"><img src="/icons/fb.svg" alt="Facebook" /></a>
          <a href="#"><img src="/icons/yt.svg" alt="YouTube" /></a>
          <a href="#"><img src="/icons/p.svg" alt="Pinterest" /></a>
        </div>
      </div>

      <div className="copyright">
        All Right Reserved By Rumi Akbar
      </div>
    </footer>
  );
};

export default Footer;
