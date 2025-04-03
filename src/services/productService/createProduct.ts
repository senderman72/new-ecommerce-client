import { ProductCreate } from "../../models/IProducts";
import { create } from "../serviceBase";

export const createProduct = async (product: ProductCreate): Promise<void> => {
  try {
    const response = await create(
      "https://new-ecom-api.vercel.app/products",
      product
    );

    console.log(response);
  } catch (error) {
    console.error("Error creating customer:", error);
    throw error;
  }
};
