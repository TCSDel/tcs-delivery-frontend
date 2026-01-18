export default function OrderList({ orders }) {
  return (
    <ul>
      {orders.map((o) => <li key={o.id}>{o.id} - {o.address}</li>)}
    </ul>
  );
}