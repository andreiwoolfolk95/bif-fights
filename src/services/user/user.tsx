import axios from "axios";

export default async function getPaymentMethods(id: string) {
  try {
    console.log(id);
    const response = await axios.get(`/api/pm/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
