import { Route, Routes} from "react-router-dom";
import AddBook from "./components/AddingBooks/AddBook";
import Buybook from "./components/BuyingBook/Buybook";
import Controller from "./components/Controller/Controller";
import Return from "./components/Return/Return";
import Update from "./components/Update/Update";
import ViewBook from "./components/AllBooks/AllBooks";


import Delete from "./components/Delete/Delete"

const App =()=>{
  return(
  <>
      <Routes>
        <Route path="/" element={<Controller />}>
          <Route path="add-book" element={<AddBook />} />
          <Route path="buy-book" element={<Buybook />} />
          <Route path="return-book" element={<Return />} />
          <Route path="update-book" element={<Update />} />
          <Route path="delete-book" element={<Delete/>} />
          <Route path="all-books" element={<ViewBook/>} />
        </Route>
      </Routes>
    </>

  )
}

export default App;