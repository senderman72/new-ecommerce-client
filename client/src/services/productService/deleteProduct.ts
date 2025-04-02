import { remove } from "../serviceBase";

export const deleteProduct = async (id: number) => {
  const success = await remove(
    `https://new-ecom-api.vercel.app/products/${id}`
  );

  if (success) {
    console.log("Produkten har tagits bort!");
  } else {
    console.log("Misslyckades med att ta bort Produkten");
  }
};
