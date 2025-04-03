import { IOrder } from "../../models/IOrder";
import { get } from "../serviceBase";

export const getOrders = async () => {
  try {
    const data: IOrder[] = await get("https://new-ecom-api.vercel.app/orders");

    return data;
  } catch (error) {
    console.log("Kunde inte hämta data:", error);
  }
};
