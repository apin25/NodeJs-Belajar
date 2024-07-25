import mongoose, { Schema, Document } from "mongoose";

interface Product extends Document {
  name: string;
  description: string;
  images: string[];
  price: number;
  qty: number;
  categoryId: mongoose.Schema.Types.ObjectId;
}

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    images: [{ type: String }],
    price: { type: Number, required: true },
    qty: { type: Number, required: true },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<Product>("Product", ProductSchema);
