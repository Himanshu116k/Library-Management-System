import React from "react";

const DeleteBook = ({ book, onView, onUpdate, onDelete }) => {
  return (
    <div className="w-[220px] bg-white shadow-md rounded-xl p-3 border border-gray-300">

      {/* Book Image */}
      <img 
        src={book.cover || "https://dummyimage.com/200x250/ccc/000.png&text=No+Image"} 
        alt={book.title} 
        className="w-full h-[150px] object-cover rounded-lg"
      />

      {/* Book Info */}
      <h2 type="text" className="text-lg font-semibold mt-2" >{book.title}</h2>
      <p className="text-gray-600 text-sm">₹ {book.price}</p>

      {/* Buttons */}
      <div className="flex justify-between mt-3">
       

        <button 
          onClick={() => onDelete(book.id)}
          className="px-2 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>

    </div>
  );
};

export default DeleteBook;
