import { useState,useEffect } from "react";
import axios from "axios";
const AddBook = () => {
  const [data, setdata] = useState({
    bookName: "",
    price: "",
    author: "",
    category: "",
    quantity: "",
    BookCoverImage:""
  })

  

  const handelChange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value});
    console.log(data);
  }



const handelSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("bookName", data.bookName);
  formData.append("price", data.price);
  formData.append("author", data.author);
  formData.append("category", data.category);
  formData.append("quantity", data.quantity);
  formData.append("BookCoverImage", data.BookCoverImage);

  try {
    const res = await axios.post("http://localhost:8000/books/add", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    alert("Book added successfully");
  } catch (error) {
    console.log(error);
  }
};


  return (
    <div className="p-5 ] flex justify-center w-full">
      <div className="w-[350px] bg-white shadow-lg p-5 rounded-xl border border-gray-300">
        
        {/* Header */}
        <section className="text-center mb-4">
          <p className="flex items-center justify-center gap-2 text-gray-700 font-medium">
            All fields are mandatory 
            <span className="text-blue-500 text-xl">&#9824;</span>
          </p>
        </section>

        {/* Form */}
        <form className="flex flex-col gap-3" onSubmit={handelSubmit}>
          
          {/* Book Name */}
          <div>
            <label className="font-semibold">Book Name</label>
            <input 
              className="border-2 border-gray-400 rounded-lg p-1 w-full" 
              type="text" 
              name="bookName" 
              autoComplete="off" 
              onChange={handelChange}
              required 
            />
          </div>

          {/* Price */}
          <div>
            <label className="font-semibold">Book Price (₹)</label>
            <input 
              className="border-2 border-gray-400 rounded-lg p-1 w-full" 
              type="number"
              name="price" 
              autoComplete="off" 
              onChange={handelChange}
              required 
            />
          </div>

          {/* Author Name */}
          <div>
            <label className="font-semibold">Author Name</label>
            <input 
              className="border-2 border-gray-400 rounded-lg p-1 w-full" 
              type="text"
              name="author" 
              autoComplete="off" 
              onChange={handelChange}
              required 
            />
          </div>

          {/* Book Category */}
          <div>
            <label className="font-semibold">Category</label>
            <select 
              className="border-2 border-gray-400 rounded-lg p-1 w-full"
              name="category"
              onChange={handelChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Fiction">Fiction</option>
              <option value="Education">Education</option>
              <option value="Technology">Technology</option>
              <option value="Biography">Biography</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label className="font-semibold">Total Quantity</label>
            <input 
              className="border-2 border-gray-400 rounded-lg p-1 w-full" 
              type="number"
              name="quantity" 
              autoComplete="off" 
              onChange={handelChange}
              required 
            />
          </div>
          <div>
            <label className="font-semibold">upload cover image</label>
            <input 
              className="border-2 border-gray-400 rounded-lg p-1 w-full" 
              type="file"
              name="BookCoverImage"
onChange={(e)=> setdata({...data, BookCoverImage: e.target.files[0]})}              autoComplete="off" 
              required 
            />
          </div>

          {/* Submit Button */}
          <button 
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
           

            type="submit"
           >
            Add Book
          </button>

        </form>

      </div>
    </div>
  );
};

export default AddBook;
