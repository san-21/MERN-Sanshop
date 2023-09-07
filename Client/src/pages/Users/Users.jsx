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
  Chip,
  IconButton,
} from "@mui/material";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { styled } from "@mui/material/styles";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
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
import useMediaQuery from "@mui/material/useMediaQuery";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import {
  GridEditInputCell,
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
  GridToolbarExport,
  GridPreProcessEditCellProps,
} from "@mui/x-data-grid";
import UserDetail from "./UserDetail";

////////Pagination/////////////////////
import MuiPagination from "@mui/material/Pagination";
import { Link, Navigate, useNavigate } from "react-router-dom";

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
  const nonMobile = useMediaQuery("(min-width:514px)");
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();
  const { setRows, setRowModesModel, role, status, isSuccess } = props;

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
    <Box sx={{ display: "flex" }} justifyContent="space-between">
      <GridToolbarContainer>
        <FormControl
          required={true}
          sx={{
            m: 1,
            width: 200,
            //  display: { xs: "none", sm: "flex" }
          }}
        >
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
        <FormControl
          sx={{
            m: 1,
            width: 200,
            height: 50,
            // display: { xs: "none", sm: "flex" },
          }}
        >
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
        <Box
          sx={{
            "& .MuiInputBase-root ": {
              m: 1,
              pr: 3.5,
              mt: 2,
              width: { xs: "210px", sm: "370px", md: "500px" },
              height: { xs: "40px", sm: "52px" },
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
        <GridToolbarExport />
        {isSuccess && (
          <Button
            startIcon={<AddIcon />}
            onClick={() => navigate("/dashboard/user/account")}
            size="small"
            sx={{
              textTransform: "capitalize",
              size: { xs: "small", sm: "medium", md: "large" },

              ml: { xs: 1, sm: 2, md: 2 },
              mr: { xs: 1, sm: 2, md: 2 },
              color: `${theme.palette.text[500]}`,
            }}
          >
            Account
          </Button>
        )}
        {isSuccess && (
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleAddNewUser}
            size="large"
            sx={{
              textTransform: "capitalize",
              size: { xs: "small", sm: "medium", md: "large" },

              ml: { xs: 1, sm: 2, md: 2 },
              mr: { xs: 1, sm: 2, md: 2 },
              color: `${theme.palette.white[500]}`,
            }}
          >
            Add User
          </Button>
        )}
      </GridToolbarContainer>
    </Box>
  );
}

///////////////////Toolbar end/////////////////////////

// %%%%%%%%%%%%%%%%%%%%%%%%%%% Validayion Code start here%%%%%%%%%%%%%%% Only implemented for username

let promiseTimeout;
// here we are going to filter out current user data before validating username
// otherwise validator check username from owner i.e that case to error to add

function validateName({ username, rows, id }) {
  const users = rows.filter((row) => row._id !== id);

  const existingUsers = users.map((row) => row.username.toLowerCase());

  return new Promise((resolve) => {
    promiseTimeout = setTimeout(() => {
      if (username === "") resolve("Empity user name");
      const exists = existingUsers.includes(username.toLowerCase());

      resolve(exists ? `${username} is already taken.` : null);
    }, Math.random() * 500 + 100); // simulate network latency
  });
}

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
}));

function NameEditInputCell(props) {
  const { error } = props;

  return (
    <StyledTooltip open={!!error} title={error}>
      <GridEditInputCell {...props} />
    </StyledTooltip>
  );
}

function renderEditName(params) {
  return <NameEditInputCell {...params} />;
}

// %%%%%%%%%%%%%%%%%%%%%%%%%%% Validayion Code END here%%%%%%%%%%%%%%%

const Users = () => {
  // %%%%%%%% Validation
  const preProcessEditCellProps = async (params) => {
    const errorMessage = await validateName({
      username: params.props.value.toString(),
      id: params.id,
      rows: rows,
    });
    return { ...params.props, error: errorMessage };
  };
  // %%%%%%%%%%%%%%%%%%%
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
    useGetUsersQuery(undefined, {
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
    });

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

  useEffect(() => {
    if (role.length !== 0 && role !== "All") {
      setRows(data?.filter((user) => user.role === role));
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

  useEffect(() => {
    if (status.length !== 0 && status !== "All") {
      setRows(data?.filter((user) => user.status === status));
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

  function renderChip(params) {
    const status = params.value;
    if (status === "Active") {
      return (
        <Chip
          label="Active"
          size="small"
          sx={{
            backgroundColor: `${theme.palette.green[100]}`,
            color: `${theme.palette.green[500]}`,
            fontWeight: "bold",
          }}
        />
      );
    } else if (status === "Inactive") {
      return (
        <Chip
          label="Inactive"
          size="small"
          sx={{
            backgroundColor: `${theme.palette.background[500]}`,
            color: `${theme.palette.text[300]}`,
            fontWeight: "bold",
          }}
        />
      );
    }
    return (
      <Chip
        label="Pending"
        size="small"
        sx={{
          backgroundColor: `${theme.palette.yellow[100]}`,
          color: `${theme.palette.yellow[500]}`,
          fontWeight: "bold",
        }}
      />
    );
  }
  function renderRole(params) {
    const role = params.value;
    if (role === "Admin") {
      return (
        <Button
          sx={{
            fontSize: "14px",
            textTransform: "capitalize",
            color: `${theme.palette.text[200]}`,
            fontWeight: "light",
          }}
          variant="text"
          startIcon={
            <SettingsOutlinedIcon
              sx={{
                fontSize: "small",
                color: `${theme.palette.primary[500]}`,
              }}
            />
          }
        >
          Admin
        </Button>
      );
    }
    if (role === "Sales") {
      return (
        <Button
          sx={{
            fontSize: "14px",
            textTransform: "capitalize",
            color: `${theme.palette.text[200]}`,
            fontWeight: "light",
          }}
          variant="text"
          startIcon={
            <SupervisorAccountIcon
              sx={{
                fontSize: "small",
                color: `${theme.palette.secondary[600]}`,
              }}
            />
          }
        >
          Sales
        </Button>
      );
    }
    if (role === "Owner") {
      return (
        <Button
          sx={{
            fontSize: "14px",
            textTransform: "capitalize",
            color: `${theme.palette.text[200]}`,
            fontWeight: "light",
          }}
          variant="text"
          startIcon={
            <CoPresentIcon
              sx={{
                fontSize: "small",
                color: `${theme.palette.yellow[600]}`,
              }}
            />
          }
        >
          Owner
        </Button>
      );
    }
  }

  function renderUserImages(params) {
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
          alt="account images"
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

  function renderAccountAvailability(params) {
    const haveAccount = params.value;
    if (haveAccount) {
      return (
        <IconButton disabled>
          <VerifiedUserIcon
            sx={{
              backgroundColor: `${theme.palette.secondary[500]}`,
              color: `${theme.palette.primary[400]}`,
            }}
          />
        </IconButton>
      );
    } else {
      return (
        <IconButton component={Link} to="/dashboard/user/account">
          <NoAccountsIcon
            sx={{
              backgroundColor: `${theme.palette.secondary[500]}`,
              color: `${theme.palette.red[400]}`,
            }}
          />
        </IconButton>
      );
    }
  }
  const columns = [
    {
      field: "images",
      headerName: "picture",
      renderCell: renderUserImages,
      width: "100",
    },
    {
      field: "fullName",
      headerName: "Full Name",
      width: 180,
      editable: true,
      preProcessEditCellProps: (params) => {
        const hasError = params.props.value.length < 6;
        return { ...params.props, error: hasError };
      },
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      width: 200,
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
      preProcessEditCellProps,
      renderEditCell: renderEditName,
    },

    {
      field: "createdAt",
      headerName: "Join date",
      // type: "s",
      width: 180,
    },
    {
      field: "haveAccount",
      headerName: "Account",
      align: "left",
      headerAlign: "left",
      renderCell: renderAccountAvailability,
      width: 80,
    },
    {
      field: "role",
      headerName: "Role",
      width: 120,
      editable: true,
      renderCell: renderRole,
      type: "singleSelect",
      valueOptions: ["Admin", "Sales", "Owner"],
      preProcessEditCellProps: (params) => {
        const hasError = params.props.value.length < 4;
        return { ...params.props, error: hasError };
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      editable: true,
      renderCell: renderChip,
      type: "singleSelect",
      valueOptions: ["Active", "Inactive", "Pending"],
      preProcessEditCellProps: (params) => {
        const hasError = params.props.value.length < 4;
        return { ...params.props, error: hasError };
      },
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
      // preProcessEditCellProps: (params) => {
      //   const hasError = params.props.value.length < 10;
      //   return { ...params.props, error: hasError };
      // },
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

  useEffect(() => {
    return () => {
      clearTimeout(promiseTimeout);
    };
  }, []);
  return (
    <Box
      sx={{
        p: { xs: 1, sm: 3, md: 4 },
      }}
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
          height: { xs: "100vh", sm: "90vh", md: "90vh" },

          // %%%%%%%%%%%%%%%%%%%%%%%%% Validation style%%%%%%%%%%%%%55

          "& .Mui-error": {
            height: "70%",
            borderRadius: "10px",
            backgroundColor: `${theme.palette.red[300]}`,

            color: `${theme.palette.white[300]}`,
          },
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
              isSuccess,
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
