export function PhotoCard({...photo}) {
  return (
    <div className="w-full p-6 border-2 border-blue-400 rounded-lg bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg hover:shadow-xl transition-shadow duration-300" key={photo.id}>
      <img 
        src={photo.thumbnailUrl} 
        alt={photo.title} 
        className="w-full h-48 object-cover rounded-md mb-4 border border-blue-300"
      />
      <h4 className="text-sm text-blue-700 font-semibold mb-1">Album Id: {photo.albumId}</h4>
      <h4 className="text-lg font-bold text-blue-900 mb-1">Photo Id: {photo.id}</h4>
      <h4 className="text-md text-blue-800 italic mb-2 truncate" title={photo.title}>Title: {photo.title}</h4>
      <a 
        href={photo.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:underline break-words"
      >
        View Image
      </a>
    </div>
  );
}
