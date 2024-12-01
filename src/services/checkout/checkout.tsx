import axios from "axios";

type TOrder = {
  customer_id: string;
  tokenId: string;
  amount: number;
  divisa: string;
};
export const paymentEvent = async (body: TOrder) => {
  console.log(body);

  const data = {
    customer_info: { customer_id: body.customer_id },
    pre_authorize: false,
    charges: [
      {
        payment_method: { type: "card", token_id: body.tokenId },
        amount: body.amount,
      },
    ],
    currency: body.divisa,
    line_items: [{ name: "evento", quantity: 1, unit_price: body.amount }],
  };
  try {
    const response = await axios.post(`https://api.conekta.io/orders`, data, {
      headers: {
        accept: "application/vnd.conekta-v2.1.0+json",
        "Accept-Language": "es",
        "content-type": "application/json",
        authorization: `Bearer ${process.env.NEXT_PUBLIC_CONEKTA_PRIVATE_KEY}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
