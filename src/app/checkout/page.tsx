import { useState } from "react";
import "./checkout.scss";
import PaymentComponent from "./components/CheckoutForm";

export default function CheckoutPage() {
  return (
    <div className="checkout-container">
      <div className="left">
        <PaymentComponent />
      </div>
    </div>
  );
}
