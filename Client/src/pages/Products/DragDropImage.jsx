import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useTheme } from "@mui/material/styles";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";

// import { useDispatch, useSelector } from "react-redux";

import logo from "../../assets/dragdrop.avif";
// import { addImages } from "state/productSlice";

const DragDropImage = () => {
  // const dispatch = useDispatch();

  const theme = useTheme();

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
    isDragAccept,
    isFocused,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    onDrop,
    noClick: true,
    noKeyboard: true,
  });

  const handleRemoveAll = () => {
    setImages([]);
  };

  const [names, setNames] = useState(["Alice", "Bob"]);
  const [images, setImages] = useState([]);
  const removePrimitiveFromArray = (id) => {
    //  remove 'Bob' from array
  };

  return (
    <Box mt={3}>
      <Box
        onClick={open}
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
          {...getRootProps({ isDragAccept, isFocused, isDragReject })}
        >
          <input {...getInputProps()} />
          <img alt="DopImage" width="200px" height="auto" src={logo} />
          <Typography variant="h6" fontWeight="bold">
            Drop or Select file
          </Typography>
          <Typography>
            Drag and drop images here or click{" "}
            <span
              style={{
                color: `${theme.palette.primary[500]}`,
                textTransform: "underline",
              }}
            >
              {" "}
              browse{" "}
            </span>{" "}
            through your machine
          </Typography>
        </Box>
      </Box>
      <Box mt={4}>
        <Grid container columnGap={1} rowGap={2} direction="row">
          {images.map((image, index) => (
            <Grid
              position="relative"
              id={image.src}
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
              <img width="100%" height="100%" alt={image.src} src={image.src} />
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
                    return images.filter((item) => item.src !== image.src);
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
      <Box mt={4} display="flex" alighitems="center" justifyContent="flex-end">
        <Button
          onClick={handleRemoveAll}
          variant="outlined"
          size="small"
          sx={{
            color: `${theme.palette.text[500]}`,
            backgroundColor: `${theme.palette.background[100]}`,
            textTransform: "none",
          }}
        >
          Remove All
        </Button>
        <Button
          // onClick={() => {
          //   dispatch(addImages(allImages));
          // }}
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
  );
};

export default DragDropImage;
