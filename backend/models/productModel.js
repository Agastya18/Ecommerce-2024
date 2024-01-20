import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
    {
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
    },
    {
      timestamps: true,
    }
  );
const productSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    name: { type: String, required: true, unique: true },
     description: { type: String,required: true }, 
     price: { type: Number, required: true },
     rating: { type: Number, default:0 },
     images: [
        {
         
          url: {
            type: String,
            required: true,
            default: 'https://res.cloudinary.com/dxkufsejm/image/upload/v1620826396/sample.jpg'
          },
        },
      ],
    brand: { type: String, required: true },
    category: { type: String, required: true },
    shipping: { type: String, required: true },
   
    countInStock: { type: Number, default:0, required: true },
   
    numReviews: { type: Number,default:0 },
    reviews: [
       reviewSchema
    ],

},{timestamps:true});

const Product = mongoose.model('Product',productSchema);
export default Product;