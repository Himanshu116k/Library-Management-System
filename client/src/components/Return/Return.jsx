import { useState,useEffect } from "react";
import axios from "axios";


const Return=()=>{


  const [data, setdata] = useState({
  bookname: "",
  customer: "",
  email: "",
  price: "",
  category: "",
  date: "",
  quantity: "",
  book_id:""
});

const handelChange=(e)=>{
  
  setdata({...data,[e.target.name]:e.target.value});
  console.log(data);

}


const handelSubmit=async(e)=>{
  e.preventDefault();

  try {
    const res=await axios.post("http://localhost:8000/books/returnbooks",data);
    console.log(res.data);
    alert("Book returned successfully");
  } catch (error) {
    console.log(error);
    alert("Error in returning book");
    console.log(error)
  }

}

    return(

        <>
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
              name="bookname" 
              autoComplete="off" 
              onChange={handelChange}
              className="border-2 border-gray-400 rounded-lg p-1 w-full" 
              type="text" 
             
              required 
            />
          </div>
          <div>
            <label className="font-semibold">Customer Name</label>
            <input 
            name="customer"
              onChange={handelChange}
              className="border-2 border-gray-400 rounded-lg p-1 w-full" 
              type="text" 
              autoComplete="off" 
              required 
            />
          </div>
          <div>
            <label className="font-semibold">Book id</label>
            <input 
            name="book_id"
              onChange={handelChange}
              className="border-2 border-gray-400 rounded-lg p-1 w-full" 
              type="text" 
              autoComplete="off" 
              required 
            />
          </div>
          <div>
            <label className="font-semibold">Customer email</label>
            <input 
            
              className="border-2 border-gray-400 rounded-lg p-1 w-full" 
              type="text" 
              name="email" 
              onChange={handelChange}
              autoComplete="off" 
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
              onChange={handelChange}
              autoComplete="off" 
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
              autoComplete="off"
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
          <div>
            <label className="font-semibold">Date</label>
            <input 
              className="border-2 border-gray-400 rounded-lg p-1 w-full" 
              type="date"
              name="date" 
              autoComplete="off"
              onChange={handelChange} 
              required 
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="font-semibold">Total Quantity</label>
            <input 
              className="border-2 border-gray-400 rounded-lg p-1 w-full" 
              type="number"
              name="quantity" 
              onChange={handelChange}
              autoComplete="off" 
              required 
            />
          </div>

          {/* Submit Button */}
          <button 
          type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Book
          </button>

        </form>

      </div>
    </div>
        </>
    )
}

export default Return;