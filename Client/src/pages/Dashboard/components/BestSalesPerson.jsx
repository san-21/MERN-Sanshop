import { Avatar, Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { bestSales } from "assets/chartdata";

function CustomToolbar() {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        mt: 1,
        p: 1,
        pl: 2,
        fontWeight: "bold",
        color: `${theme.palette.text[500]}`,
      }}
      variant="h6"
    >
      Best Salesman
    </Typography>
  );
}

const renderRank = (params) => {
  const theme = useTheme();
  const rank = params.value;
  let bgcolr, colr;
  if (rank === 1 || 4) {
    bgcolr = `${theme.palette.primary[100]}`;
    colr = `${theme.palette.primary[500]}`;
  }
  if (rank === 2) {
    bgcolr = `${theme.palette.secondary[100]}`;
    colr = `${theme.palette.secondary[500]}`;
  }
  if (rank === 3) {
    bgcolr = `${theme.palette.green[100]}`;
    colr = `${theme.palette.green[500]}`;
  }
  if (rank === 5) {
    bgcolr = `${theme.palette.card[100]}`;
    colr = `${theme.palette.card[500]}`;
  }

  return (
    <Box
      sx={{
        width: "40px",
        height: "20px",
        borderRadius: "6px",
        backgroundColor: bgcolr,
        alignItems: "center",
        color: colr,
      }}
    >
      <Typography sx={{ textAlign: "center", fontSize: "12px" }}>
        Top {rank}
      </Typography>
    </Box>
  );
};
function renderImages(params) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        width: 40,
        height: 40,
        backgroundColor: `${theme.palette.primary[100]}`,
        borderRadius: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar
        alt="user images"
        src={params.value}
        sx={{
          width: 30,
          height: 30,

          border: `1px solid ${theme.palette.yellow[500]}`,
        }}
      />
    </Box>
  );
}
const columns = [
  {
    field: "image",
    headerName: "",
    renderCell: renderImages,

    width: 60,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "name",
    headerName: "Seller",

    width: 250,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "totalSold",
    headerName: "Total",
    type: "number",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "rank",
    headerName: "Rank",
    renderCell: renderRank,

    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "shop",
    headerName: "Store",

    width: 150,
    align: "right",
    headerAlign: "right",
  },
];
const BestSalesPerson = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: "99%",

        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: `${theme.palette.background[400]}`,
          color: `${theme.palette.text[500]}`,

          mt: "20px",
          fontSize: "15px",
          fontWeight: 700,
        },
        "& .MuiDataGrid-root": {
          borderRadius: "10px",
          boxShadow: `10px 10px 10px  ${theme.palette.background[500]}`,
        },
        "& .MuiDataGrid-root": {
          fontSize: "15px",
          fontWeight: 300,
        },
      }}
    >
      <DataGrid
        slots={{
          toolbar: CustomToolbar,
          columnMenu: null,
        }}
        rows={bestSales}
        columns={columns}
        disableColumnMenu
        hideFooterPagination
      />
    </Box>
  );
};

export default BestSalesPerson;
