import { ImageSourcePropType } from "react-native";

export const localOrNetworkImage = (
  image: string | number
): ImageSourcePropType => {
  return typeof image === "number" ? image : { uri: image };
};

export const currencyWrapper = (value: number): string => {
  return `$ ${value}`;
};

export const statusColor = (
  status:
    | "PENDING"
    | "CONFIRMED"
    | "REJECTED"
    | "REFUNDED"
    | "TRANSIT"
    | "DELIVERED"
) => {
  switch (status) {
    case "PENDING":
      return { backgroundColor: "orange" };
    case "CONFIRMED":
      return { backgroundColor: "pink" };
    case "REJECTED":
      return { backgroundColor: "red" };
    case "REFUNDED":
      return { backgroundColor: "grey" };
    case "TRANSIT":
      return { backgroundColor: "blue" };
    case "DELIVERED":
      return { backgroundColor: "green" };
  }
};
