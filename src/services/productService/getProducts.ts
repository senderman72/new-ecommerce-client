import { IProduct } from "../../models/IProducts";
import { get } from "../serviceBase";

export const getProducts = async () => {
  try {
    const data: IProduct[] = await get(
      "https://new-ecom-api.vercel.app/products"
    );

    return data;
  } catch (error) {
    console.log("Kunde inte hämta data:", error);
  }
};
