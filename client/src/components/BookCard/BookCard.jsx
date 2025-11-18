import React, { useState } from "react";

const BookCard = ({ book, onView, onUpdate, onDelete }) => {
  
  // Local editable fields
  const [editName, setEditName] = useState(book.name);
  const [editPrice, setEditPrice] = useState(book.price);
  const [quantity, setquantity] = useState(book.quantity);

  return (
    <div className="w-[220px] bg-white shadow-md rounded-xl p-3 border border-gray-300">

      {/* Book Image */}
      <img 
        src={book.image || "https://dummyimage.com/200x250/ccc/000.png&text=No+Image"} 
        alt={book.name} 
        className="w-full h-[150px] object-cover rounded-lg"
      />

      {/* Editable Book Name */}
      <input 
        type="text"
        className="text-lg font-semibold mt-2 border px-1 rounded"
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
      />

      {/* Editable Price */}
      <input 
        type="number"
        className="text-gray-600 text-sm border px-1 rounded mt-1"
        value={editPrice}
        onChange={(e) => setEditPrice(e.target.value)}
      />
      <input 
        type="number"
        className="text-gray-600 text-sm border px-1 rounded mt-1"
        value={quantity}
        onChange={(e) => setquantity(e.target.value)}
      />

      {/* Buttons */}
      <div className="flex justify-between mt-3">
        {/* <button 
          onClick={() => onView(book)}
          className="px-2 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600"
        >
          View
        </button>

        <button 
          onClick={() => onUpdate(book._id, editName, editPrice)}
          className="px-2 py-1 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600"
        >
          Update
        </button>

        <button 
          onClick={() => onDelete(book._id)}
          className="px-2 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600"
        >
          Delete
        </button> */}
        <button 
          onClick={() => onView(book)}
          className="px-2 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </div>


    </div>
  );
};

export default BookCard;
