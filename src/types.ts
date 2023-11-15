export type TrackingDetails = {
  provider: string;
  CurrentStatus: Status;
  PromisedDate: string;
  TrackingNumber: string;
  TrackingURL: string;
  SupportPhoneNumbers: string[];
  TransitEvents: Status[];
  CreateDate: string;
  isEditableShipment: boolean;
  nextWorkingDay: NextWorkingDay[];
};

export type Status = {
  state: string;
  timestamp: string;
  hub?: string;
  reason?: string;
};

export type NextWorkingDay = {
  dayDate: string;
  dayName: string;
};

export enum ShipmentStatus {
  TICKET_CREATED = "TICKET_CREATED",
  PACKAGE_RECEIVED = "PACKAGE_RECEIVED",
  IN_TRANSIT = "IN_TRANSIT",
  OUT_FOR_DELIVERY = "OUT_FOR_DELIVERY",
  WAITING_FOR_CUSTOMER_ACTION = "WAITING_FOR_CUSTOMER_ACTION",
  NOT_YET_SHIPPED = "NOT_YET_SHIPPED",
  DELIVERED_TO_SENDER = "DELIVERED_TO_SENDER",
  CANCELLED = "CANCELLED",
  DELIVERED = "DELIVERED",
}
