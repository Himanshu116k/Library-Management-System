import  BookService  from "../services/bookService.js";
import { uplodOnCloudnary } from "../../server/cloudnary.js";


const BookController = {
    addBook: async (req, res) => {
        try {
            const { bookName, author, quantity, price, category } = req.body;

const avatarPath = req.files?.BookCoverImage?.[0]?.path;
if (!avatarPath) return res.status(400).json({ error: "Image missing" });

const uploaded = await uplodOnCloudnary(avatarPath);

const result = await BookService.addBook({
  title: bookName,
  author,
  quantity,
  price,
  category,
  cover: uploaded.url
});

            res.json({ success: true, id: result.insertId });
        } catch (err) {
            res.status(500).json({ error: "Server error" });
            console.log(err);
        }
    },

    updateQuantity: async (req, res) => {
  try {
    const { price, quantity, title } = req.body;
    const id = req.params.id;

    const result = await BookService.updateQuantity(id, price, quantity, title);

    res.json({ success: true, message: "Book updated", result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
},

deleteBook: async (req, res) => {
        try {
            const { id } = req.params;

            await BookService.deleteBook(id);

            res.json({ success: true, message: "Book deleted" });
        } catch (err) {
            res.status(500).json({ error: "Server error" });
            console.log(err);
        }
    },

    getBooks: async (req, res) => {
        try {
            const books = await BookService.listBooks();
            res.json({ success: true, books });
        } catch (err) {
            res.status(500).json({ error: "Server error" });
            console.log(err);
        }
    },
    buyBook:async (req,res)=>{
        try{
         const {customer: user_name,email: user_email,book_id,quantity,Category,payment,date:purchase_date,price:book_price} = req.body;
         const result=await BookService.buyBook({user_name,user_email,book_id,quantity,Category,payment,purchase_date,book_price});
        return  res.json({success:true,message:"Purchase successful",id:result.insertId});

        }
        catch(err){
            res.status(500).json({error:"Server error"});
            console.log(err);
        }
    },
    returnBooks:async(req,res)=>{
        try{
            console.log(req.body)
            const { customer: user_name,
    email: user_email,
    price: book_price,
    quantity,
    book_id,
    date: return_date} = req.body;
            const result=await BookService.returnBooks({user_name,user_email,book_id,book_price,quantity,return_date});
            return res.json({success:true,message:"Return processed",id:result.insertId});
        }catch(err){
            res.status(500).json({error:"Server error"});
            console.log(err);
        }
    }

    
};

export default BookController;
