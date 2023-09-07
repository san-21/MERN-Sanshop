import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import { useGetProductQuery } from "rtkQuery/productApiSlice";
import { useUpdateProductMutation } from "rtkQuery/productApiSlice";

import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  MenuItem,
  Checkbox,
  Select,
  ListItemText,
  Chip,
  FormGroup,
  Skeleton,
  FormControlLabel,
  Divider,
  Switch,
  IconButton,
  Button,
  Alert,
} from "@mui/material";

import { useDropzone } from "react-dropzone";

import { useCallback } from "react";
import { useTheme } from "@mui/material/styles";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";

import logo from "../../assets/dragdrop.avif";

import ListHeader from "pages/ListHeader";

import "/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { allColors } from "assets/data";
import { productSizes } from "assets/data";
import { ProductCategory } from "assets/data";
import { productTags } from "assets/data";
import EditProductSkeleton from "./skeleton/EditProductSkeleton";

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 3;
const MenuProps = {
  PaperProps: {
    style: {
      minHeight: 280,
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 230,
    },
  },
};
const genderType = ["Men", "Women", "Kids"];

////Quilll///////////

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

const EditProduct = () => {
  const theme = useTheme();
  const { id } = useParams();

  const { data, isSuccess, isError, isLoading, isFetching } =
    useGetProductQuery(id);
  const [updateProduct, { isLoading: isUpdating, isSuccess: isUpdateSuccess }] =
    useUpdateProductMutation();

  let selectedTag = [];
  let prodBrand,
    prodName,
    prodDesc,
    prodContent,
    prodImages = [],
    prodCode,
    prodSku,
    prodAmount,
    prodCategories = [],
    prodColors = [],
    prodSizes = [],
    prodTags = [],
    prodGender = [],
    prodSL,
    prodNL,
    prodRPrice,
    prodSPrice,
    prodTaxI,
    prodDiscount,
    prodTax,
    prodche,
    prodINLC,
    prodISLC;

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSnackbarOpen = () => {
    setOpenSnackbar(true);
  };
  const handleClose = () => {
    setOpenSnackbar(false);
  };
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [code, setCode] = useState("");
  const [sku, setSku] = useState("");
  const [amount, setAmount] = useState("");

  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [tags, setTags] = useState([]);
  const [gender, setGender] = useState([]);
  const [saleLabel, setSaleLabel] = useState("");
  const [newLabel, setNewLabel] = useState("");
  const [regularPrice, setRegularPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [isTaxIncludedInPrice, setIsTaxIncludedInPrice] = useState(prodTaxI);
  const [discount, setDiscount] = useState("");
  const [tax, setTax] = useState("");
  const [checked, setChecked] = useState(prodche);

  const [isSaleLabelChecked, setIsSaleLabelChecked] = useState(prodISLC);
  const [isNewLabelChecked, setIsNewLabelChecked] = useState(prodINLC);

  useEffect(() => {
    setBrand(prodBrand);
    setName(prodName);
    setDescription(prodDesc);
    setContent(prodContent);
    setImages(prodImages);
    setCode(prodCode);
    setSku(prodSku);
    setAmount(prodAmount);
    setCategories(prodCategories);
    setColors(prodColors);
    setSizes(prodSizes);
    setTags(prodTags);
    setGender(prodGender);
    setSaleLabel(prodSL);
    setNewLabel(prodNL);
    setRegularPrice(prodRPrice);
    setSalePrice(prodSPrice);
    setIsTaxIncludedInPrice(prodTaxI);
    setDiscount(prodDiscount);
    setTax(prodTax);
    setChecked(prodche);
    setIsNewLabelChecked(prodINLC);
    setIsSaleLabelChecked(prodISLC);
  }, [isSuccess]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    // console.log(checked);
  };
  const handleTaxIncludedInPrice = (event) => {
    setIsTaxIncludedInPrice(event.target.checked);
    console.log(isTaxIncludedInPrice);
  };
  ///////////////////////image Drag and Drop //////////////////////

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file, index) => {
      const reader = new FileReader();

      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: index, src: e.target.result },
        ]);
      };

      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  const {
    getRootProps,
    getInputProps,
    // acceptedFiles,
    open,
    // isDragAccept,
    // isFocused,
    // isDragReject,
  } = useDropzone({
    accept: "image/*",
    onDrop,
    noClick: true,
    noKeyboard: true,
  });

  const handleRemoveAll = () => {
    setImages([]);
  };

  const navigate = useNavigate();

  const handleColorChange = (event) => {
    const {
      target: { value },
    } = event;
    setColors(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleSizeChange = (event) => {
    const {
      target: { value },
    } = event;
    setSizes(typeof value === "string" ? value.split(",") : value);
  };

  const handleTagChange = (event) => {
    const {
      target: { value },
    } = event;
    setTags(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleGenderChange = (event) => {
    const {
      target: { value },
    } = event;
    setGender(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  ///////////////////////////Set Product State Locally /////////////

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };
  const handleDiscountChange = (event) => {
    setDiscount(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };
  const handleSkuChange = (event) => {
    setSku(event.target.value);
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategories(event.target.value);
  };

  const handleSaleLabelChange = (event) => {
    setSaleLabel(event.target.value);
  };
  const handleNewLabelChange = (event) => {
    setNewLabel(event.target.value);
  };
  const handleRegularPriceChange = (event) => {
    setRegularPrice(event.target.value);
  };
  const handleSalePriceChange = (event) => {
    setSalePrice(event.target.value);
  };
  const handleTaxChange = (event) => {
    setTax(event.target.value);
  };

  const handleIsNewLabelChecked = (event) => {
    setIsNewLabelChecked(event.target.isNewLabelChecked);
  };

  const handleIsSaleLabelChecked = (event) => {
    setIsSaleLabelChecked(event.target.isSaleLabelChecked);
  };

  const handleSelectedTag = () => {
    setTags(selectedTag);
  };

  ////////////////////////////////////////////////////////////////////////////////////
  const [imagess, setImagess] = useState([]);
  let imageUrl = [];
  let i = 0;
  const processResults = (error, result) => {
    if (!error && result && result.event === "success") {
      console.log(result);
      console.log(imageUrl);
      // var str = JSON.stringify(result.info.secure_url, null, 4);
      imageUrl[i] = result.info.secure_url;
      i++;

      // document.getElementById("uwdata").innerHTML += str;
    }
    // console.log(imageUrl);
    if (result.event === "queues-end") {
      setImages((prevImages) => [...prevImages, imageUrl]); //adding object to end of array
      imageUrl = [];
      i = 0;
      // console.log(imageUrl);
    }
  };

  var myCropWidget = cloudinary.createUploadWidget(
    {
      cloudName: process.env.REACT_APP_CLOUD_NAME,
      uploadPreset: process.env.REACT_APP_UPLOAD_PRESETS,
      folder: "product_images",
      // tags: "products",
      // publicId: "upload_product_image",
      // clientAllowedFormats: ["images"], //restrict uploading to image files only
      // theme: "purple", //change to a purple theme
      // cropping: true, //add a cropping step
      // showAdvancedOptions: true,  //add advanced options (public_id and tag)
      // sources: [ "local", "url"], // restrict the upload sources to URL and local files
      // multiple: true, //restrict upload to a single file
      // folder: "user_images", //upload files to the specified folder
      // tags: ["users", "profile"], //add the given tags to the uploaded files
      // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
      // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
      // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    },
    processResults
  );
  const handleEditUploadToCLoudinary = () => {
    myCropWidget.open();
  };

  useEffect(() => {
    if (isUpdateSuccess) {
      // setName("");
      // setDescription("");
      // setContent("");
      // setImages([]);
      // setCode("");
      // setSku("");
      // setAmount("");
      // setColors([]);
      // setCategories("");
      // setSizes([]);
      // setTags([]);
      // setGender([]);
      // setSaleLabel("");
      // setNewLabel("");
      // setRegularPrice("");
      // setSalePrice("");
      // setIsTaxIncludedInPrice(true);
      // setTax(0);
      // setChecked(false);

      navigate("/dashboard/product/products");
    }
  }, [isUpdateSuccess, navigate]);
  const canSubmit =
    [
      brand,
      name,
      description,
      content,
      images,
      code,

      amount,
      categories,
      colors,
      sizes,
      tags,
      gender,

      regularPrice,
    ].every(Boolean) && !isLoading;

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (canSubmit) {
      try {
        await updateProduct({
          _id: id,
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
        });
      } catch (error) {
        console.error("Failed to save the Product: ", error);
      }
    }
  };
  return (
    ///////////////////////////////////////////////////////////////////////////////////////////

    <Box
      borderRadius="10px"
      backgroundColor={
        isUpdating
          ? `${theme.palette.background[500]}`
          : `${theme.palette.background[100]}`
      }
      sx={{
        p: { xs: 1, sm: 4, md: 4 },
      }}
    >
      <div>
        {isSuccess &&
          data.map((item) => {
            prodBrand = item.brand;
            prodName = item.name;
            prodDesc = item.description;
            prodContent = item.content;
            prodImages = item.images;
            prodCode = item.code;
            prodSku = item.sku;
            prodAmount = item.amount;
            prodCategories = item.categories;
            prodColors = item.colors;
            prodSizes = item.sizes;
            prodTags = item.tags;
            prodGender = item.gender;

            prodSL = item.saleLabel;
            prodNL = item.newLabel;
            prodRPrice = item.regularPrice;
            prodSPrice = item.salePrice;
            prodTaxI = item.isTaxIncludedInPrice;
            prodDiscount = item.discount;
            prodTax = item.tax;
            prodche = item.checked;
            prodINLC = item.isNewLabelChecked;
            prodISLC = item.isSaleLabelChecked;
          })}
      </div>
      {/* top main box */}
      <ListHeader
        title={"Edit Product"}
        owner={"Product"}
        route={"managment"}
        role={"edit"}
      />
      {/* <EditProductSkeleton /> */}
      {/* Main contant box */}
      {isLoading && <EditProductSkeleton />}
      {isError && "Coonection error"}
      {isSuccess && (
        <form onSubmit={handleFormSubmit} id="main">
          {/* detail box */}
          <Box display="flex" justifyContent="space-between" alignItems="start">
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
              }}
              width="25%"
            >
              <Typography variant="h6" fontWeight="bold">
                Detail
              </Typography>
              <Typography
                sx={{
                  color: `${theme.palette.text[300]}`,
                }}
              >
                Title,short Description,image ....
              </Typography>
            </Box>
            {/* detail content box */}
            <Box
              backgroundColor={`${theme.palette.background[50]}`}
              sx={{
                height: "auto",
                width: { xs: "100%", sm: "100", md: "56%" },
                mr: { xs: 1, sm: 3, md: 10 },
                ml: { xs: 0 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                p: "24px",
                borderRadius: "20px",
                border: `1px solid ${theme.palette.text[100]}`,
                "& .MuiInputBase-root": {
                  borderRadius: "10px",
                },
              }}
            >
              <FormControl>
                <TextField
                  sx={{
                    mb: 2,
                  }}
                  required
                  id="brand"
                  name="brand"
                  value={brand}
                  onChange={handleBrandChange}
                  fullWidth
                  label="Brand"
                />
                <TextField
                  required
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  fullWidth
                  label="Product Name"
                />
                <TextField
                  required
                  id="description"
                  name="description"
                  value={description}
                  onChange={handleDescriptionChange}
                  fullWidth
                  margin="normal"
                  multiline
                  rows={5}
                  label="Sub Description"
                />
                <Typography fontWeight="bold" textAlign="left" mt={2} mb={1}>
                  Content
                </Typography>
                <Box
                  sx={{
                    height: "auto",
                  }}
                >
                  <ReactQuill
                    theme="snow"
                    onChange={setContent}
                    modules={modules}
                    value={content}
                  />
                </Box>
                <Typography fontWeight="bold" textAlign="left" mt={4}>
                  Images
                </Typography>
                {/* /////////////////////////// IMage Drop and Down Componentn/////////////////// */}

                <Box mt={3}>
                  <Box
                    onClick={handleEditUploadToCLoudinary}
                    sx={{
                      pt: 4,

                      backgroundColor: `${theme.palette.background[20]}`,
                    }}
                  >
                    <Box
                      sx={{
                        height: "250px",
                        pb: 4,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        alt="DopImage"
                        width="200px"
                        height="auto"
                        src={logo}
                      />
                      <Typography variant="h6" fontWeight="bold">
                        Select file and update product images
                      </Typography>
                      <Typography>
                        click{" "}
                        <span
                          style={{
                            color: `${theme.palette.primary[500]}`,
                            textTransform: "underline",
                          }}
                        >
                          {" "}
                        </span>{" "}
                      </Typography>
                    </Box>
                  </Box>
                  <Box mt={4}>
                    <Grid container columnGap={1} rowGap={2} direction="row">
                      {images.map((image, index) => (
                        <Grid
                          position="relative"
                          id={index}
                          sx={{
                            border: "1px solid red",
                            borderRadius: "10px",
                            border: `1px solid ${theme.palette.text[100]}`,
                            width: "70px",
                            height: "70px",
                            p: "3px",
                          }}
                          item
                          key={index}
                        >
                          <img
                            width="100%"
                            height="100%"
                            alt={image}
                            src={image}
                          />
                          <IconButton
                            sx={{
                              backgroundColor: `${theme.palette.primary[500]}`,
                              width: "17px",
                              height: "17px",
                              borderRadius: "4px",
                              "&:hover": {
                                backgroundColor: `${theme.palette.primary[100]}`,
                              },
                              position: "absolute",
                              top: "1px",
                              right: "1px",
                            }}
                            onClick={() =>
                              setImages(() => {
                                return images.filter((item) => item !== image);
                              })
                            }
                            size="small"
                          >
                            <CloseOutlinedIcon
                              sx={{
                                color: `${theme.palette.white[500]}`,
                                "&:hover": {
                                  color: `${theme.palette.text[500]}`,
                                },
                              }}
                            />
                          </IconButton>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                  <Box
                    mt={4}
                    display="flex"
                    alighitems="center"
                    justifyContent="flex-end"
                  >
                    <Button
                      onClick={handleEditUploadToCLoudinary}
                      sx={{
                        color: `${theme.palette.white[500]}`,
                        backgroundColor: `${theme.palette.primary[500]}`,
                        textTransform: "none",
                        fontWeight: "bold",
                        ml: 3,
                      }}
                      variant="contained"
                      size="small"
                      startIcon={<BackupOutlinedIcon />}
                    >
                      Upload
                    </Button>
                  </Box>
                </Box>

                {/* ///////////////////////////////End  ///////////////////////////////////////////// */}
                {/* <DragDropImage /> */}
              </FormControl>
            </Box>
          </Box>

          {/* Properties box */}

          <Box
            mt={5}
            display="flex"
            justifyContent="space-between"
            alignItems="start"
          >
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
              }}
              width="25%"
            >
              <Typography variant="h6" fontWeight="bold">
                Properties
              </Typography>
              <Typography
                sx={{
                  color: `${theme.palette.text[300]}`,
                }}
              >
                Additonal functions and attributes...
              </Typography>
            </Box>
            {/* property content box */}

            <Box
              // component="form"
              sx={{
                p: { xs: "10px", sm: "20px" },
                borderRadius: "20px",
                border: `1px solid ${theme.palette.text[100]}`,
                height: "auto",
                width: { xs: "95%", sm: "100%", md: "56%" },
                mr: { xs: 1, sm: 3, md: 10 },
                ml: { xs: 0 },
                "& .MuiTextField-root": {
                  // width: { xs: "35ch", sm: "44ch", md: "44ch" },
                },
                "& .MuiInputBase-root": {
                  borderRadius: "10px",
                  height: "50px",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <FormControl
                  sx={{
                    m: 1,

                    width: { xs: "90%", sm: "45%", md: "45%" },
                  }}
                >
                  <TextField
                    required
                    id="code"
                    name="code"
                    value={code}
                    onChange={handleCodeChange}
                    label="Product Code"
                  />
                </FormControl>
                <FormControl
                  sx={{ m: 1, width: { xs: "90%", sm: "45%", md: "45%" } }}
                >
                  <TextField
                    required
                    id="sku"
                    name="sku"
                    value={sku}
                    onChange={handleSkuChange}
                    label="Product SKu"
                  />
                </FormControl>
                <FormControl
                  sx={{ m: 1, width: { xs: "90%", sm: "45%", md: "45%" } }}
                >
                  <TextField
                    id="amount"
                    name="amount"
                    value={amount}
                    onChange={handleAmountChange}
                    label="Amount"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    placeholder="0"
                  />
                </FormControl>
                <FormControl
                  sx={{ m: 1, width: { xs: "90%", sm: "45%", md: "45%" } }}
                >
                  <TextField
                    id="categories"
                    name="categories"
                    value={categories}
                    onChange={handleCategoryChange}
                    select
                    label="Category"
                    defaultValue="Apparel"
                  >
                    {ProductCategory.map((category) =>
                      category.lists.map((item) => (
                        <MenuItem
                          key={item.value}
                          value={item.value}
                          sx={{
                            margin: 0,
                          }}
                        >
                          {item.name}
                        </MenuItem>
                      ))
                    )}
                  </TextField>
                </FormControl>
                {/* </FormControl> */}

                <FormControl
                  sx={{ m: 1, width: { xs: "90%", sm: "45%", md: "45%" } }}
                >
                  <InputLabel id="demo-multiple-checkbox-label">
                    Colors
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    name="colors"
                    id="colors"
                    multiple
                    value={colors}
                    onChange={handleColorChange}
                    input={<OutlinedInput label="Colors" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {allColors.map((color) => (
                      <MenuItem
                        dense
                        sx={{
                          height: "28px",
                          marginTop: "4px",
                          borderRadius: "6px",
                        }}
                        key={color}
                        value={color}
                      >
                        <Checkbox checked={colors.indexOf(color) > -1} />
                        <ListItemText primary={color} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {/* size */}

                <FormControl
                  sx={{ m: 1, width: { xs: "90%", sm: "45%", md: "45%" } }}
                >
                  <InputLabel id="demo-multiple-checkbox-label">
                    Sizes
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="sizes"
                    name="sizes"
                    multiple
                    value={sizes}
                    onChange={handleSizeChange}
                    input={<OutlinedInput label="Sizes" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {productSizes.map((eachSize) => (
                      <MenuItem
                        dense
                        sx={{
                          height: "28px",
                          marginTop: "4px",
                          borderRadius: "6px",
                        }}
                        key={eachSize}
                        value={eachSize}
                      >
                        <Checkbox checked={sizes.indexOf(eachSize) > -1} />
                        <ListItemText primary={eachSize} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              {/* Tag */}

              <FormControl
                fullWidth
                sx={{
                  m: 1,

                  width: { xs: "90%", sm: "94%", md: "92%" },
                }}
              >
                <InputLabel id="demo-multiple-chip-label">Tags</InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="tags"
                  name="tags"
                  multiple
                  sx={{
                    height: "auto",
                    pt: 2,
                    pb: 2,
                  }}
                  value={tags}
                  onChange={handleTagChange}
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="Tag"
                      placeholder="+ Tags"
                    />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip
                          sx={{
                            backgroundColor: `${theme.palette.secondary[100]}`,
                            "&:hover": {
                              backgroundColor: `${theme.palette.secondary[300]}`,
                            },
                          }}
                          size="small"
                          clickable
                          key={value}
                          label={value}
                          onDelete={() => {
                            selectedTag = productTags.filter(
                              (item) => item.value !== value
                            );
                            handleSelectedTag;
                          }}
                        />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {productTags.map((tag) => (
                    <MenuItem
                      key={tag.name}
                      value={tag.value}
                      // style={getStyles(tag, persontag, theme)}
                    >
                      {tag.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* gender>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

              <FormControl
                sx={{ m: 1, width: { xs: "90%", sm: "45%", md: "45%" } }}
              >
                <InputLabel id="demo-multiple-checkbox-label">
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  name="gender"
                  id="gender"
                  multiple
                  value={gender}
                  onChange={handleGenderChange}
                  input={<OutlinedInput label="Gender" />}
                  renderValue={(selected) => selected.join(", ")}
                  // MenuProps={MenuProps}
                >
                  {genderType.map((eachGender) => (
                    <MenuItem
                      dense
                      sx={{
                        height: "28px",
                        marginTop: "4px",
                        borderRadius: "6px",
                      }}
                      key={eachGender}
                      value={eachGender}
                    >
                      <Checkbox checked={gender.indexOf(eachGender) > -1} />
                      <ListItemText primary={eachGender} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Divider
                sx={{
                  mt: 3,
                }}
              />
              {/* sale label */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Switch
                  // checked={isSaleLabelChecked}
                  onChange={() => {
                    handleIsSaleLabelChecked;
                    if (isSaleLabelChecked) {
                      setIsSaleLabelChecked(false);
                    } else if (!isSaleLabelChecked) {
                      setIsSaleLabelChecked(true);
                    }
                  }}
                  value={isSaleLabelChecked}
                  inputProps={{ "aria-label": "Switch demo" }}
                />
                <FormControl
                  sx={{
                    m: 1,
                    flexGrow: 1,

                    width: { xs: "90%", sm: "45%", md: "45%" },
                  }}
                >
                  <TextField
                    id="saleLabel"
                    name="saleLabel"
                    value={saleLabel}
                    onChange={handleSaleLabelChange}
                    label="Sale Label"
                    disabled={isSaleLabelChecked}
                  />
                </FormControl>
              </Box>

              {/* new Label */}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 1,
                }}
              >
                <Switch
                  onChange={() => {
                    handleIsNewLabelChecked;
                    if (isNewLabelChecked) {
                      setIsNewLabelChecked(false);
                    } else if (!isNewLabelChecked) {
                      setIsNewLabelChecked(true);
                    }
                  }}
                  value={isNewLabelChecked}
                />
                <FormControl
                  sx={{
                    m: 1,
                    flexGrow: 1,

                    width: { xs: "90%", sm: "45%", md: "45%" },
                  }}
                >
                  <TextField
                    id="newLabel"
                    name="newLabel"
                    value={newLabel}
                    onChange={handleNewLabelChange}
                    label="New Label"
                    disabled={isNewLabelChecked}
                  />
                </FormControl>
              </Box>
            </Box>
          </Box>

          {/* propert end  */}

          {/* Pricing Start $$$$$$$$$$$$$$$$$$$$$$$$$**************** */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="start"
            mt={5}
          >
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
              }}
              width="25%"
            >
              <Typography variant="h6" fontWeight="bold">
                Price
              </Typography>
              <Typography
                sx={{
                  color: `${theme.palette.text[300]}`,
                }}
              >
                Price Related Input
              </Typography>
            </Box>
            {/* Price content box */}
            <Box
              backgroundColor={`${theme.palette.background[50]}`}
              sx={{
                alignItems: "center",
                pr: { xs: "25px", sm: "35px" },
                pt: { xs: "10px", sm: "20px" },
                pb: { xs: "10px", sm: "20px" },
                pl: { xs: "10px", sm: "20px" },
                borderRadius: "20px",
                border: `1px solid ${theme.palette.text[100]}`,
                height: "auto",
                width: { xs: "95%", sm: "100%", md: "56%" },
                mr: { xs: 1, sm: 3, md: 10 },
                ml: { xs: 0 },
                "& .MuiTextField-root": {
                  // width: { xs: "35ch", sm: "44ch", md: "44ch" },
                },
                "& .MuiInputBase-root": {
                  borderRadius: "10px",
                  height: "50px",
                },
              }}
            >
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Regular Price
                </InputLabel>
                <OutlinedInput
                  id="regularPrice"
                  name="regularPrice"
                  value={regularPrice}
                  onChange={handleRegularPriceChange}
                  type="number"
                  placeholder="0.00"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Regular Price"
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Sales Price
                </InputLabel>
                <OutlinedInput
                  id="salePrice"
                  name="salePrice"
                  value={salePrice}
                  onChange={handleSalePriceChange}
                  placeholder="0.00"
                  type="number"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Sales Price"
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Discount
                </InputLabel>
                <OutlinedInput
                  id="discount"
                  name="discount"
                  value={discount}
                  onChange={handleDiscountChange}
                  placeholder="0.00"
                  type="number"
                  startAdornment={
                    <InputAdornment position="start">%</InputAdornment>
                  }
                  label="Discount"
                />
              </FormControl>
              <FormGroup
                sx={{
                  m: 1,
                }}
              >
                <FormControlLabel
                  control={
                    <Switch
                      onChange={handleTaxIncludedInPrice}
                      checked={isTaxIncludedInPrice}
                    />
                  }
                  label={
                    isTaxIncludedInPrice
                      ? "Price Not includes Tax"
                      : "Price  includes Tax"
                  }
                />
              </FormGroup>
              {isTaxIncludedInPrice && (
                <FormControl fullWidth sx={{ m: 1 }}>
                  <TextField
                    id="tax"
                    name="tax"
                    value={tax}
                    onChange={handleTaxChange}
                    label="Tax (%)"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    placeholder="% 0.0"
                  />
                </FormControl>
              )}
            </Box>
          </Box>

          {/* action buttons */}

          <Box display="flex" justifyContent="space-between" alignItems="start">
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
              }}
              width="25%"
            ></Box>
            {/* detail content box */}
            <Box
              backgroundColor={`${theme.palette.background[50]}`}
              sx={{
                mt: 3,
                height: "auto",
                width: { xs: "100%", sm: "100", md: "56%" },
                mr: { xs: 1, sm: 3, md: 10 },
                ml: { xs: 0 },
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                p: "24px",
              }}
            >
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label="Publish"
                />
              </FormGroup>
              <Button
                onClick={(handleFormSubmit, handleSnackbarOpen)}
                type="submit"
                disabled={!canSubmit}
                sx={{
                  size: { xs: "small", sm: "large", md: "large" },
                  color: `${theme.palette.white[500]}`,
                  backgroundColor: `${theme.palette.primary[500]}`,
                  textTransform: "capitalize",
                  borderRadius: "10px",
                }}
                variant="contained"
              >
                Save Changes
              </Button>
            </Box>
          </Box>
        </form>
      )}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        sx={{ width: "300px" }}
      >
        <Alert
          sx={{
            backgroundColor: `${theme.palette.primary[100]}`,
          }}
        >
          Updating Product ...
        </Alert>
      </Snackbar>
    </Box>

    ////////////////////////////////////////////////////////////////////////////////////////////
  );
};

export default EditProduct;
