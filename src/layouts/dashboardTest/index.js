/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Data

// Dashboard components

function DashboardTest() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5} />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5} />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5} />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5} />
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3} />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8} />
            <Grid item xs={12} md={6} lg={4} />
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DashboardTest;
