import Product from "../models/Product.js";

////////////////////////////// client side paginatiom /////////////////////////////////////////////////

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.find({ _id: id });
    res.status(200).json(product);
    console.log(product);
  } catch (error) {
    res.status(400).json("can not  fetch product");
  }
};
export const postProduct = async (req, res) => {
  const {
    brand,
    name,
    description,
    content,
    images,
    code,
    sku,
    amount,
    categories,
    colors,
    sizes,
    tags,
    gender,
    saleLabel,
    newLabel,
    regularPrice,
    salePrice,
    isTaxIncludedInPrice,
    discount,
    tax,
    checked,
  } = req.body;

  const productObject = {
    brand,
    name,
    description,
    content,
    images,
    code,
    sku,
    amount,
    categories,
    colors,
    sizes,
    tags,
    gender,
    saleLabel,
    newLabel,
    regularPrice,
    salePrice,
    discount,
    isTaxIncludedInPrice,
    tax,
    checked,
  };
  const product = await Product.create(productObject);
  if (product) {
    //created
    res.status(201).json({ message: `New product ${name} created` });
  } else {
    res.status(400).json({ message: "Invalid product data received" });
  }
};

export const updateProduct = async (req, res) => {
  const {
    _id,
    brand,
    name,
    description,
    content,
    images,
    code,
    sku,
    amount,
    categories,
    colors,
    sizes,
    tags,
    gender,
    saleLabel,
    newLabel,
    regularPrice,
    salePrice,
    isTaxIncludedInPrice,
    discount,
    tax,
    checked,
    isSaleLabelChecked,
    isNewLabelChecked,
  } = req.body;

  const product = await Product.findById(_id).exec();

  if (!product) {
    return res.status(400).json({ message: "Product Not Found" });
  }
  product.brand = brand;
  product.name = name;
  product.description = description;
  product.content = content;
  product.images = images;
  product.code = code;
  product.sku = sku;
  product.amount = amount;
  product.categories = categories;
  product.colors = colors;
  product.sizes = sizes;
  product.tags = tags;

  product.gender = gender;
  product.saleLabel = saleLabel;
  product.newLabel = newLabel;
  product.regularPrice = regularPrice;
  product.salePrice = salePrice;
  product.isTaxIncludedInPrice = isTaxIncludedInPrice;
  product.discount = discount;
  product.tax = tax;
  product.checked = checked;
  product.isSaleLabelChecked = isSaleLabelChecked;
  product.isNewLabelChecked = isNewLabelChecked;

  const updatedProduct = await product.save();
  res.status(200).json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.body;
  console.log(id);

  if (!id) {
    return res.status(400).json({ message: "Product ID required" });
  }

  const product = await Product.findById(id).exec();
  console.log(product);

  if (!product) {
    return res.status(400).json({ message: "Product not found" });
  }

  const result = await product.deleteOne();
  res.status(203).json(result);
};
