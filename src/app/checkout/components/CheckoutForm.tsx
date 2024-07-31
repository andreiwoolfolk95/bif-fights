"use client";

import { priceDetails } from "@/utilis/prices";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import InputMask from "react-input-mask";
import { useSession } from "next-auth/react";
declare let window: any;

export default function PaymentComponent() {
  const session = useSession();
  const [loading, setLoading] = useState(false);
  const [divisa, setDivisa] = useState("MXN");
  const [card, setCard] = useState<any>({
    name: "",
    number: "",
    cvc: "",
    date: "",
  });

  useEffect(() => {
    window.Conekta.setPublicKey("key_IzhjbwO2AH3ta0DjAGuxRMu");
  }, []);

  const { title, price, total, subtotal, iva } =
    priceDetails[divisa ? divisa : "NO ENCONTRADO"] || {};

  const handlePayment = (e: any) => {
    e.preventDefault();
    setLoading(true);
    let tempCard = {
      card: {
        number: card.number.replaceAll(" ", ""),
        name: card.name,
        exp_month: card.date.substring(0, 2),
        exp_year: card.date.substring(3, 5),
        cvc: card.cvc,
      },
    };
    window.Conekta.Token.create(
      tempCard,
      conektaSuccessResponseHandler,
      conektaErrorResponseHandler,
      "web"
    );
  };

  const conektaSuccessResponseHandler = (token: any) => {
    let tokenId = token.id;
    console.log(tokenId);
  };
  const conektaErrorResponseHandler = (response: any) => {
    toast.error("Revise los datos de su tarjeta");
    setLoading(false);
  };

  return (
    <div className="event-container mt-3">
      <div className="event">
        <p>Pagar evento</p>
        <h2>{price}</h2>
        <p>World kick boxing council</p>
        <div className="info mb-3">
          <div className="top">
            <p>Pago de una sola exhibición</p>
            <p>{price}</p>
          </div>
          <div className="bottom">
            <p
              onClick={() => {
                setDivisa(divisa === "MXN" ? "USD" : "MXN");
              }}
            >
              Cambiar divisa a {divisa === "MXN" ? "usd" : "mxn"}
            </p>
          </div>
        </div>
        <div className="price-container">
          <h3>Subtotal</h3>
          <p>${subtotal}</p>
        </div>
        <div className="line"></div>
        <div className="price-container">
          <h3>Iva</h3>
          <p>${iva}</p>
        </div>
        <div className="line"></div>
        <div className="price-container">
          <h3>Total</h3>
          <p>${total}</p>
        </div>
        <p className="mt-5">©BifFights 2024. Todos los derechos reservados</p>
      </div>
      <form>
        <div className="input-container">
          <label htmlFor="">Nombre en la tarjeta</label>
          <input
            type="text"
            placeholder="ejemplo"
            value={card.name}
            onChange={(e) => {
              setCard({ ...card, name: e.target.value });
            }}
          />
        </div>
        <div className="input-container-custom">
          <label htmlFor="">Detalles de la tarjeta</label>
          <InputMask
            className="top"
            mask={
              card.number.startsWith("37")
                ? "9999 999999 99999"
                : "9999 9999 9999 9999"
            }
            maskChar={"*"}
            placeholder="∗∗∗∗ ∗∗∗∗ ∗∗∗∗ ∗∗∗∗"
            onChange={(e) => {
              setCard({ ...card, number: e.target.value });
            }}
          />
          <div className="bottom">
            <InputMask
              className="left"
              placeholder=" 12 / 28"
              mask="99/99"
              maskChar={null}
              onChange={(e) => setCard({ ...card, date: e.target.value })}
            />
            <input
              className="right"
              type="password"
              placeholder="cvc"
              value={card.cvc}
              onChange={(e) => {
                setCard({ ...card, cvc: e.target.value });
              }}
            />
          </div>
        </div>
        <button type="submit" onClick={handlePayment}>
          Pagar
        </button>
      </form>
    </div>
  );
}
