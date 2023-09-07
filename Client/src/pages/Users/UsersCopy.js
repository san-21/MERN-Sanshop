import * as React from "react";

import { useTheme } from "@mui/material/styles";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import { useDispatch, useSelector } from "react-redux";
import { useGetUsersQuery } from "rtkQuery/userApiSlice";

import {
  setSelectedRole,
  setFilteredRoles,
  setSelectedStatus,
} from "redux/userSlice";

import Link from "@mui/material/Link";
import ListHeader from "pages/ListHeader";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowModes,
  DataGrid,
  GridToolbar,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from "@mui/x-data-grid-generator";
import { users } from "../../assets/data";
import {
  Checkbox,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  ListItemText,
  TextField,
} from "@mui/material";

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
/////////////////////Toolbar //////////////////////////////////////////////
const roles = ["All", "Admin", "Sales", "Owner"];
const userStatus = ["All", "Active", "Inactive", "Pending"];

function EditToolbar(props) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { setRows, setRowModesModel, role, status } = props;

  const handleSetStatus = (event) => {
    dispatch(setSelectedStatus(event.target.value));
  };
  const handleSetSelectedRole = (event) => {
    dispatch(setSelectedRole(event.target.value));
  };
  const handleNewUserClick = () => {
    const id = randomId();
    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        fullName: "",
        email: "",
        username: "",
        age: "",
        phone: "",
        status: "",
        isNew: true,
      },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    }));
  };

  return (
    <Box
      sx={{
        display: { xs: "none", sm: "none", md: "flex" },
      }}
      justifyContent="space-between"
    >
      <GridToolbarContainer>
        <Button
          sx={{
            flexGrow: 1,
            size: { xs: "small", sm: "large" },
            color: `${theme.palette.white[500]}`,
            backgroundColor: `${theme.palette.primary[500]}`,
            textTransform: "capitalize",
            borderRadius: "6px",
          }}
          onClick={handleNewUserClick}
          variant="contained"
          startIcon={<AddOutlinedIcon />}
        >
          New User
        </Button>
      </GridToolbarContainer>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="multiple-checkbox">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Role"
          value={role}
          onChange={handleSetSelectedRole}
          input={<OutlinedInput label="Role" />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>All</em>;
            }
            return selected;
          }}
        >
          {roles.map((role) => (
            <MenuItem key={role} value={role}>
              {role}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Statused */}

      <FormControl sx={{ m: 1, width: 200, height: 50 }}>
        <InputLabel id="multiple-checkbox">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Status"
          value={status}
          onChange={handleSetStatus}
          input={<OutlinedInput label="Status" />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>All</em>;
            }
            return selected;
          }}
        >
          {userStatus.map((status) => (
            <MenuItem key={status} value={status}>
              {/* <Checkbox checked={status.indexOf(status) > -1} /> */}
              {status}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* search */}

      <Box flexGrow={1}>
        <Box
          sx={{
            "& .MuiInputBase-root ": {
              m: 1,
              pr: 3.5,
              width: "500px",
              height: "52px",
              border: "1px solid gray",
              borderRadius: "6px",
              "&:hover": {
                boxShadow: "none",
              },
            },
            "& .MuiSvgIcon-root": {
              ml: 2,
            },
          }}
        >
          <GridToolbarQuickFilter />
        </Box>
      </Box>
    </Box>
  );
}
//////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
const Users = () => {
  // const { data, isSuccess, isLoading } = useGetUsersQuery();
  const role = useSelector((state) => state.user.role);
  const status = useSelector((state) => state.user.status);

  const dispatch = useDispatch();
  const theme = useTheme();

  const [rows, setRows] = React.useState(users);

  React.useEffect(() => {
    if (role.length !== 0 && role !== "All") {
      setRows(users.filter((user) => user.role === role));
    } else if (
      role === "All" ||
      status === "All" ||
      role.length === 0 ||
      status.length === 0
    ) {
      dispatch(setSelectedRole("All"));
      setRows(users);
    }
  }, [role]);

  React.useEffect(() => {
    if (status.length !== 0 && status !== "All") {
      setRows(users.filter((user) => user.status === status));
    } else if (
      role === "All" ||
      status === "All" ||
      role.length === 0 ||
      status.length === 0
    ) {
      dispatch(setSelectedStatus("All"));
      setRows(users);
    }
  }, [status]);
  //////////////////////////////Status/////////////////////////

  ////////////////////////////////////////////////////////////
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: "fullName", headerName: "Full Name", width: 180, editable: true },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      width: 180,
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "username",
      headerName: "Username",
      type: "string",
      align: "left",
      headerAlign: "left",
      width: 150,
      editable: true,
    },
    {
      field: "joinDate",
      headerName: "Join date",
      type: "date",
      width: 180,
      editable: true,
    },
    {
      field: "role",
      headerName: "Role",
      width: 90,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Admin", "Sales", "Owner"],
    },
    {
      field: "status",
      headerName: "Status",
      width: 90,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Active", "Inactive", "Pending"],
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 50,
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "number",
      width: 150,
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      p={4}
      borderRadius="10px"
      backgroundColor={`${theme.palette.background[100]}`}
    >
      {/* top main box */}

      <ListHeader
        title={"User"}
        route={"managment"}
        role={"list"}
        owner={"User"}
      />

      {/* Table */}
      <Box
        sx={{
          height: 500,
          width: "100%",
          "& .actions": {
            color: "text.secondary",
          },
          "& .textPrimary": {
            color: "text.primary",
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          editMode="row"
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          // initialState={{
          //   filter: {
          //     filterModel: {
          //       items: [],
          //       quickFilterLogicOperator: GridLogicOperator.Or,
          //     },
          //   },
          // }}
          slots={{
            toolbar: EditToolbar,
          }}
          slotProps={{
            toolbar: {
              setRows,
              setRowModesModel,
              role,
              status,
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Users;
