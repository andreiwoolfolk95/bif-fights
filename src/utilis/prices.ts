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
    price: "$199.00 MXN",
    total: "199",
    subtotal: "167.16",
    iva: "31.84",
  },
  USD: {
    title: "PLAN BLACK",
    price: "$9.99 USD",
    total: "9.99",
    subtotal: "8.39",
    iva: "1.59",
  },
};
