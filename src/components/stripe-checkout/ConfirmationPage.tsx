import React, { useState, useEffect } from "react";
import sessionService from "../../services/sessionService/sessionservice";

import SuccessPage from "./SuccessPage";
import { useParams } from "react-router";

interface SessionStatus {
  status: string;
}

const ConfirmationPage = () => {
  const [sessionStatus, setSessionStatus] = useState<SessionStatus | null>(
    null
  );

  const { paymentId: sessionId } = useParams();
  console.log("payemtnetId", sessionId);

  useEffect(() => {
    const getSessionStatus = async () => {
      const status = await sessionService.getSessionStatus(sessionId);
      console.log("status", status);
      setSessionStatus(status);
    };
    getSessionStatus();
  }, [sessionId]);

  if (sessionStatus.status === "complete") {
    return <SuccessPage />;
  }

  if (sessionStatus.status === "open") {
    return <div>Betalning pågår fortfarande...</div>;
  }

  return <div>Betalning misslyckades eller avbröts.</div>;
};

export default ConfirmationPage;
