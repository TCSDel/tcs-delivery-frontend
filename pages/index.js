import React from "react";
import { fetchOrders } from "../utils/api";

export default function Home({ orders }) {
  return (
    <div>
      <h1>TCS Delivery Admin Dashboard</h1>
      <ul>
        {orders.map((o) => (
          <li key={o.id}>{o.id} - {o.address}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const orders = await fetchOrders();
  return { props: { orders } };
}