import { Box, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CustomTooltip = ({ active, payload, label }) => {
  const theme = useTheme();
  if (active && payload && payload.length) {
    return (
      <Box>
        <Paper
          sx={{
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
            backgroundColor: `${theme.palette.white[500]}`,
            width: "140px",
            height: "100px",
            color: `${theme.palette.text[500]}`,
            fontSize: "9px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "30px",
              fontWeight: "bold",
              color: `${theme.palette.text[500]}`,
              backgroundColor: `${theme.palette.background[300]}`,
              textAlign: "center",
              pt: 1,
            }}
          >
            {label}
          </Box>
          {payload.map((entry, index) => (
            <Box display="flex" alignItems="center" justifyContent="start">
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "100%",
                  backgroundColor: entry.color,
                  marginRight: "4px",
                }}
              />

              <Typography
                sx={{ fontSize: "12px", color: `${theme.palette.text[300]}` }}
              >
                {entry.name} :
                <span
                  style={{
                    fontWeight: "bold",
                    color: `${theme.palette.text[500]}`,
                  }}
                >
                  {entry.value}
                </span>
              </Typography>
            </Box>
          ))}
        </Paper>
      </Box>
    );
  }
  return null;
};

export default CustomTooltip;
