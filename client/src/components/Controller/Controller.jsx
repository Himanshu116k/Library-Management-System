import { Link, Outlet } from "react-router-dom";
import Baranding from "../Home/Dashboard/Baranding";

const Controller = () => {
  return (
    <>
    <Baranding/>
    <div className="px-5 py-2 mt-[23vh] flex justify-around w-full items-center border-b-2 border-black">

      <main className="border-2 border-gray-500 hover:border-4 transition-all p-1.5 rounded-xl box-border w-[140px]">
        <Link to="/add-book" className="flex items-center gap-1.5 cursor-pointer">
          <img style={{ maxHeight: "25px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyJ79OA-YS33tqKHlK8qqLe4Jfl83znBlNvmBlMxjKqnhpXCzax1h3-Fw-CZ4-SimqVQ&usqp=CAU" alt="" />
          Add
        </Link>
      </main>

      <main className="border-2 border-gray-500 hover:border-4 transition-all p-1.5 rounded-xl box-border w-[140px]">
        <Link to="/buy-book" className="flex items-center gap-1.5 cursor-pointer">
          <img style={{ maxHeight: "25px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ0JQf8fQHQqPWoPFGtmTTdOz6C0BECpob_w&s" alt="" />
          Buy
        </Link>
      </main>

      <main className="border-2 border-gray-500 hover:border-4 transition-all p-1.5 rounded-xl box-border w-[140px]">
        <Link to="/return-book" className="flex items-center gap-1.5 cursor-pointer">
          <img style={{ maxHeight: "25px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GpPa5rYte7hOsi2XB_3LGXgX7XjgyW-Hag&s" alt="" />
          Return
        </Link>
      </main>

      <main className="border-2 border-gray-500 hover:border-4 transition-all p-1.5 rounded-xl box-border w-[140px]">
        <Link to="/update-book" className="flex items-center gap-1.5 cursor-pointer">
          <img style={{ maxHeight: "25px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRghdC0E9qF92kMMp8D59A--EJMK-CkwmvQCg&s" alt="" />
          Update
        </Link>
      </main>

      <main className="border-2 border-gray-500 hover:border-4 transition-all p-1.5 rounded-xl box-border w-[140px]">
        <Link to="/delete-book" className="flex items-center gap-1.5 cursor-pointer">
          <img style={{ maxHeight: "25px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlUi1UrWjWc7KUT8C3A-QbqoMCPmXXVbkBA&s" alt="" />
          Delete
        </Link>
      </main>

      <main className="border-2 border-gray-500 hover:border-4 transition-all p-1.5 rounded-xl box-border w-[140px]">
        <Link to="/all-books" className="flex items-center gap-1.5 cursor-pointer">
          <img style={{ maxHeight: "25px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiwj9cncFbB5J50IgcEMGnf2aoT0PEivywg&s" alt="" />
          All Books
        </Link>
      </main>

    </div>
     <Outlet/>
    </>
  );
};

export default Controller;
