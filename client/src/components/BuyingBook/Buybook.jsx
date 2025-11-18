import { useState } from "react";
import axios from "axios";

const Buybook = () => {

  const [data, setData] = useState({
    bookname: "",
    customer: "",
    email: "",
    price: "",
    category: "",
    payment: "",
    date: "",
    quantity: "",
    book_id: ""
  });

  const handelChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log({ ...data, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/books/buy", data);
      console.log(res.data);
      alert("Purchase successful");
    } catch (error) {
      console.log(error);
      alert("Error in purchasing book");
    }
  };

  return (
    <div className="p-5 flex justify-center w-full">
      <div className="w-[350px] bg-white shadow-lg p-5 rounded-xl border border-gray-300">
        
        <section className="text-center mb-4">
          <p className="flex items-center justify-center gap-2 text-gray-700 font-medium">
            All fields are mandatory
            <span className="text-blue-500 text-xl">&#9824;</span>
          </p>
        </section>

        <form className="flex flex-col gap-3" onSubmit={handelSubmit}>

          {/* Book Name */}
          <div>
            <label className="font-semibold">Book Name</label>
            <input 
              className="border-2 border-gray-400 rounded-lg p-1 w-full"
              type="text"
              name="bookname"
              onChange={handelChange}
              autoComplete="off"
              required 
            />
          </div>

          {/* Book ID */}
          <div>
            <label className="font-semibold">Book ID</label>
            <input 
              className="border-2 border-gray-400 rounded-lg p-1 w-full"
              type="text"
              name="book_id"
              onChange={handelChange}
              autoComplete="off"
              required 
            />
          </div>

          {/* Customer Name */}
          <div>
            <label className="font-semibold">Customer Name</label>
            <input 
              className="border-2 border-gray-400 rounded-lg p-1 w-full"
              type="text"
              name="customer"
              onChange={handelChange}
              autoComplete="off"
              required 
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold">Customer Email</label>
            <input 
              className="border-2 border-gray-400 rounded-lg p-1 w-full"
              type="email"
              name="email"
              onChange={handelChange}
              autoComplete="off"
              required 
            />
          </div>

          {/* Date */}
          <div>
            <label className="font-semibold">Purchase Date</label>
            <input 
              className="border-2 border-gray-400 rounded-lg p-1 w-full"
              type="date"
              name="date"
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
              onChange={handelChange}
              autoComplete="off"
              required 
            />
          </div>

          {/* Category */}
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

          {/* Payment */}
          <div>
            <label className="font-semibold">Payment Mode</label>
            <select 
              className="border-2 border-gray-400 rounded-lg p-1 w-full"
              name="payment"
              onChange={handelChange}
              required
            >
              <option value="">Select Payment</option>
              <option value="cash">Cash</option>
              <option value="upi">UPI</option>
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label className="font-semibold">Quantity</label>
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
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
            type="submit"
          >
            Buy Book
          </button>

        </form>

      </div>
    </div>
  );
};

export default Buybook;
