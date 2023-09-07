import { Box, Breadcrumbs, Button, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
const ListHeader = ({ title, route, role, owner }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const nonMobile = useMediaQuery("(min-width:564px)");
  return (
    <Box
      display="flex"
      alignItems="start"
      sx={{
        justifyContent: { xs: "start", sm: "space-between" },
      }}
    >
      <Box id="left" mb={4}>
        <Typography pb={2} variant="h4">
          {role === "list" ? `${title} List` : `${title}`}
        </Typography>

        {/* Breadcrum */}
        <Box id="bredcrum">
          <Breadcrumbs>
            <Typography>{route}</Typography>
            {owner === "User" && (
              <Link
                sx={{
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                // color={`${theme.palette.text[500]}`}
                underline="hover"
                to="/dashboard/user/users"
              >
                {owner}
              </Link>
            )}
            {owner === "Product" && (
              <Link
                sx={{
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                // color={`${theme.palette.text[500]}`}
                underline="hover"
                to="/dashboard/product/products"
              >
                {owner}
              </Link>
            )}
            {role === "list" && <Typography>Lists</Typography>}
            {role === "create" && <Typography>{`New ${owner}`}</Typography>}
            {role === "edit" && <Typography>{`Edit ${owner}`}</Typography>}
          </Breadcrumbs>
        </Box>
      </Box>
      {role !== "create" && owner !== "User" && nonMobile && (
        <Button
          LinkComponent={Link}
          to="/dashboard/product/productscreate"
          sx={{
            size: { xs: "small", sm: "large" },
            color: `${theme.palette.white[500]}`,
            backgroundColor: `${theme.palette.primary[500]}`,
            textTransform: "capitalize",
            borderRadius: "10px",
          }}
          variant="contained"
          startIcon={<AddOutlinedIcon />}
        >
          {` New ${owner} `}
        </Button>
      )}
      {role !== "create" && owner !== "User" && !nonMobile && (
        <Fab
          size="small"
          sx={{
            position: "absolute",
            left: "50%",
            bottom: "10px",
            // mt: { xs: "20px", sm: "" },
            // ml: { xs: "70px", sm: "" },
            color: `${theme.palette.background[500]}`,
            backgroundColor: `${theme.palette.primary[300]}`,
            "&:hover": {
              color: `${theme.palette.background[500]}`,
              backgroundColor: `${theme.palette.primary[500]}`,
            },
          }}
          aria-label="add"
        >
          <AddIcon />
        </Fab>
        // <Button
        //   sx={{
        //     size: { xs: "small", sm: "large" },
        //     color: `${theme.palette.white[500]}`,
        //     backgroundColor: `${theme.palette.primary[500]}`,
        //     textTransform: "capitalize",
        //     borderRadius: "10px",
        //   }}
        //   variant="contained"
        //   startIcon={<AddOutlinedIcon />}
        // >
        //   {` New ${title} `}
        // </Button>
      )}
    </Box>
  );
};

export default ListHeader;
