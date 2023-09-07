import { Box, Divider, Paper, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import UsersAccount from "./UsersAccount";
import Users from "./Users";
import { useTheme } from "@mui/material/styles";
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

const UserTabs = () => {
  const theme = useTheme();
  ////////////////////Tab State///////////////////////////
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  ////////////Tab State End/////////////////////////////////

  return (
    <Box
      sx={{
        p: { xs: 1, sm: 3, md: 4 },
      }}
      borderRadius="10px"
      backgroundColor={`${theme.palette.background[100]}`}
    >
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
            Users
          </Typography>
          <Users />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "16px",
            }}
          >
            Account
          </Typography>
          <UsersAccount />
        </TabPanel>
      </Paper>
    </Box>
  );
};

export default UserTabs;
