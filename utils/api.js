import axios from "axios";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchOrders = async () => {
  const res = await axios.get(`${BACKEND_URL}/api/orders`);
  return res.data;
};