import { IOrderItem } from "../../models/IOrderItem";

import { update } from "../serviceBase";

export const updateOrderItem = async (id: number, updatedOrder: IOrderItem) => {
  try {
    const response = await update(
      `https://new-ecom-api.vercel.app/order-items/${id}`,
      updatedOrder
    );

    const data = await response.json();
    console.log("Order updated successfully:", data);
    return data;
  } catch (error) {
    console.error("Error in updateOrder:", error);
    throw error;
  }
};
