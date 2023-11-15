import { useTranslation } from "react-i18next";
import React, { useState, useContext } from "react";
import { ShipmentContext } from "../Context/ShipmentNumStore.js";

const SearchInput = () => {
  // const [inputText, setInputText] = useState('')
  const [valueIntered, setValueIntered] = useState("");
  const [updated, setUpdated] = useState(valueIntered);

  let { getShipmentNum } = useContext(ShipmentContext);

  const { t } = useTranslation();

  const handleClick = (e) => {
    e.preventDefault();

    // setValueIntered(e.target.trackingNumber.value)
    // console.log(e.target.trackingNumber.value)
    // setUpdated(valueIntered)
    // getShipmentNum(e.target.trackingNumber.value)

    getShipmentNum(e.target.trackingNumber.value);
    // console.log("click" + updated)
  };

  // const handleChange = (e) => {
  //   // Store the input value to local state
  //   setValueIntered(e.target.value)
  //   console.log(e.target.value)
  // };

  return (
    <form onSubmit={handleClick} className="flex flex-row">
      <button
        type="submit"
        // onClick={handleClick}
        className="input-group-text flex items-center whitespace-nowrap  px-3 py-1.5 text-center text-base font-normal dark:text-neutral-200 bg-red-600"
        id="basic-addon2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {/* <div className="relative"> */}
      <input
        // onChange={handleChange}
        type="text"
        id="trackingNumber"
        className="relative border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 "
        placeholder={t("Tracking number")}
      />
      {/* </div> */}
    </form>
  );
};

export default SearchInput;
