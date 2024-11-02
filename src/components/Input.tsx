import React from "react";

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
    <div className="flex w-1/2 flex-col">
      <label htmlFor={label} className="font-light text-[18px]">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder && type !== "color" ? placeholder : label}
        id={label}
        className="px-3 py-2 focus:border-4 duration-300 transition-all text-[18px] outline-none rounded-lg  w-full border-cyan-600 border border-b-4"
      />
    </div>
  );
};

export default Input;
