import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    brand: { type: String },
    name: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String },
    images: { type: Array },
    code: { type: String },
    sku: { type: String },
    amount: { type: Number },
    categories: { type: String },
    colors: { type: Array },
    sizes: { type: Array },
    tags: { type: Array },
    gender: { type: Array },
    saleLabel: { type: String },
    newLabel: { type: String },
    regularPrice: { type: Number },
    salePrice: { type: Number },
    isTaxIncludedInPrice: { type: Boolean, default: false },
    tax: { type: Number },
    discount: { type: Number },
    checked: { type: Boolean, default: false },
    isSaleLabelChecked: { type: Boolean },
    isNewLabelChecked: { type: Boolean },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
