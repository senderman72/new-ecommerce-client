import { IOrder } from "../../models/IOrder";

import { get } from "../serviceBase";

export const getOrder = async (id: number) => {
  try {
    const data: IOrder = await get(
      `https://new-ecom-api.vercel.app/orders/${id}`
    );
    return data;
  } catch (error) {
    console.log("Kunde inte hämta data:", error);
  }
};
