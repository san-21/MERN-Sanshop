import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Button, Card, Typography } from "@mui/material";
import ProductSold from "./components/AvailableProducts";
import TotalSales from "./components/TotalSold";
import YearlySales from "./components/YearlySales";
import AvailableProducts from "./components/AvailableProducts";
import TotalSold from "./components/TotalSold";
import TotalUsers from "./components/TotalUsers";
import ActiveUsers from "./components/ActiveUsers";
import IncomeCard from "./components/secondrow/IncomeCard";
import ExpenseCard from "./components/secondrow/ExpenseCard";
import ProfitCard from "./components/secondrow/ProfitCard";
import CategoryPieChart from "./components/CategoryPieChart";
import ProfitByShopsBarChart from "./components/ProfitbyShopsBarChart";
import BestSalesPerson from "./components/BestSalesPerson";
import MostSoldProduct from "./components/MostSoldProduct";
import OutOfStock from "./components/OutOfStock";
import LowInStock from "./components/LowInStock";
const shopImage2 =
  "https://img.freepik.com/free-photo/3d-illustration-laptop-with-shopping-basket-paper-bags-online-shopping-e-commerce-concept_58466-14623.jpg?size=626&ext=jpg&ga=GA1.1.687930671.1692227141&semt=ais";
const shopImage =
  "https://img.freepik.com/premium-photo/shopping-cart-with-one-notification-added-item-cartoon-icon-isolated-purple-background_531308-936.jpg?size=626&ext=jpg&ga=GA1.2.687930671.1692227141&semt=ais";
const Dashboard = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",

        color: "#fff",
        "& > .MuiBox-root > .MuiBox-root": {
          p: 1,
          borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "700",
        },
      }}
    >
      {/* ////////////////////all grid ///////////////////////// */}
      <Box
        id="firstGrid"
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: {
            xs: "repeat(auto, 70px)",
            sm: "repeat(43, 70px)",
            md: "repeat(22, 70px)",
            lg: "repeat(auto, 70px)",
          },
          gap: 3,
        }}
      >
        {/* /////////////////////////first grid start///////////////////////// */}

        <Box
          className="productgradient"
          sx={{
            gridColumn: { xs: "1 / 7", sm: "1 / 4", md: "1 / 4", lg: "1 / 3" },
            gridRow: "1 / 3",
          }}
        >
          <AvailableProducts />
        </Box>
        <Box
          className="salesgradient"
          sx={{
            gridColumn: {
              xs: "1 / 7",
              sm: "4 / 7",
              md: "4 / 7",
              lg: "3 / 5",
            },
            gridRow: { xs: "3 / 5", sm: "1 / 3" },
            bgcolor: "secondary.main",
          }}
        >
          <TotalSold />
        </Box>
        <Box
          className="salesgradient"
          sx={{
            gridColumn: { xs: "1 / 7", sm: "1 / 4", md: "1 / 4", lg: "5 / 7" },
            gridRow: { xs: "5 / 6", sm: "3 / 4", md: "3 / 4", lg: "1 / 2" },
          }}
        >
          <TotalUsers />
        </Box>
        <Box
          sx={{
            gridColumn: { xs: "1 / 7", sm: "4 / 7", md: "4 / 7", lg: "5 / 7" },
            gridRow: { xs: "6 / 7", sm: "3 / 4", md: "3 / 4", lg: "2 / 3" },
            bgcolor: `${theme.palette.white[500]}`,
          }}
        >
          <ActiveUsers />
        </Box>

        {/* /////////////////////////second grid started///////////////////////// */}

        <Box
          sx={{
            gridColumn: {
              xs: "1 / 7",
              sm: "1 / 7",
              md: "1 / 3",
              lg: "1 / 3",
            },
            gridRow: { xs: "7 / 9", sm: "4 / 6", md: "4 / 6", lg: "3 / 5" },
            bgcolor: `${theme.palette.background[350]}`,
          }}
        >
          <IncomeCard />
        </Box>
        <Box
          sx={{
            gridColumn: {
              xs: "1 / 7",
              sm: "1 / 7",
              md: "3 / 5",
              lg: "3 / 5",
            },
            gridRow: { xs: "9 / 11", sm: "6 / 8", md: "4 / 6", lg: "3 / 5" },
            bgcolor: `${theme.palette.background[350]}`,
          }}
        >
          <ExpenseCard />
        </Box>
        <Box
          sx={{
            gridColumn: {
              xs: "1 / 7",
              sm: "1 / 7",
              md: "5 / 7",
              lg: "5 / 7",
            },
            gridRow: { xs: "11 / 13", sm: "8 / 10", md: "4 / 6", lg: "3 / 5" },
            bgcolor: `${theme.palette.background[350]}`,
          }}
        >
          <ProfitCard />
        </Box>
        {/* /////////////////////////chart(3rd) grid///////////////////////// */}
        <Box
          width="100%"
          height="100%"
          sx={{
            gridColumn: { xs: "1 / 7", sm: "1 / 7", md: "1 / 3", lg: "1 / 3" },
            gridRow: {
              xs: "13 / 18",
              sm: "10 / 15",
              md: "6 / 11",
              lg: "5 / 10",
            },
            bgcolor: `${theme.palette.background[350]}`,
          }}
        >
          <CategoryPieChart />
        </Box>
        <Box
          width="100%"
          height="100%"
          sx={{
            gridColumn: { xs: "1 / 7", sm: "1 / 7", md: "3 / 7", lg: "3 / 7" },
            gridRow: {
              xs: "18 / 23",
              sm: "15 / 20",
              md: "6 / 11",
              lg: "5 / 10",
            },

            bgcolor: `${theme.palette.background[350]}`,
          }}
        >
          <YearlySales />
        </Box>
        {/* /////////////////////////Profit chart(4rd) grid///////////////////////// */}
        <Box
          sx={{
            gridColumn: {
              xs: "span 6",
              sm: "span 6",
              md: "span 4",
              lg: "span 4",
              xl: "span 4",
            },
            gridRow: { xs: "span 7" },
            bgcolor: `${theme.palette.background[350]}`,
          }}
        >
          <ProfitByShopsBarChart />
        </Box>

        <Box
          // className="cardGradient"
          sx={{
            gridColumn: {
              xs: "span 6",
              sm: "span 6",
              md: "span 2",
              lg: "span 2",
              xl: "span 2",
            },
            gridRow: { xs: "span 2", md: "span 2" },
            bgcolor: `${theme.palette.background[350]}`,
          }}
        >
          <img
            style={{
              objectFit: "cover",
            }}
            width="100%"
            height="100%"
            src={shopImage}
            alt="photo"
          />
        </Box>
        <Box
          // className="productgradient"
          sx={{
            gridColumn: {
              xs: "span 6",
              sm: "span 3",
              md: "span 1",
              lg: "span 1",
              xl: "span 1",
            },
            gridRow: { xs: "span 2", md: "span 2" },
            bgcolor: `${theme.palette.background[350]}`,
          }}
        >
          <OutOfStock />
        </Box>
        <Box
          sx={{
            gridColumn: {
              xs: "span 6",
              sm: "span 3",
              md: "span 1",
              lg: "span 1",
              xl: "span 1",
            },
            gridRow: { xs: "span 2", md: "span 2" },
            bgcolor: `${theme.palette.background[350]}`,
          }}
        >
          <LowInStock />
        </Box>
        <Box
          sx={{
            gridColumn: {
              xs: "span 6",
              sm: "span 6",
              md: "span 2",
              lg: "span 2",
              xl: "span 2",
            },
            gridRow: { xs: "span 2", md: "span 2" },
            bgcolor: `${theme.palette.background[350]}`,
          }}
        >
          <img
            style={{
              objectFit: "cover",
            }}
            width="100%"
            height="100%"
            src={shopImage2}
            alt="photo"
          />
        </Box>
        {/* /////////////////////////Table grid(5rd) grid///////////////////////// */}
        <Box
          sx={{
            gridColumn: {
              xs: "span 6",
              sm: "span 6",
              md: "span 2",
              lg: "span 2",
              xl: "span 2",
            },
            gridRow: { xs: "span 6", sm: "span 6", md: "span 7" },
            bgcolor: `${theme.palette.background[350]}`,
          }}
        >
          <MostSoldProduct />
        </Box>
        <Box
          sx={{
            gridColumn: {
              xs: "span 6",
              sm: "span 6",
              md: "span 4",
              lg: "span 4",
              xl: "span 4",
            },
            gridRow: { xs: "span 6", sm: "span 8", md: "span 6" },
            bgcolor: `${theme.palette.background[350]}`,
          }}
        >
          <BestSalesPerson />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
