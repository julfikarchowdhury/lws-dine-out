import { useState } from "react";
import CreateForm from "./components/CreateForm";
import Nav from "./components/Nav";
import OrderReports from "./components/OrderReports";
import OrderSummury from "./components/OrderSummury";

function App() {
  const [orders, setOrders] = useState([]);

  return (
    <div className="container mx-auto px-4 h-screen flex flex-col">
      <Nav />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
        <CreateForm changeOrderState={setOrders} />

        <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
          <OrderSummury orders={orders} />

          <OrderReports orderLists={orders} changeOrderState={setOrders} />
        </div>
      </div>
    </div>
  );
}

export default App;
