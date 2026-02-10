import React from "react";

const ViewBook = ({ book }) => {
  console.log(book);
  return (
    <div className="w-[220px] bg-white shadow-md rounded-xl p-3 border border-gray-300">

      {/* Book Image */}
      <img 
        src={book.cover || "https://dummyimage.com/200x250/ccc/000.png&text=No+Image"} 
        alt={book.title} 
        className="w-full h-[150px] object-cover rounded-lg"
      />
      <p>Name:-{book.title}</p>
      <p>Author:-{book.author}</p>
      <p><strong>ID:-{book.id}</strong></p>
      <p>Quantity:-{book.quantity}</p>

      {/* Book Info */}
      <p className="text-gray-600 text-sm">₹ {book.price}</p>

   

    </div>
  );
};

export default ViewBook;
