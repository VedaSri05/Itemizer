// src/components/Card.js
import useStore from '../store'; // Import Zustand store

function Card({ id, title, description, image }) {
  const { removeCard } = useStore(); // Access the removeCard action

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <button 
        onClick={() => removeCard(id)} 
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
      >
        Remove Card
      </button>
    </div>
  );
}

export default Card;
