import { ReactNode } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import Card from "@mui/material/Card";
import styled from "styled-components";

interface StyledCardProps {
  children: ReactNode;
}

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          width: "25%",
          height: "75vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "100%",
          color: "#000",
          fontSize: "16px",
          border: "1px solid #000",
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

export const EmptyCart = styled.div`
  padding: 5px;
  opacity: 0.5;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;

export const WrapperProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 5px;
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductWrapper = styled.div``;

export const ProductName = styled.div`
  font-size: 20px;
  margin-bottom: 5px;
`;

export const ProductFields = styled.div`
  display: flex;
  gap: 5px;
`;

export const Field = styled.div``;

export const ProductButton = styled.div`
  cursor: pointer;
  padding: 3px;
  transition: 0.3s all;

  &:hover {
    color: red;
  }
`;
