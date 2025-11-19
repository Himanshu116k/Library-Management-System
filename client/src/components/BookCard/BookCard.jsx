import React, { useState } from "react";
import axios from "axios";
const BookCard = ({ book}) => {
  // Local editable fields
  const [editName, setEditName] = useState(book.title);
  const [editPrice, setEditPrice] = useState(book.price);
  const [quantity, setquantity] = useState(book.quantity);


  const handelChange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
    console.log(data);
  }
  const handelSubmit = async(e)=>{
    e.preventDefault();
    try{
      const res = await axios.put(`http://localhost:8000/books/update/${book.id}`,{
      title:editName,
      price:editPrice,
      quantity:quantity
      }
      );
      console.log(res.data);
      alert("Book updated successfully");
      window.location.reload();

    }catch(error){
      alert("somting went wrong")
      console.log(error);
    }
  
   }

  return (
    <div className="w-[220px] bg-white shadow-md rounded-xl p-3 border border-gray-300">
      {/* Book Image */}
      <img
        src={
          book.cover ||
          "https://dummyimage.com/200x250/ccc/000.png&text=No+Image"
        }
        alt={book.title}
        className="w-full h-[150px] object-cover rounded-lg"
      />
      <form onSubmit={handelSubmit}>
        {/* Editable Book Name */}
        <input
          type="text"
          name="title"
          className="text-lg font-semibold mt-2 border px-1 rounded w-full"
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
          <button
          type="submit"
            className="px-2 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookCard;
