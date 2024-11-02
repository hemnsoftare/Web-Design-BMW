import React from "react";

const Radio = ({
  label,
  name,
  type,
}: {
  name: string;
  label: string;
  type?: string;
}) => {
  return (
    <div className="flex mt-3 w-full items-center gap-2">
      <input
        type={type ? type : "radio"}
        name={name}
        id={label}
        className="accent-[#0e7490]"
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Radio;
