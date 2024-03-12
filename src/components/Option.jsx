import { category } from "@/pages/utils/lastDRecord";
import Modal from "./Modal";
import React, { useState } from "react";

export function Option() {
  const [valueD, setValueD] = useState("Choose");
  const [display, setDisplay] = useState("display");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleGetValueD = (valueD) => {
    setValueD(valueD);
    setDropdownVisible(false);
    console.log(dropdownVisible);
  };
  // function handleGetValueD (valueD) {
  //   setValueD(valueD);
  //   setDropdownVisible(false);
  //   console.log(dropdownVisible);
  // };
  return (
    // <select className="select select-bordered w-full  text-[#94A3B8] text-base font-normal not-italic bg-[#F9FAFB]">
    //   <option disabled selected className="">
    //     Choose
    //   </option>
    //   {category.map((e) => {
    //     return <option>{e.cateName}</option>;
    //   })}
    // </select>
    <div className="dropdown w-full   text-[#94A3B8] text-base font-normal not-italic bg-[#F9FAFB] overflow-auto-y">
      <div
        tabIndex={0}
        role="button"
        className="btn selected max-w-full w-full bg-[#F9FAFB] border-none text-center flex justify-start text-[#94A3B8] "
        onClick={() => setDropdownVisible(!dropdownVisible)}
      >
        <option className="text-[#000000]">{valueD}</option>
      </div>
      <ul
        tabIndex={0}
        className={`dropdown-content z-[1] menu p-0 rounded-box bg-[#FFFFFF] max-w-full w-full shadow-2xl  ${
          dropdownVisible ? "block" : "hidden"
        }`}
      >
        <li
          className="h-[450px] overflow-y-scroll "
          style={{ maxHeight: "180px" }}
        >
          {category.map((e) => {
            return (
              <a
                className="flex flex-col justify-center items-start text-[#000000]"
                onClick={() => {
                  handleGetValueD(`${e.cateName}`);
                }}
              >
                <div className="flex text-center gap-2 py-2 px-2 ">
                  <p>{e.logo}</p>
                  <p className="text-[#000000] py-0.5 text-base not-italic font-normal">
                    {e.cateName}
                  </p>
                </div>
              </a>
            );
          })}
        </li>
      </ul>
    </div>
  );
}

export function Option2() {
  return (
    <select className="select select-bordered border-none  max-w-xs w-[168px] text-[#0F172A] text-base font-normal not-italic bg-[#F9FAFB]">
      <option disabled selected>
        Oct 30, 2023
      </option>
      <option>Oct 29, 2023</option>
      <option>Oct 28, 2023</option>
    </select>
  );
}
export function Option3() {
  return (
    <select className="select select-bordered max-w-xs border-none w-[168px] text-[#0F172A]] text-base font-normal not-italic bg-[#F9FAFB]">
      <option disabled selected>
        4:15 PM
      </option>
      <option>3:32 PM</option>
      <option>9:23 AM</option>
    </select>
  );
}

export function Option4() {
  return (
    <select className="select select-bordered max-w-xs border-none w-full text-[#94A3B8] text-base font-normal not-italic bg-[#F9FAFB]">
      <option disabled selected>
        Write here
      </option>
      <option>Han Solo</option>
      <option>Greedo</option>
    </select>
  );
}
