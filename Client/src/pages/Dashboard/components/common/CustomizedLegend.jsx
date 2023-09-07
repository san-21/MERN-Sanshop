import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Button, IconButton } from "@mui/material";

const CustomizedLegend = (props) => {
  const theme = useTheme();
  const { payload, legendWidth, legendHeight, legendRadius } = props;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: 2,
      }}
    >
      {/* color: entry.color, */}
      {payload.map((entry, index) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton disableFocusRipple>
            <div
              style={{
                width: legendWidth,
                height: legendHeight,
                borderRadius: legendRadius,
                backgroundColor: entry.color,
              }}
            />
          </IconButton>
          <Button
            style={{
              color: `${theme.palette.text[300]}`,
              textTransform: "capitalize",
              "&:hover": {
                boxShadow: "none",
                backgroundColor: `${theme.palette.white[500]}`,
              },
            }}
            key={`item-${index}`}
          >
            {entry.value}
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default CustomizedLegend;
