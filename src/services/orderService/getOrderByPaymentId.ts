export const getOrderByPaymentId = async (paymentId: string) => {
  try {
    const response = await fetch(
      `https://new-ecom-api.vercel.app/orders/payment/${paymentId}`
    );

    if (!response.ok) {
      throw new Error(`Order not found: ${response.statusText}`);
    }

    const orderData = await response.json();
    return orderData;
  } catch (error) {
    console.error("Error fetching order data:", error);
    throw error;
  }
};
