import { Box, Grid } from "@mui/material";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      sx={{ p: 2 }}
      container
      direction="column"
      justifyContent="flex-start"
      alignContent="center"
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <img src="amazon-logo-black.png" alt="amazon-logo" height="40px" />
      </Box>
      <main>{children}</main>
    </Grid>
  );
};

export default AuthLayout;
