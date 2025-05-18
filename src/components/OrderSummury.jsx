import OrderSummuryCard from "./OrderSummuryCard";

const OrderSummury = ({ orders }) => {
  let orderSummuries = [
    {
      total: orders.length,
      title: "Total Order",
      color: "yellow",
    },
    {
      total: orders.filter((o) => o.status === "pending").length,
      title: "Pending",
      color: "red",
    },
    {
      total: orders.filter((o) => o.status === "delivered").length,
      title: "Delivered",
      color: "green",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {orderSummuries.map((orderSummury, index) => (
          <OrderSummuryCard
            key={index}
            title={orderSummury.title}
            total={orderSummury.total}
            color={orderSummury.color}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderSummury;
