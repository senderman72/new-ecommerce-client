export const getCustomerByEmail = async (email: string) => {
  try {
    const response = await fetch(
      `https://new-ecom-api.vercel.app/customers/email/${email}`
    );
    if (!response.ok) {
      return null;
    }
    const customer = await response.json();

    return customer;
  } catch (error) {
    console.error("Error fetching customer:", error);
    return null;
  }
};
