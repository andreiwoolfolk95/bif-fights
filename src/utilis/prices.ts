export interface PriceDetails {
  title: string;
  price: string;
  total: string;
  subtotal: string;
  iva: string;
}
export const priceDetails: Record<string, PriceDetails> = {
  MXN: {
    title: "PLAN CLÁSICO",
    price: "$99.00 MXN",
    total: "99",
    subtotal: "83.16",
    iva: "15.48",
  },
  USD: {
    title: "PLAN BLACK",
    price: "$9.99 USD",
    total: "9.99",
    subtotal: "83.16",
    iva: "15.48",
  },
};
