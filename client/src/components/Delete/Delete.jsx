import React, { useEffect, useState } from "react";
import DeleteBook from "../BookCard/DeleteBook";
import axios from "axios";

const Delete = () => {
  const [books, setBooks] = useState([]);

  // Fetch Books from Backend
  const loadBooks = async () => {
    const res = await axios.get(`http://localhost:8000/books/all`);
    setBooks(res.data.books);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  // Button Logic
  const handleView = (book) => {
    alert("Viewing: " + book.name);
  };

  const handleUpdate = (book) => {
    alert("Delete feature coming! Book ID: " + book._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/books/delete/${id}`);
    loadBooks();
  };

  return (
    <div className="mt-10 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {books.map((b) => (
        <DeleteBook 
          key={b.id} 
          book={b} 
          onView={handleView}
          onUpdate={handleUpdate} 
          onDelete={handleDelete} 
        />
      ))}
    </div>
  );
};

export default Delete;




// import React, { useEffect, useState } from "react";

// import DeleteBook from "../BookCard/DeleteBook";

// const Delete = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     // Instead of API:
//     setBooks(dummyBooks);
//   }, []);

//   const handleView = (book) => {
//     alert("Viewing: " + book.name);
//   };

//   const handleUpdate = (book) => {
//     alert("Delete feature coming! Book ID: " + book._id);
//   };

//   const handleDelete = async (id) => {
//     // Fake delete for test:
//     setBooks((prev) => prev.filter((b) => b._id !== id));
//   };

//   return (
//     <div className="mt-10 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//       {books.map((b) => (
//         <DeleteBook 
//           key={b._id} 
//           book={b} 
//           onView={handleView}
//           onUpdate={handleUpdate} 
//           onDelete={handleDelete} 
//         />
//       ))}
//     </div>
//   );
// };

// // dummy book data
// const dummyBooks = [
//   {
//     _id: "1",
//     name: "The Great Gatsby",
//     price: 350,
//     image: "https://images.unsplash.com/photo-1544936207-40355fb32056?w=400"
//   },
//   {
//     _id: "2",
//     name: "Atomic Habits",
//     price: 499,
//     image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400"
//   },
//   {
//     _id: "3",
//     name: "Harry Potter",
//     price: 799,
//     image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400"
//   },
//   {
//     _id: "4",
//     name: "Rich Dad Poor Dad",
//     price: 299,
//     image: "https://images.unsplash.com/photo-1563201515-adbe35c669c5?w=400"
//   },
//   {
//     _id: "5",
//     name: "Deep Work",
//     price: 450,
//     image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400"
//   }
// ];

// export default Delete;
