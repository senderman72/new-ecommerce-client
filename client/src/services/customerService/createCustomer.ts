import { ICustomer } from "../../models/ICustomer";
import { create } from "../serviceBase";

export const createCustomer = async (customer: ICustomer): Promise<void> => {
  try {
    const response = await create(
      "https://new-ecom-api.vercel.app/customers",
      customer
    );

    console.log(response);
  } catch (error) {
    console.error("Error creating customer:", error);
    throw error;
  }
};
