const getShipmentTrackingDetails = async (trackingNumber: string) => {
  try {
    const response = await fetch(
      `https://tracking.bosta.co/shipments/track/${trackingNumber}`,{headers:{"Accept-Language":'ar-eg'}}
    );
    const data = await response.json();
    return await data;
  } catch (ex) {
    console.log("[[][]] Fetch Error:", ex);
    return "Error";
  }
};

export { getShipmentTrackingDetails };
