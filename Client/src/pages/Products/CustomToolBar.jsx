import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import {
  DataGrid,
  GridActionsCellItem,
  GridRowParams,
  GridToolbar,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import {
  Box,
  IconButton,
  InputAdornment,
  InputBase,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { theme } from "theme";
import { Search } from "@mui/icons-material";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 2;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
      borderRadius: "10px",
    },
  },
};

const stock = ["In stock", "Low stock", "Out of stock"];
const publish = ["Published", "Draft"];

export default function CustomToolBar({
  searchInput,
  setSearchInput,
  setSearch,
}) {
  const theme = useTheme();
  const [stockStatus, setStockStatus] = useState([]);
  const [published, setPublished] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

  const handlePublishChange = (event) => {
    const {
      target: { value },
    } = event;
    setPublished(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleStockChange = (event) => {
    const {
      target: { value },
    } = event;
    setStockStatus(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton
        //   sx={{
        //     color: `${theme.palette.primary[700]}`,
        //   }}
        />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "none", md: "flex" },
      }}
      justifyContent="space-between"
    >
      {CustomToolbar()}
      {/* <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="multiple-checkbox">Stock</InputLabel>
        <Select
          labelId="multiple-checkbox"
          id="multiple-checkbox"
          multiple
          value={stockStatus}
          onChange={handleStockChange}
          input={<OutlinedInput label="Stock" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {stock.map((stock) => (
            <MenuItem key={stock} value={stock}>
              <Checkbox checked={stockStatus.indexOf(stock) > -1} />
              <ListItemText primary={stock} />
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}

      {/* Published */}

      {/* <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="multiple-checkbox">Publish</InputLabel>
        <Select
          labelId="multiple-checkbox"
          id="multiple-checkbox"
          multiple
          value={published}
          onChange={handlePublishChange}
          input={<OutlinedInput label="Publish" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {publish.map((publish) => (
            <MenuItem key={publish} value={publish}>
              <Checkbox checked={published.indexOf(publish) > -1} />
              <ListItemText primary={publish} />
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}

      {/* search */}

      <Box flexGrow={1}>
        {/* <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton
                  disabled
                  // onChange={() => {
                  //   setSearch(searchInput);
                  //   setSearchInput("");
                  // }}
                >
                  <SearchOutlinedIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          fullWidth
          sx={{
            m: 1,
            pr: 3.5,
          }}
          onChange={(event) => {
            setSearchInput(event.target.value);
            setSearch(searchInput);
          }}
          value={searchInput}
        ></TextField> */}
      </Box>
    </Box>
  );
}
