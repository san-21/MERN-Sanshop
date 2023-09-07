import {
  Box,
  Button,
  Card,
  Chip,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import ReactQuill from "react-quill";

import { Carousel } from "react-carousel-minimal";

import PropTypes from "prop-types";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { Link, useParams } from "react-router-dom";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";

import { product } from "assets/data";
import { useGetProductsQuery } from "rtkQuery/productApiSlice";
import ProductDetailSkeleton from "./skeleton/ProductDetailSkeleton";

const PublishLightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[7],
    describeChild: true,
    borderRadius: "10px",
    width: "130px",
    height: "80px",
  },
}));

// ###################Tabs Function ###################################################

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// ######################Tabs Function End#################################################################

const ProductDetail = () => {
  const { id } = useParams();
  const { prod, isLoading, isSuccess } = useGetProductsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      prod: data?.find((prod) => prod._id === id),
    }),
  });

  const [images, setImages] = useState(prod?.images);

  ////// adding caption and image field yo current image////////////
  // javascript-add-key-value-pair-to-all-objects-in-array
  const modifiedImages = images.map((eachImage, index) => {
    return { ...eachImage, caption: index, image: eachImage };
  });
  /////////////////////////////////////////////////////////////////////

  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const [isPublishActive, setIsPublishActive] = useState(prod?.checked);

  ////////////////////Tab State///////////////////////////
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  ////////////Tab State End/////////////////////////////////
  const handlePublishClicked = () => {
    setIsPublishActive(true);
  };
  const handleDraftClicked = () => {
    setIsPublishActive(false);
  };

  const theme = useTheme();

  const Menu = () => {
    return (
      <Box>
        {!isPublishActive && (
          <Button
            sx={{
              textTransform: "capitalize",
              color: `${theme.palette.text[900]}`,
              fontWeight: 400,
              fontSize: "14px",
              width: "110px",
              height: "35px",
              borderRadius: "10px",
            }}
            onClick={handlePublishClicked}
            startIcon={<CloudUploadOutlinedIcon />}
          >
            Published
          </Button>
        )}

        {isPublishActive && (
          <Button
            sx={{
              textTransform: "capitalize",
              color: `${theme.palette.text[900]}`,
              fontWeight: 400,
              fontSize: "14px",
              width: "110px",
              height: "35px",
              borderRadius: "10px",
              backgroundColor: `${theme.palette.blue[100]}`,
            }}
            onClick={handlePublishClicked}
            startIcon={<CloudUploadOutlinedIcon />}
          >
            Published
          </Button>
        )}
        {isPublishActive && (
          <Button
            sx={{
              textAlign: "center",
              textTransform: "capitalize",
              color: `${theme.palette.text[900]}`,
              fontWeight: 400,
              fontSize: "14px",
              borderRadius: "10px",
              "&:hover": {
                // backgroundColor: `${theme.palette.primary[200]}`,
                border: "0px solid gray",
              },
            }}
            onClick={handleDraftClicked}
            startIcon={<InsertDriveFileOutlinedIcon />}
          >
            as Draft
          </Button>
        )}
        {!isPublishActive && (
          <Button
            sx={{
              textAlign: "center",
              textTransform: "capitalize",
              color: `${theme.palette.text[900]}`,
              fontWeight: 400,
              fontSize: "14px",
              borderRadius: "10px",
              backgroundColor: `${theme.palette.blue[100]}`,
              "&:hover": {
                // backgroundColor: `${theme.palette.primary[200]}`,
                border: "0px solid gray",
              },
            }}
            onClick={handleDraftClicked}
            startIcon={<InsertDriveFileOutlinedIcon />}
          >
            as Draft
          </Button>
        )}
      </Box>
    );
  };
  const Specification = () => {
    return (
      <Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "25%" },
          }}
          mt={2}
          display="flex"
          justifyContent="space-between"
        >
          <Typography>Category</Typography>
          <Typography>{prod?.categories}</Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "25%" },
          }}
          mt={2}
          display="flex"
          justifyContent="space-between"
        >
          <Typography>Code</Typography>
          <Typography>{prod?.code}</Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "25%" },
          }}
          mt={2}
          display="flex"
          justifyContent="space-between"
        >
          <Typography>Sku</Typography>
          <Typography>{prod?.sku}</Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "25%" },
          }}
          mt={2}
          display="flex"
          justifyContent="space-between"
        >
          <Typography>Created At</Typography>
          <Typography>{prod?.createdAt}</Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "25%" },
          }}
          mt={2}
        >
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "16px",
              mb: 2,
            }}
          >
            Product Detail
          </Typography>
          <Typography>Tags</Typography>
          <ul>
            {prod?.tags.map((tag, index) => (
              <Box key={index}>
                <li>{tag}</li>
              </Box>
            ))}
          </ul>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "25%" },
          }}
          mt={2}
        >
          <Typography>Gender</Typography>
          <ul>
            {prod?.gender.map((gender, index) => (
              <Box key={index}>
                <li>{gender}</li>
              </Box>
            ))}
          </ul>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "60%" },
          }}
          mt={2}
        >
          <Typography
            sx={{
              mb: 2,
            }}
          >
            Content
          </Typography>
          <ReactQuill readOnly="true" value={prod?.content} />
        </Box>
      </Box>
    );
  };

  ////////////////////////////////////////////
  const Price = () => {
    return (
      <Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "25%" },
          }}
          mt={2}
          display="flex"
          justifyContent="space-between"
        >
          <Typography>Current Price</Typography>
          <Typography>{prod?.regularPrice}</Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "25%" },
          }}
          mt={2}
          display="flex"
          justifyContent="space-between"
        >
          <Typography>Sale Price</Typography>
          <Typography>{prod?.salePrice}</Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "25%" },
          }}
          mt={2}
          display="flex"
          justifyContent="space-between"
        >
          <Typography>discount %</Typography>
          <Typography>
            {prod?.discount === 0 ? "No Discount" : `${prod?.discount} %`}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "25%" },
          }}
          mt={2}
          display="flex"
          justifyContent="space-between"
        >
          <Typography>Price Include Tax?</Typography>
          <Typography>
            {prod?.isTaxIncludedInPrice
              ? "Yes,Vat Included"
              : "No, Without Vat"}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "25%" },
          }}
          mt={2}
          display="flex"
          justifyContent="space-between"
        >
          <Typography>Tax %</Typography>
          <Typography>
            {prod?.tax !== 0 ? "Included" : "No Tax Added"}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "25%" },
          }}
          mt={2}
        >
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "16px",
              mb: 2,
            }}
          >
            Labeling
          </Typography>
          <Typography>Sale Label</Typography>
          <ul>
            <li>{prod?.saleLabel}</li>
          </ul>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "25%" },
          }}
          mt={2}
        >
          <Typography>New Label</Typography>
          <ul>
            <li>{prod?.newLabel}</li>
          </ul>
        </Box>
      </Box>
    );
  };

  ///////////////////Carousel style////////////////////

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    color: "black",
  };
  ////////////////////////////////////////////////////
  return (
    <Box
      sx={{
        // m: { xs: 1, sm: 2 },

        p: { xs: 1, sm: 1 },
      }}
    >
      {/* box1--navbarBox */}
      <Box
        id="navbarBox"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: `${theme.palette.white[400]}`,
          width: "100%",

          height: "80px",

          p: 2,
        }}
      >
        <Box flexGrow={1}>
          <Button
            LinkComponent={Link}
            to="/dashboard/product/products"
            sx={{
              // flexGrow: 1,
              textTransform: "capitalize",
              color: `${theme.palette.text[600]}`,
              fontWeight: 900,
              // fontSize: "14px",
            }}
            startIcon={<ChevronLeftOutlinedIcon />}
          >
            Back
          </Button>
        </Box>
        <IconButton
          LinkComponent={Link}
          to={`/dashboard/product/products/${id}`}
        >
          <EditIcon />
        </IconButton>
        <CssBaseline />
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <Box>
            <PublishLightTooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={<Menu />}
              arrow
              placement="bottom-end"
            >
              <Button
                sx={{
                  ml: 2,
                  textTransform: "capitalize",
                  color: `${theme.palette.white[500]}`,
                  backgroundColor: `${theme.palette.primary[500]}`,
                  fontWeight: 600,
                  borderRadius: "10px",

                  "&:hover": {
                    backgroundColor: `${theme.palette.primary[700]}`,
                  },
                }}
                onClick={handleTooltipOpen}
                variant="contained"
                endIcon={<KeyboardArrowDownOutlinedIcon />}
              >
                {isPublishActive ? "Published" : "Draft"}
              </Button>
            </PublishLightTooltip>
          </Box>
        </ClickAwayListener>
      </Box>
      {/* box 2 --image and detailbox*/}
      {isLoading && <ProductDetailSkeleton />}
      {/* <ProductDetailSkeleton /> */}

      <Grid
        container
        id="image&form"
        sx={{
          backgroundColor: `${theme.palette.white[400]}`,
          pl: { xs: 2, sm: 4 },
        }}
      >
        {/* imageSliderbox */}

        <Grid
          item
          sm={6}
          md={6}
          xs={10}
          id="imageslider"
          sx={{
            pl: { xs: 2, sm: 5 },
            mb: 7,
            "& .thumbnails ": {
              height: "70px",
              // borderRadius: "20px",
              // border: "1px solid red",
            },
            "& .thumbnails img": {
              height: "65px",

              borderRadius: "14px",
              // border: "1px solid red",
            },
          }}
        >
          <Carousel
            data={modifiedImages}
            // time={2000}
            width="650px"
            height="600px"
            // captionStyle={captionStyle}
            radius="15px"
            // slideNumber={true}
            // slideNumberStyle={slideNumberStyle}
            // captionPosition="bottom"
            // automatic={true}
            // dots={true}
            // pauseIconColor="white"
            // pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="65px"
            style={
              {
                // textAlign: "center",
                // maxWidth: "650px",
                // maxHeight: "600px",
                // margin: "40px 0 auto 20px",
              }
            }
          />
        </Grid>

        {/* formBox */}
        <Grid item sm={6} md={6} xs={10} id="form">
          <Box
            key={prod._id}
            sx={{
              p: 3,
              m: 3,
            }}
          >
            <Typography
              sx={{
                mt: 3,
                color: `${theme.palette.primary[600]}`,
                fontWeight: 900,
              }}
            >
              {prod?.amount >= 1 ? "In Stock" : "Out Of Stock"}
            </Typography>

            <Typography
              sx={{
                mt: 3,
                mb: 2,
                color: `${theme.palette.text[600]}`,
                fontWeight: 900,
              }}
            >
              {prod?.brand}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 900,
              }}
            >
              {prod?.name}
            </Typography>
            <Typography
              sx={{
                mt: 3,
                fontWeight: 900,
                fontSize: "16px",
                mb: 2,
              }}
            >
              {`${prod?.regularPrice} birr`}
            </Typography>
            <Divider />
            <Typography
              sx={{
                mt: 3,
              }}
            >
              {prod?.description}
            </Typography>

            <Grid
              item
              direction="row"
              container
              gap={2}
              sx={{
                mt: { xs: 4, sm: 3 },
                mb: { xs: 4, sm: 3 },
              }}
            >
              <Grid item xs={2} sm={2} md={2}>
                <Typography
                  sx={{
                    fontWeight: 900,
                  }}
                >
                  Colors
                </Typography>
              </Grid>
              <Grid
                item
                xs={9}
                sm={9}
                md={9}
                container
                gap={2}
                direction="row"
                sx={{
                  // m: { xs: 4, sm: 3 },
                  // display: "flex",
                  // justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                {prod?.colors.map((color, index) => (
                  <div
                    key={index}
                    style={{
                      marginRight: "10px",
                      border: ` 1px solid ${theme.palette.primary[500]}`,
                      width: "20px",
                      height: "20px",
                      borderRadius: "100%",
                      backgroundColor: `${color}`,
                    }}
                  />
                ))}
              </Grid>
            </Grid>
            <Grid
              item
              direction="row"
              container
              xs={12}
              sx={{
                mt: { xs: 4, sm: 3 },
                mb: { xs: 4, sm: 3 },
              }}
            >
              <Grid item xs={2} sm={2} md={2}>
                <Typography
                  sx={{
                    fontWeight: 900,
                  }}
                >
                  Sizes
                </Typography>
              </Grid>

              <Grid
                item
                xs={10}
                sm={9}
                md={9}
                gap={2}
                container
                direction="row"
                sx={{
                  alignItems: "center",
                }}
              >
                {prod?.sizes.map((size, index) => (
                  <Chip
                    key={index}
                    sx={{
                      fontWeight: 900,
                      color: `${theme.palette.primary[500]}`,
                    }}
                    size="small"
                    label={size}
                    variant="outllined"
                  />
                ))}
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="space-between">
              <Typography
                sx={{
                  mt: 3,
                  fontWeight: 900,
                }}
              >
                Quantity remaining
              </Typography>
              <Typography
                sx={{
                  mt: 3,
                  mr: { xs: 4, sm: 6 },
                }}
              >
                {prod?.amount}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* box 3 --main detail holder */}

      <Paper
        elevation={2}
        id="detailcontent"
        sx={{
          p: "10px",
          width: "100%",
          backgroundColor: `${theme.palette.white[400]}`,
          borderBottom: 1,
          borderColor: "divider",
          "& .MuiTabs-indicator ": {
            height: "2px",
            maxWidth: "80px",
            ml: 2,
          },

          "& .MuiButtonBase-root": {
            fontSize: "13px",
            fontWeight: "300",
            textTransform: "capitalize",
          },
          "& .Mui-selected": {
            fontWeight: "bold",
            fontSize: "13px",
          },
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Price related" {...a11yProps(1)} />
        </Tabs>{" "}
        <Divider />
        <TabPanel value={tabValue} index={0}>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "16px",
            }}
          >
            Specification
          </Typography>
          <Specification />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "16px",
            }}
          >
            Price Related Information
          </Typography>
          <Price />
        </TabPanel>
      </Paper>
    </Box>
  );
};

export default ProductDetail;
