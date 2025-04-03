import { remove } from "../serviceBase";

export const deleteOrderItems = async (id: number) => {
  const success = await remove(
    `https://new-ecom-api.vercel.app/order-items/${id}`
  );

  if (success) {
    console.log("produkten har tagits bort!");
  } else {
    console.log("Misslyckades med att ta bort produkten");
  }
};
