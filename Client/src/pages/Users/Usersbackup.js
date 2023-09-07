import {
  Box,
  Grid,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  DialogContentText,
  DialogActions,
  Divider,
  Avatar,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  ListItemText,
} from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";

import CancelIcon from "@mui/icons-material/Close";
import ListHeader from "pages/ListHeader";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { users } from "assets/data";
import CloseIcon from "@mui/icons-material/Close";
import {
  useGetUsersQuery,
  useUpdateUserMutation,
  useAddNewUserMutation,
  useDeleteUserMutation,
} from "rtkQuery/userApiSlice";

import { useDispatch, useSelector } from "react-redux";

import {
  handleDetailDialogOpen,
  setSelectedRole,
  setFilteredRoles,
  setSelectedStatus,
} from "redux/userSlice";

import { randomId } from "@mui/x-data-grid-generator";

import {
  GridRowModes,
  gridPageCountSelector,
  GridPagination,
  useGridApiContext,
  useGridSelector,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import UserDetail from "./UserDetail";

import MuiPagination from "@mui/material/Pagination";

function Pagination({ page, onPageChange, className }) {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <MuiPagination
      color="primary"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event, newPage - 1);
      }}
    />
  );
}

function CustomPagination(props) {
  return <GridPagination ActionsComponent={Pagination} {...props} />;
}

///////////////////ToolBar content/////////////////////
const roles = ["All", "Admin", "Sales", "Owner"];
const userStatus = ["All", "Active", "Inactive", "Pending"];

function EditToolbar(props) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { setRows, setRowModesModel, role, status } = props;

  /////////////////Status and role State settter/////////////
  const handleSetStatus = (event) => {
    dispatch(setSelectedStatus(event.target.value));
  };
  const handleSetSelectedRole = (event) => {
    dispatch(setSelectedRole(event.target.value));
  };

  const handleAddNewUser = () => {
    const _id = randomId();
    setRows((oldRows) => [
      {
        _id,
        fullName: "user name here",
        email: "",
        username: "",
        role: "",
        status: "",
        age: "",
        phone: "",
        isNew: true,
      },
      ...oldRows,
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [_id]: { mode: GridRowModes.Edit, fieldToFocus: "firstName" },
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
          startIcon={<AddIcon />}
          onClick={handleAddNewUser}
          variant="contained"
          sx={{
            color: `${theme.palette.white[500]}`,
          }}
        >
          Add New User
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

///////////////////Toolbar end/////////////////////////

const Users = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  //////////////////Delete Dialog /////////////////
  const [open, setOpen] = React.useState(false);
  const [userId, setUserId] = useState("");

  const handleDialogOpen = (id) => {
    setUserId(id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  /////////////////////delete Dialog End ///////////////////
  /////////////////////Detail Dialog Handler///////////////

  // const [detailDialogOpen, setDetailDialogOpen] = useState(false);

  // const handleDetailDialogClose = () => {
  //   setDetailDialogOpen(false);
  // };
  const handleViewClick = (id) => {
    dispatch(handleDetailDialogOpen(id));
  };

  ////////////////////////////////////////////////////////
  ///////////////////////RtkQuery//////////////////////////

  const { data, error, refetch, isLoading, isFetching, isSuccess } =
    useGetUsersQuery();

  const [
    updateUser,
    {
      isLoading: isUpdating,
      isSuccess: isUpdateSuccess,
      isError: isUpdateError,
    },
  ] = useUpdateUserMutation();

  const [
    addNewUser,
    {
      isLoading: addNewUserIsLoading,
      isSuccess: addNewUserIsSuccess,
      error: newuserErrorMessgae,
    },
  ] = useAddNewUserMutation();

  const [
    deleteUser,
    { isSuccess: isDeleteSuccess, isLoading: isDeleting, error: isDeleteError },
  ] = useDeleteUserMutation();

  console.log(data);
  //////////////////////////////////End Query////////////////////////////

  const [rows, setRows] = useState(data);
  const [rowModesModel, setRowModesModel] = useState({});
  useEffect(() => {
    setRows(data);
  }, [data]);

  // #################Get state for Filtering###########################

  const role = useSelector((state) => state.user.role);
  const status = useSelector((state) => state.user.status);

  React.useEffect(() => {
    if (role.length !== 0 && role !== "All") {
      setRows(data.filter((user) => user.role === role));
    } else if (
      role === "All" ||
      status === "All" ||
      role.length === 0 ||
      status.length === 0
    ) {
      dispatch(setSelectedRole("All"));
      setRows(data);
    }
  }, [role]);

  React.useEffect(() => {
    if (status.length !== 0 && status !== "All") {
      setRows(data.filter((user) => user.status === status));
    } else if (
      role === "All" ||
      status === "All" ||
      role.length === 0 ||
      status.length === 0
    ) {
      dispatch(setSelectedStatus("All"));
      setRows(data);
    }
  }, [status]);
  // ###############################################

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

  const handleDeleteClick = (userId) => async () => {
    await deleteUser({ id: userId })
      .then(() => setRows(rows.filter((row) => row.id !== userId)))
      .then(() => setOpen(false))
      .catch((error) => console.log(`${error} failed to delete user`));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const updatedRow = rows.find((row) => row._id === id);
    if (updatedRow.isNew) {
      setRows(rows.filter((row) => row._id !== id));
    }
  };

  const processRowUpdate = async (updatedRow, originalRow) => {
    if (updatedRow.isNew) {
      try {
        await addNewUser(updatedRow)
          .then(() => console.log("New user Success"))
          .catch((err) => console.log(err));
      } catch (error) {
        console.error("Failed to add new user: ", error);
      }
    } else {
      try {
        await updateUser(updatedRow)
          .then(() => console.log("Update user Success"))
          .catch((err) => console.log(`User update error ${err}`));
      } catch (error) {
        console.error("Failed to update user: ", error);
      }
    }

    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
  const handleProcessRowUpdateError = () => {
    console.log("error updtaing from :?>>>>>  processRowUpdate ");
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
    // {
    //   field: "createdAt",
    //   headerName: "Join date",
    //   type: "date",
    //   width: 180,
    //   editable: true,
    // },
    {
      field: "role",
      headerName: "Role",
      width: 120,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Admin", "Sales", "Owner"],
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Active", "Inactive", "Pending"],
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 80,
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
              color={`${theme.palette.primary[200]}`}
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={
              <EditIcon
                sx={{
                  color: `${theme.palette.primary[500]}`,
                }}
              />
            }
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
          />,
          <GridActionsCellItem
            icon={
              <VisibilityOutlinedIcon
                sx={{
                  color: `${theme.palette.primary[500]}`,
                }}
              />
            }
            label="View"
            className="textPrimary"
            onClick={() => handleViewClick(id)}
          />,
          <GridActionsCellItem
            icon={
              <DeleteIcon
                sx={{
                  color: `${theme.palette.red[500]}`,
                }}
              />
            }
            label="Delete"
            onClick={() => handleDialogOpen(id)}
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
          height: "60vh",
          width: "100%",
          "& .actions": {
            color: "text.secondary",
          },
          "& .textPrimary": {
            color: "text.primary",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: `${theme.palette.background[500]}`,
            mt: "20px",
            fontSize: "14px",
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
          width: { xs: "100%", sm: "99%" },
          height: "70vh",
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={rows || []}
          editMode="row"
          columns={columns}
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          onProcessRowUpdateError={handleProcessRowUpdateError}
          slots={{
            toolbar: EditToolbar,
            pagination: CustomPagination,
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
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            },
          }}
          checkboxSelection
          pageSizeOptions={[5, 10, 25, 50, 100]}
        />
        {isUpdating && (
          <Snackbar
            open={isUpdating}
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
              Updating User ...
            </Alert>
          </Snackbar>
        )}
        {addNewUserIsLoading && (
          <Snackbar
            open={addNewUserIsLoading}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            sx={{ width: "500px" }}
          >
            <Alert
              sx={{
                backgroundColor: `${theme.palette.primary[100]}`,
              }}
            >
              Adding New User ...
            </Alert>
          </Snackbar>
        )}
      </Box>
      <Box>
        <Dialog
          sx={{
            "& .MuiPaper-root": {
              borderRadius: "16px",
              minHeight: "160px",
              width: "450px",
              p: "10px",
            },
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            sx={{
              fontWeight: "bold",
            }}
            id="alert-dialog-title"
          >
            Delete Confirmation{" "}
            {isDeleting && (
              <Typography
                sx={{
                  color: `${theme.palette.red[700]}`,
                }}
              >
                deleting User Please Wait .......
              </Typography>
            )}
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              sx={{
                fontSize: "14px",
                fontWeight: 500,
              }}
              id="alert-dialog-description"
            >
              Are you sure you want to completly remove this user from your
              list?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              variant="contained"
              color="info"
              size="madium"
              sx={{
                borderRadius: "7px",
                border: "1px solid gray",
                textTransform: "capitalize",

                backgroundColor: `${theme.palette.white[300]}`,
                color: `${theme.palette.text[500]}`,
                "&:hover": {
                  border: "1px solid black",
                  backgroundColor: `${theme.palette.white[300]}`,
                },
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleDeleteClick(userId)}
              autoFocus
              variant="contained"
              size="medium"
              sx={{
                backgroundColor: `${theme.palette.red[400]}`,
                borderRadius: "7px",
                textTransform: "capitalize",
                fontWeight: 700,
                fontSize: "14px",
                "&:hover": {
                  backgroundColor: `${theme.palette.red[700]}`,
                },
              }}
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      {/* /////////////////////USer detail dialog //////////////////////// */}
      <UserDetail />
    </Box>
  );
};

export default Users;
