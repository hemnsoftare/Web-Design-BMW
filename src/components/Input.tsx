import React from "react";
import "./css/Input.css"; // Import the CSS file

const Input = ({
  label,
  placeholder,
  type,
}: {
  label: string;
  placeholder?: string;
  type: string;
}) => {
  return (
    <div className="input-container">
      <label htmlFor={label} className="input-label">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder && type !== "color" ? placeholder : label}
        id={label}
        className="input-field skew-x-3 focus:skew-x-0 duration-300 trasation-all"
      />
    </div>
  );
};

export default Input;
