const Return=()=>{

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
        <form className="flex flex-col gap-3">
          
          {/* Book Name */}
          <div>
            <label className="font-semibold">Book Name</label>
            <input 
              className="border-2 border-gray-400 rounded-lg p-1 w-full" 
              type="text" 
              name="bookName" 
              autoComplete="off" 
              required 
            />
          </div>
          <div>
            <label className="font-semibold">Customer Name</label>
            <input 
              className="border-2 border-gray-400 rounded-lg p-1 w-full" 
              type="text" 
              name="Customer" 
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
              name="quantity" 
              autoComplete="off" 
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
              autoComplete="off" 
              required 
            />
          </div>

          {/* Submit Button */}
          <button 
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