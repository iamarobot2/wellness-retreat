import BookModal from './BookModal';
export default function Retreat({ retreats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-4 font-satoshi">
      {retreats.map((retreat) => (
        <div
          key={retreat.id}
          className="bg-white hover:bg-cream hover:scale-105 transition-all ease-in-out duration-300 border-2 border-outline rounded-xl p-2 flex flex-col justify-between"
        >
          <img
            src={retreat.image}
            alt={retreat.title}
            className="w-full h-52 object-cover rounded-xl"
          />
          <h2 className="text-xl font-bold mt-2">{retreat.title}</h2>
          <p className="text-satoshi">{retreat.description}</p>
          <p className="text-gray-600">{new Date(retreat.date * 1000).toLocaleString()}</p>
          <p className="text-gray-600">{retreat.location}</p>
          <p className="text-gray-800 font-bold">${retreat.price}</p>
          <BookModal />
        </div>
      ))}
    </div>
  );
}
