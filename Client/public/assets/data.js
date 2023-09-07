import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
export const navLinks = [
  {
    title: "Dashboard",
    menu: [
      {
        name: "General",
        icon: <SummarizeOutlinedIcon />,
        menulist: [""],
      },
    ],
  },
  {
    title: "Managment",
    menu: [
      {
        name: "Product",
        icon: <InventoryOutlinedIcon />,
        menulist: ["List", "Detail", "Create", "Edit"],
      },
      {
        name: "Users ",
        icon: <PersonAddAltOutlinedIcon />,
        menulist: ["List", "Detail", "Create", "Edit"],
      },
      {
        name: "Shop ",
        icon: <StoreMallDirectoryOutlinedIcon />,
        menulist: ["List", "Detail", "Create", "Edit"],
      },
      {
        name: "Permission",
        icon: <ShieldOutlinedIcon />,
        menulist: ["List", "Detail", "Create", "Edit"],
      },
    ],
  },
  {
    title: "Sales",
    menu: [
      {
        name: "Sales",
        icon: <SellOutlinedIcon />,
        menulist: ["List", "Detail", "Create", "Edit"],
      },
    ],
  },
];
