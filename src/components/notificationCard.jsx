export function NotifyCard({ ...notification }) {
  return (
    <div
      key={notification.id}
      className="max-w-md mx-auto my-4 p-5 border rounded-lg shadow-sm bg-green-50"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-green-800">
          {notification.title}
        </h3>
        <span
          className={`px-2 py-1 text-xs rounded ${
            notification.read
              ? "bg-green-200 text-green-700"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {notification.read ? "Read" : "Unread"}
        </span>
      </div>
      <p className="text-gray-700 mb-2">{notification.message}</p>
      <div className="flex justify-between text-sm text-gray-600 mt-4">
        <span>
          <span className="font-medium">ID:</span> {notification.id}
        </span>
        <span>
          <span className="font-medium">Type:</span> {notification.type}
        </span>
      </div>
    </div>
  );
}
