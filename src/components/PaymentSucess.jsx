import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function PaymentSuccess() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const delayNavigate = async () => {
      await delay(4000);
      navigate('/');
    };

    delayNavigate();
  }, [navigate]); 

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  return (
    <div  style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{t("payment_success")} ✅</h1>
      <p>{t("payment_success_message")}</p>
    </div>
  );
}

export default PaymentSuccess;