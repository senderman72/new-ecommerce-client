import React, { useEffect, useState } from "react";
import {
  BookingParagraph,
  Heading,
  Paragraph,
  SuccessContainer,
  SuccessItemParagraph,
  SuccessOrderItem,
  SuccessTotalPrice,
  SucessOrderListContainer,
} from "../styled/styledCheckout/SuccessContainer";
import { StyledLink } from "../styled/styledProducts/ProductCards";

import { getOrderByPaymentId } from "../../services/orderService/getOrderByPaymentId";
import { IOrder } from "../../models/IOrder";

interface PaymentProps {
  paymentId: string;
}

const SuccessPage = ({ paymentId }: PaymentProps) => {
  const [order, setOrder] = useState<IOrder | null>();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!paymentId) {
        console.log("paymentId is undefined");
        return;
      }

      try {
        const data = await getOrderByPaymentId(paymentId);
        console.log("payementId:", data);
        setOrder(data);
        setLoading(false);
      } catch {
        console.log("Kunde inte hämta ordern.");
      }
    };

    const interval = setInterval(() => {
      fetchOrder();
    }, 3000);

    return () => clearInterval(interval);
  }, [paymentId]);

  if (loading) {
    return (
      <SuccessContainer>
        <Heading>Väntar på att bekräfta bokning... häng kvar...</Heading>
      </SuccessContainer>
    );
  }

  if (!order) {
    return (
      <SuccessContainer>
        <Heading>Kunde inte hitta någon order 😕</Heading>
        <Paragraph>Kontakta support om du tror detta är ett misstag.</Paragraph>
        <StyledLink to="/">Till startsidan</StyledLink>
      </SuccessContainer>
    );
  }

  return (
    <SuccessContainer>
      <Heading>Tack för din beställning! 🤩 </Heading>
      <BookingParagraph>Bokningsnummer: {order?.payment_id}</BookingParagraph>

      <Paragraph>
        Din betalning har gått igenom och din beställning är nu behandlad. ✅
      </Paragraph>
      <Paragraph>
        Du kommer att få en bekräftelse via e-post 📩 till{" "}
        {order?.customer_email} inom kort.
      </Paragraph>
      <Paragraph>Tack för att du handlar hos oss! 🥳</Paragraph>
      <Heading>Order Detaljer</Heading>
      <SucessOrderListContainer>
        {order?.order_items.map((item) => (
          <SuccessOrderItem key={item.id}>
            <SuccessItemParagraph>
              Produkt: {item.product_name}
            </SuccessItemParagraph>
            <SuccessItemParagraph>Antal: {item.quantity}</SuccessItemParagraph>
            <SuccessItemParagraph>
              Pris: {order?.total_price} kr
            </SuccessItemParagraph>
            📦
          </SuccessOrderItem>
        ))}
      </SucessOrderListContainer>

      <SuccessTotalPrice>
        Totalt pris: {order?.total_price} kr
      </SuccessTotalPrice>
      <StyledLink to="/">Tillbaka</StyledLink>
    </SuccessContainer>
  );
};

export default SuccessPage;
