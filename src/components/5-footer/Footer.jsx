import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Speaking</a>
        </li>
        <li>
          <a href="">Uses</a>
        </li>
      </ul>

      <p>© 2024 <a href="https://nur4tech.com">NUR4TECH</a>. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
