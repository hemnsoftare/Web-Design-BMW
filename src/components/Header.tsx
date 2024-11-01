// Header.js
import Image from "next/image";
import "./css/header.css";

const Header = () => {
  return (
    <header className="header-container">
      <Image
        alt="logo"
        src={"/logo.png"}
        width={100}
        height={100}
        className="header-logo"
      />
      <h1 className="header-title">WebDesign 2023 Assignment</h1>
    </header>
  );
};

export default Header;
