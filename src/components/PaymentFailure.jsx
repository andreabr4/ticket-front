import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function PaymentFailure() {
  const { t } = useTranslation();
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
        <h1>{t("payment_failed")} ❌</h1>
        <p>{t("payment_failed_message")} </p>
      </div>

      <div>
        <Link to="/">{t("concerts_failure")}</Link>
      </div>
    </>
  );
}

export default PaymentFailure;
