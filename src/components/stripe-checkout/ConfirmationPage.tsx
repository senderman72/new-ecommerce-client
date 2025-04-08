import SuccessPage from "./SuccessPage";
import { useParams } from "react-router";

const ConfirmationPage = () => {
  const { paymentId } = useParams();

  // Skickar paymentId direkt som prop till SuccessPage
  return <SuccessPage paymentId={paymentId as string} />;
};

export default ConfirmationPage;
