import { createContext, useState } from "react";

export let ShipmentContext = createContext("");

export default function ShipmentContextProvider({ children }) {
  const [shipment, setShipment] = useState("");

  function getShipmentNum(updated) {
    setShipment(updated);
  }

  return (
    <ShipmentContext.Provider value={{ shipment, getShipmentNum }}>
      {children}
    </ShipmentContext.Provider>
  );
}
