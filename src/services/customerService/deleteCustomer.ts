import { remove } from "../serviceBase";

export const deleteCustomer = async (id: number) => {
  const success = await remove(
    `https://new-ecom-api.vercel.app/customers/${id}`
  );

  if (success) {
    console.log("Kunden har tagits bort!");
  } else {
    console.log("Misslyckades med att ta bort kunden.");
  }
};
