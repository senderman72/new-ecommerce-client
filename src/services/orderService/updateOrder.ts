import { IOrder, OrderStatusUpdate } from "../../models/IOrder";
import { update } from "../serviceBase";

export const updateOrder = async (
  id: number,
  updatedOrder: OrderStatusUpdate
): Promise<IOrder> => {
  try {
    const response = await update(
      `https://new-ecom-api.vercel.app/orders/${id}`,
      updatedOrder
    );

    const data: IOrder = await response.json();
    console.log("Order updated successfully:", data);
    return data;
  } catch (error) {
    console.error("Error in updateOrder:", error);
    throw error;
  }
};
