import React from "react";
import "./css/Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h2>Sitemap</h2>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Login</li>
        </ul>
      </div>
      <div>
        <h2>Terms and Quick Links</h2>
        <ul>
          <li>Term of Usage</li>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </div>
      <div>
        <h2>Address and Content</h2>
        <ul>
          <li>City: Governorate</li>
          <li> Country Phone: 0964 000 000 0000</li>
          <li>Email: example@domain.com</li>
        </ul>
        {/* <p>
          City, Governorate, Country Phone: 0964 000 000 0000 Email:
          example@domain.com
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
