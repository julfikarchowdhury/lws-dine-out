const SingleOrderReport = ({
  id,
  name,
  items,
  amount,
  status,
  onDelete,
  onDeliver,
}) => {
  let statusColor = status === "pending" ? "red" : "green";
  let statusText = status === "pending" ? "PENDING" : "DELIVERED";

  return (
    <tr className="border-t border-gray-700">
      <td className="py-3">{id}</td>
      <td className="py-3">{name}</td>
      <td className="py-3">{items}</td>
      <td className="py-3">{amount}</td>
      <td className="py-3">
        <span className={`text-${statusColor}-500`}>{statusText}</span>
      </td>
      <td className="py-3">
        {status === "pending" ? (
          <button
            onClick={onDelete}
            className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
          >
            Delete
          </button>
        ) : (
          ""
        )}
        <button
          onClick={onDeliver}
          className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
        >
          DELIVER
        </button>
      </td>
    </tr>
  );
};

export default SingleOrderReport;
