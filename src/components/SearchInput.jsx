import { useTranslation } from "react-i18next";
import React, { useContext } from "react";
import { ShipmentContext } from "../Context/ShipmentNumStore.js";

const SearchInput = () => {
  let { getShipmentNum } = useContext(ShipmentContext);

  const { t } = useTranslation();

  const handleClick = (e) => {
    e.preventDefault();
    getShipmentNum(e.target.trackingNumber.value);
  };

  return (
    <form onSubmit={handleClick} className="flex flex-row">
      <button
        type="submit"
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

      <input
        type="text"
        id="trackingNumber"
        className="relative border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 "
        placeholder={t("Tracking number")}
      />
    </form>
  );
};

export default SearchInput;
