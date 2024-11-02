import Input from "@/components/Input";
import Link from "next/link";
import React from "react";
import "./style.css";
// Import the CSS file

const page = () => {
  return (
    <form className="form-container">
      <h1 className="form-title">Sign in form</h1>
      <div className="form-content">
        <Input label="Username or Email" type="text" />
        <Input label="Password" type="password" />
        <footer className="form-footer">
          <Link href="#" className="forgot-password">
            Forget password?
          </Link>
          <button className="back-button">Back</button>
        </footer>
      </div>
    </form>
  );
};

export default page;
