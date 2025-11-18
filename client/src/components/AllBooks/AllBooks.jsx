import React, { useEffect, useState } from "react";
import axios from "axios";
import ViewBook from "../BookCard/ViewBook"

const Update = () => {
  const [books, setBooks] = useState([]);

  // Fetch Books from Backend
  const loadBooks = async () => {
    const res = await axios.get("http://localhost:8000/books/all");
    setBooks(res.data.books);
    console.log(res.data.books)
  };

  useEffect(() => {
    loadBooks();
  }, []);

  // Button Logic
  const handleView = (book) => {
    alert("Viewing: " + book.name);
  };

  const handleUpdate = (book) => {
    alert("Update feature coming! Book ID: " + book._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/books/${id}`);
    loadBooks();
  };

  return (
    <div className="mt-10 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {books.map((b) => (
        <ViewBook 
          book={b} 
        />
      ))}
    </div>
  );
};

export default Update;

