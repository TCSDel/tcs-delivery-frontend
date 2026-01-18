import { useEffect, useState } from "react";

export default function Home() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://https://tcs-delivery-backend-1.onrender.com")
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>TCS Delivery – Orders</h1>

      {orders.length === 0 && <p>No orders yet</p>}

      {orders.map((order, i) => (
        <div key={i} style={{ border: "1px solid #ccc", marginBottom: 10, padding: 10 }}>
          <strong>{order.name}</strong><br />
          {order.address}<br />
          Neighborhood: {order.neighborhood}
        </div>
      ))}
    </div>
  );
}
