import { ReactNode } from "react";
import styled from "styled-components";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Card from "@mui/material/Card";

interface StyledCardProps {
  children: ReactNode;
}

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          maxWidth: 280,
          padding: "20px 10px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#000",
        },
      },
    },
  },
});

export const StyledCard = ({ children }: StyledCardProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Card>{children}</Card>
    </ThemeProvider>
  );
};

export const PriceContainer = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
