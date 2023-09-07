import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from "@mui/x-data-grid-generator";
const roles = ["Admin", "Sales", "Owner"];

export const users = [
  {
    id: "d33e33csdsd",
    fullName: "melke cheru",
    email: "cherumelke@gmail.com",
    passoword: "12341234",
    username: "cherumelke",
    role: "Admin",
    age: 30,
    phone: 251909090000,
    status: "Active",
  },
  {
    id: "d33e33csddddsd",
    fullName: "jimy sol",
    email: "jimycheru@gmail.com",
    passoword: "12341234",
    username: "jimyhaja",
    role: "Sales",
    age: 30,
    phone: 251989091236,
    status: "Pending",
  },
  {
    id: "33dr34f",
    fullName: "sara meastu",
    email: "saramastu@gmail.com",
    passoword: "12341234",
    username: "cherumelke",
    role: "Sales",
    age: 22,
    phone: 2519657898,
    status: "Inactive",
  },
  {
    id: "d33e33cddw3sdsd",
    fullName: "melke cheru",
    email: "cherumelke@gmail.com",
    passoword: "12341234",
    username: "cherumelke",
    role: "Owner",
    age: 30,
    phone: 251909090000,
    status: "Active",
  },
];

export const product = [
  {
    _id: "7984734rbh3h2hbh",
    brand: "Nike",
    name: "Foundations Matte Flip Flop",
    description:
      "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead.",
    content:
      "Mesh and synthetic materials on the upper keep the fluid look of the OG while adding comfort and durability.Originally designed for performance running, the full-length Max Air unit adds soft, comfortable cushio",
    amount: 0,
    images: [
      {
        caption: "image1",
        image:
          "https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?size=626&ext=jpg&uid=R101223355&ga=GA1.1.1830631918.1682933067&semt=sph",
      },
      {
        caption: "image2",
        image:
          "https://img.freepik.com/premium-photo/white-sneakers-isolated-white-background_943087-1255.jpg?size=626&ext=jpg&uid=R101223355&ga=GA1.1.1830631918.1682933067&semt=sph",
      },
      {
        caption: "image3",
        image:
          "https://img.freepik.com/premium-photo/pair-textile-blue-sneakers-with-laces-levitate-yellow-background-shoes-sports-jogging_116441-20890.jpg?size=626&ext=jpg&uid=R101223355&ga=GA1.1.1830631918.1682933067&semt=sph",
      },
      {
        caption: "image4",
        image:
          "https://img.freepik.com/free-photo/model-wearing-purple-sneakers-women-s-apparel_53876-97173.jpg?size=626&ext=jpg&uid=R101223355&ga=GA1.1.1830631918.1682933067&semt=sph",
      },
      {
        caption: "image5",
        image:
          "https://img.freepik.com/free-vector/shoes-realistic-set_1284-23172.jpg?size=626&ext=jpg&uid=R101223355&ga=GA1.2.1830631918.1682933067&semt=sph",
      },
      {
        caption: "image6",
        image:
          "https://img.freepik.com/free-photo/ice-coffee-with-whipped-cream_144627-3801.jpg?size=626&ext=jpg&uid=R101223355&ga=GA1.1.1830631918.1682933067&semt=sph",
      },
    ],
    categories: "Shoes",
    colors: [
      "pink",
      "black",
      "red",
      "blue",
      "yellow",
      "white",
      "gray",
      "red",
      "blue",
      "yellow",
      "white",
    ],
    sizes: [9, 10, 10.5, 11, 11.5, 12, 12.5, 13, 11.5, 12, 12.5, 13],
    tags: ["Ocassion", "Weeding", "Celebrity"],
    gender: ["Men,Kids"],
    saleLabel: "Weekday Sale",
    newLabel: "Brand New Arrival",
    regularPrice: 9000,
    salePrice: 87,
    isTaxIncludedInPrice: false,
    tax: 0,
    discount: 10,
    checked: false,
  },
  {
    _id: "7984734rddbh3h2hbh",
    brand: "Puma",
    name: "Mat Black ",
    description:
      "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead.",
    content:
      "Mesh and synthetic materials on the upper keep the fluid look of the OG while adding comfort and durability.Originally designed for performance running, the full-length Max Air unit adds soft, comfortable cushio",
    amount: 0,
    images: [
      {
        caption: "image1",
        image:
          "https://img.freepik.com/premium-photo/black-sport-shoes_105428-5882.jpg?size=626&ext=jpg&ga=GA1.1.687930671.1692227141&semt=sph",
      },
      {
        caption: "image2",
        image:
          "https://img.freepik.com/premium-photo/white-sneakers-isolated-white-background_943087-1255.jpg?size=626&ext=jpg&uid=R101223355&ga=GA1.1.1830631918.1682933067&semt=sph",
      },
      {
        caption: "image3",
        image:
          "https://img.freepik.com/premium-photo/pair-textile-blue-sneakers-with-laces-levitate-yellow-background-shoes-sports-jogging_116441-20890.jpg?size=626&ext=jpg&uid=R101223355&ga=GA1.1.1830631918.1682933067&semt=sph",
      },
      {
        caption: "image4",
        image:
          "https://img.freepik.com/free-photo/model-wearing-purple-sneakers-women-s-apparel_53876-97173.jpg?size=626&ext=jpg&uid=R101223355&ga=GA1.1.1830631918.1682933067&semt=sph",
      },
      {
        caption: "image5",
        image:
          "https://img.freepik.com/free-vector/shoes-realistic-set_1284-23172.jpg?size=626&ext=jpg&uid=R101223355&ga=GA1.2.1830631918.1682933067&semt=sph",
      },
      {
        caption: "image6",
        image:
          "https://img.freepik.com/free-photo/ice-coffee-with-whipped-cream_144627-3801.jpg?size=626&ext=jpg&uid=R101223355&ga=GA1.1.1830631918.1682933067&semt=sph",
      },
    ],
    categories: "Shoes",
    colors: [
      "red",
      "blue",
      "yellow",
      "white",
      "gray",
      "pink",
      "black",
      "red",
      "blue",
      "yellow",
      "white",
    ],
    sizes: [9, 10, 10.5, 11, 11.5, 12, 12.5, 13, 11.5, 12, 12.5, 13],
    tags: ["Ocassion", "Weeding", "Celebrity"],
    gender: ["Men,Kids"],
    saleLabel: "Weekday Sale",
    newLabel: "Brand New Arrival",
    regularPrice: 9000,
    salePrice: 62,
    isTaxIncludedInPrice: false,
    tax: 0,
    discount: 10,
    checked: false,
  },
  {
    _id: "79842343rddbh3h2hbh",
    brand: "Addidas",
    name: "eaturing the original ripple design ",
    description:
      "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead.",
    content:
      "Mesh and synthetic materials on the upper keep the fluid look of the OG while adding comfort and durability.Originally designed for performance running, the full-length Max Air unit adds soft, comfortable cushio",
    amount: 0,
    images: [
      {
        caption: "image1",
        image:
          "https://img.freepik.com/premium-photo/black-sport-shoes_105428-5882.jpg?size=626&ext=jpg&ga=GA1.1.687930671.1692227141&semt=sph",
      },
      {
        caption: "image2",
        image:
          "https://img.freepik.com/premium-photo/white-sneakers-isolated-white-background_943087-1255.jpg?size=626&ext=jpg&uid=R101223355&ga=GA1.1.1830631918.1682933067&semt=sph",
      },
      {
        caption: "image3",
        image:
          "https://img.freepik.com/premium-photo/pair-textile-blue-sneakers-with-laces-levitate-yellow-background-shoes-sports-jogging_116441-20890.jpg?size=626&ext=jpg&uid=R101223355&ga=GA1.1.1830631918.1682933067&semt=sph",
      },
      {
        caption: "image4",
        image:
          "https://img.freepik.com/free-photo/model-wearing-purple-sneakers-women-s-apparel_53876-97173.jpg?size=626&ext=jpg&uid=R101223355&ga=GA1.1.1830631918.1682933067&semt=sph",
      },
      {
        caption: "image5",
        image:
          "https://img.freepik.com/free-vector/shoes-realistic-set_1284-23172.jpg?size=626&ext=jpg&uid=R101223355&ga=GA1.2.1830631918.1682933067&semt=sph",
      },
      {
        caption: "image6",
        image:
          "https://img.freepik.com/free-photo/ice-coffee-with-whipped-cream_144627-3801.jpg?size=626&ext=jpg&uid=R101223355&ga=GA1.1.1830631918.1682933067&semt=sph",
      },
    ],
    categories: "Shoes",
    colors: [
      "red",
      "blue",
      "yellow",
      "white",
      "gray",
      "pink",
      "black",
      "red",
      "blue",
      "yellow",
      "white",
    ],
    sizes: [9, 10, 10.5, 11, 11.5, 12, 12.5, 13, 11.5, 12, 12.5, 13],
    tags: ["Ocassion", "Weeding", "Celebrity"],
    gender: ["Men,Kids"],
    saleLabel: "Weekday Sale",
    newLabel: "Brand New Arrival",
    regularPrice: 9000,
    salePrice: 62,
    isTaxIncludedInPrice: false,
    tax: 0,
    discount: 10,
    checked: false,
  },
];

export const ProductCategory = [
  {
    title: "Shoes",
    lists: [
      {
        value: "Comfort-Shoes",
        name: "Comfort-Shoes",
      },
      {
        value: "Sports-Shoes",
        name: "Sports-Shoes",
      },
      {
        value: "Sandels",
        name: "Sandels",
      },
    ],
  },
  {
    title: "Clothing",
    lists: [
      {
        value: "Shirts",
        name: "Shirts",
      },
      {
        value: "TShirts",
        name: "T-Shirts",
      },
      {
        value: "Jackets",
        name: "Jackets",
      },
      {
        value: "Jeans",
        name: "Jeans",
      },
      {
        value: "Leather",
        name: "Leather",
      },
      {
        value: "Dress",
        name: "Dress",
      },
      {
        value: "Accessories",
        name: "Accessories",
      },
    ],
  },
  {
    title: "Tailored",
    lists: [
      {
        value: "Suits",
        name: "Suits",
      },
      {
        value: "Blazers",
        name: "Blazers",
      },
      {
        value: "Jeans",
        name: "Jeans",
      },
      {
        value: "Apparel",
        name: "Apparel",
      },
      {
        value: "Accessories",
        name: "Accessories",
      },
    ],
  },
];
export const allColors = [
  "Red",
  "Blue",
  "Cyan",
  "Green",
  "Yellow",
  "Violet",
  "Black",
  "White",
  "Bergendi",
];

export const productSizes = [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13];

export const productTags = [
  { name: "Fasion", value: "Fasion" },
  { name: "Sport", value: "Sport" },
  { name: "Ocassion", value: "Occassion" },
  { name: "Weekend", value: "Weekend" },
  { name: "Dinner", value: "Dinner" },
  { name: "Ceremony", value: "Ceremony" },
  { name: "Festival", value: "Festival" },
  { name: "Night Out", value: "Night Out" },
];
export const adminNavLinks = [
  {
    name: "Dashboard",

    route: "/dashboard/home",
    icon: <DashboardCustomizeRoundedIcon />,
  },

  {
    name: "Product",

    route: "/dashboard/product/products",
    icon: <LocalGroceryStoreIcon />,
  },
  {
    name: "Users ",

    route: "/dashboard/user/users",
    icon: <PeopleAltRoundedIcon />,
  },
];
export const salesNavLinks = [
  {
    name: "Product",
    page: "sales",
    route: "/dashboard/product/products",
    icon: <LocalGroceryStoreIcon />,
  },
];
