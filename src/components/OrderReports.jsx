import { useState } from "react";
import SingleOrderReport from "./SingleOrderReport";
import FilterIcon from "./svg-icons/FilterIcon";

const OrderReports = ({ orderLists, changeOrderState }) => {
  const [filter, setFilter] = useState("All");
  const deleteOrder = (id) => {
    changeOrderState((prev) => prev.filter((order) => order.id !== id));
  };

  const deliverOrder = (id) => {
    changeOrderState((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: "delivered" } : order
      )
    );
  };

  const filteredOrders =
    filter === "All"
      ? orderLists
      : orderLists.filter((order) => order.status === filter.toLowerCase());

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Order Reports</h2>

        <div className="flex gap-4 items-center">
          <FilterIcon />
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm"
          >
            <option>All</option>
            <option>Pending</option>
            <option>Delivered</option>
          </select>
        </div>
      </div>
      <div className="bg-cardbg rounded-lg p-4">
        <div className="reports-container">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm">
                <th className="pb-3 font-medium">ID</th>
                <th className="pb-3 font-medium">Customer Name</th>
                <th className="pb-3 font-medium">Items</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">
                    No Order Available!!
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order, index) => (
                  <SingleOrderReport
                    key={index}
                    id={order.id}
                    name={order.name}
                    items={order.items}
                    amount={order.amount}
                    status={order.status}
                    onDelete={() => deleteOrder(order.id)}
                    onDeliver={() => deliverOrder(order.id)}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderReports;
