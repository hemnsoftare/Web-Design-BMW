import Input from "@/components/Input";
import Radio from "@/components/Radio";
import React from "react";

const page = () => {
  return (
    <form className=" gap-5  py-5 flex flex-col items-center justify-center">
      <Input label="Username" type="text" placeholder="user name" />
      <Input label="Full Name" type="text" placeholder="Full Name" />
      <Input label="Email" type="email" placeholder="Email" />
      <Input label="Telephone" type="text" placeholder="00964 000 000 00 00 " />
      <Input label="Password" type="password" placeholder="password" />
      <Input label="Date Of Brith" type="date" placeholder="Email" />
      <div className="flex w-1/2 flex-col">
        <label htmlFor={"label"} className="font-light text-[18px]">
          Profile Color
        </label>
        <input
          type={"color"}
          defaultValue={"#0e7490"}
          className="outline-none rounded-lg focus:border-4 duration-300 transition-all h-[40px] w-full border-cyan-600 border border-b-4"
        />
      </div>
      <fieldset className=" w-1/2 px-3 border-cyan-700 rounded-tl-lg rounded-tr-lg rounded-md border-2">
        <legend className="text-white bg-cyan-600 border py-1 px-2 rounded-lg">
          marital status:
        </legend>
        <Radio label="Single 🙄" name="marry" />
        <Radio label="married 😎" name="marry" />
        <Radio label="it is private 🤔" name="marry" />
      </fieldset>
      <Input label="number of childern" type="number" placeholder="childern" />
      <div className="flex w-1/2 flex-col">
        <label htmlFor={"label"} className="font-light text-[18px]">
          Choose Your Dgree
        </label>
        <select
          name=""
          id=""
          className="outline-none rounded-lg focus:border-4 duration-300 transition-all h-[40px] w-full border-cyan-600 border border-b-4  hover:text-[#0e7490]"
        >
          <option value="" className="hover:bg-[#0e7490]">
            Master
          </option>
          <option value="" className="hover:bg-[#0e7490]">
            Master
          </option>
          <option value="" className="hover:bg-[#0e7490]">
            Master
          </option>
          <option value="" className="hover:bg-[#0e7490]">
            Master
          </option>
          <option value="" className="hover:bg-[#0e7490]">
            Master
          </option>
        </select>
      </div>
      <div className="flex w-1/2 flex-col">
        <label htmlFor={"label"} className="font-light text-[18px]">
          About Yourself
        </label>
        <textarea
          rows={2}
          placeholder="about you"
          className="outline-none px-3 py-1 rounded-lg focus:border-4 duration-300 transition-all  w-full border-cyan-600 border border-b-4"
        />
      </div>
      <Input label="Upload Your CV" type="file" />
      <fieldset className=" w-1/2 px-3 border-cyan-700 rounded-tl-lg rounded-tr-lg rounded-md border-2">
        <legend className="text-white bg-cyan-600 border py-1 px-2 rounded-lg">
          Gender
        </legend>
        <Radio label="Male 🙎‍♂️" name="marry" />
        <Radio label="Female 🙍‍♀️" name="marry" />
      </fieldset>
      <fieldset className=" w-1/2 px-3 border-cyan-700 rounded-tl-lg rounded-tr-lg rounded-md border-2">
        <legend className="text-white bg-cyan-600 border py-1 px-2 rounded-lg">
          Gender
        </legend>
        <br />
        <p>Please read the terms and agreements </p>
        <Radio type="checkbox" label="I have read all the terms" name="marry" />
        <Radio type="checkbox" label="Yes , I'm a gree" name="marry" />
      </fieldset>
      <footer className="w-1/2 flex items-center justify-between ">
        <button className="px-5 py-1 rounded-md hover:bg-stone-700 duration-300  bg-[#0e7490] text-white">
          Sign Up
        </button>
        <button className="px-5 py-1 rounded-md hover:bg-stone-700 duration-300  bg-[#d5a221] text-white">
          back
        </button>
      </footer>
    </form>
  );
};

export default page;
