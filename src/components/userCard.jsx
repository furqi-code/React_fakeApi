export function UserCard({ ...user }) {
  return (
    <div className="max-w-md mx-auto p-6 border-2 border-yellow-400 rounded-lg bg-gradient-to-br from-yellow-100 to-yellow-300 shadow-md hover:shadow-lg transition-shadow duration-300" key={user.id}>
      <h3 className="text-xl font-bold text-yellow-900 mb-3">{user.name}</h3>
      <div className="space-y-1 text-yellow-800">
        <p><span className="font-semibold">User ID:</span> {user.id}</p>
        <p><span className="font-semibold">Username:</span> {user.username}</p>
        <p><span className="font-semibold">Email:</span> <a href={`mailto:${user.email}`} className="hover:underline text-yellow-900">{user.email}</a></p>
        <p><span className="font-semibold">Phone:</span> {user.phone}</p>
        <p><span className="font-semibold">Website:</span> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-yellow-900">{user.website}</a></p>
      </div>
      <div className="mt-4 p-4 bg-yellow-200 rounded-md border border-yellow-300">
        <h4 className="font-semibold text-yellow-800 mb-2">Address</h4>
        <p><span className="font-semibold">City:</span> {user.address.city}</p>
        <p><span className="font-semibold">Zipcode:</span> {user.address.zipcode}</p>
        <p><span className="font-semibold">Latitude:</span> {user.address.geo.lat}</p>
        <p><span className="font-semibold">Longitude:</span> {user.address.geo.lng}</p>
      </div>
    </div>
  );
}
