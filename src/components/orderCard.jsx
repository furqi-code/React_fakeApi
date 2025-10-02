export function OrderCard({ ...order }) {
  return (
    <div
      className="max-w-md mx-auto my-4 p-6 border rounded-lg shadow-md bg-white"
      key={order.id}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">
          Order #{order.id}
        </h3>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            order.status === "Delivered"
              ? "bg-green-100 text-green-700"
              : order.status === "Pending"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {order.status}
        </span>
      </div>
      <div className="text-gray-700 space-y-2">
        <div>
          <span className="font-medium">User ID:</span> {order.userId}
        </div>
        <div>
          <span className="font-medium">Product ID:</span>{" "}
          {order.products[0].productId}
        </div>
        <div>
          <span className="font-medium">Quantity:</span>{" "}
          {order.products[0].quantity}
        </div>
        <div>
          <span className="font-medium">Total Amount:</span> ₹
          {order.totalAmount}
        </div>
        <div>
          <span className="font-medium">Order Date:</span> {order.orderDate}
        </div>
        <div>
          <span className="font-medium">Delivery Date:</span>{" "}
          {order.deliveryDate}
        </div>
      </div>
    </div>
  );
}
