import  BookService  from "../services/bookService.js";
import { uplodOnCloudnary } from "../../server/cloudnary.js";

const BookController = {
    addBook: async (req, res) => {
        try {
            const { title, author, quantity, price } = req.body;
            console.log(req.body);
            const avtarLocationPath = req.files?.BookCoverImage[0]?.path;

             const avatar = await uplodOnCloudnary(avtarLocationPath);
             if(!avatar) return res.status(500).json({error: "Image upload failed"});

             console.log("Cloudinary Avatar URL:", avatar.url);

            const result = await BookService.addBook({
                title,
                author,
                quantity,
                price,
                cover:avatar.url,
            });

            res.json({ success: true, id: result.insertId });
        } catch (err) {
            res.status(500).json({ error: "Server error" });
            console.log(err);
        }
    },

    updateQuantity: async (req, res) => {
        try {
            
            const { id,price,quantity } = req.body;
            console.log("Updating Book ID:", id, "with Price:", price, "and Quantity:", quantity);  

            await BookService.updateQuantity(id, price, quantity);


            res.json({ success: true, message: "Quantity updated" });
        } catch (err) {
            res.status(500).json({ error: "Server error" });
            console.log(err);
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
         const {user_name,user_email,book_id,quantity,Category,payment,purchase_date,book_price} = req.body;
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
            const {user_name,user_email,book_id,book_price,quantity,return_date} = req.body;
            const result=await BookService.returnBooks({user_name,user_email,book_id,book_price,quantity,return_date});
            return res.json({success:true,message:"Return processed",id:result.insertId});
        }catch(err){
            res.status(500).json({error:"Server error"});
            console.log(err);
        }
    }

    
};

export default BookController;
