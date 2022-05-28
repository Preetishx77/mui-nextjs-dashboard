import { makeStyles } from "@material-ui/core";
import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import EditIcon from "@mui/icons-material/Edit";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PaidIcon from "@mui/icons-material/Paid";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      margin: "0.5rem"
    },
    [theme.breakpoints.up("md")]: {
      margin: "1rem"
    },
    [theme.breakpoints.up("lg")]: {
      margin: "5rem"
    }
  }
}));

export default function ProfileData() {
  const classes = useStyles();
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "#FFFAF1",
          overflowX: "hidden",
          height: "100vh"
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            md={12}
            lg={8}
            xl={8}
            py={4}
            className={classes.root}
            sx={{
              backgroundColor: "white"
            }}
          >
            <Grid ml={4}>
              <Typography variant="h5">Turing</Typography>
            </Grid>
            <Grid container spacing={2} mx={2}>
              <Grid
                item
                md={6}
                my={4}
                sx={{
                  display: "flex"
                }}
              >
                <UploadFileIcon mt={1} />
                <Typography variant="h6" ml={1}>
                  Upload your Resume
                </Typography>
              </Grid>
              <Grid item md={6} my={4}>
                <Grid
                  sx={{
                    display: "flex"
                  }}
                >
                  <Typography variant="p" mx={1}>
                    1653654719985_2374369_preetish.biswal2020.pdf
                  </Typography>
                  <EditIcon mx={2} />
                </Grid>
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={2} mx={2}>
              <EditIcon
                sx={{
                  float: "right",

                  marginLeft: "55vw",
                  marginTop: "10vh"
                }}
              />
              <Grid
                item
                lg={12}
                sx={{
                  display: "flex"
                }}
              >
                <div
                  style={{
                    borderRadius: "50%",
                    width: "84px",
                    height: "84px",
                    paddingTop: "27px",
                    background: "#fff",
                    border: "3px solid #000",
                    color: "#000",
                    textAlign: "center",
                    font: "18px Arial, sans-serif"
                  }}
                >
                  Preetish
                </div>
                <Typography variant="h6" ml={1} my={2}>
                  Preetish Biswal
                </Typography>
                <br />
                <br />
                <Typography variant="p" ml={1} my={3}>
                  India
                </Typography>
              </Grid>

              <Grid container lg={12} my={4}>
                <Grid item lg={4}>
                  <EmailIcon />
                  <Typography variant="p" px={1} my={-2}>
                    preetish.biswal2020@vitstudent.ac.in
                  </Typography>
                </Grid>
                <Grid
                  item
                  lg={4}
                  sx={{
                    display: "flex"
                  }}
                >
                  <PhoneIcon />
                  <Typography varaint="p">+91 7008109400</Typography>
                </Grid>
                <Grid item lg={2}>
                  <LinkedInIcon />
                </Grid>
                <Grid item lg={2}>
                  <GitHubIcon />
                </Grid>
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={2} mx={2}>
              <Grid
                item
                md={6}
                my={4}
                sx={{
                  display: "flex"
                }}
              >
                <FilterVintageIcon />
                <Typography variant="h6" ml={1}>
                  Overall Experience
                </Typography>
              </Grid>
              <Grid item md={6} my={4}>
                <Grid
                  sx={{
                    display: "flex",
                    float: "right",
                    marginRight: "20%"
                  }}
                >
                  <Typography
                    variant="p"
                    mx={1}
                    sx={{
                      fontWeight: "bold"
                    }}
                  >
                    1 Years / 1 Years (Remote)
                    <br />
                    Great English Proficiency
                  </Typography>
                  <EditIcon mr={4} />
                </Grid>
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={2} mx={2}>
              <Grid
                item
                md={6}
                my={4}
                sx={{
                  display: "flex"
                }}
              >
                <DateRangeIcon />
                <Typography variant="h6" ml={1}>
                  Availability
                </Typography>
              </Grid>
              <Grid item md={6} my={4}>
                <Grid
                  sx={{
                    display: "flex",
                    float: "right",
                    marginRight: "20%"
                  }}
                >
                  <Typography
                    variant="p"
                    mx={1}
                    sx={{
                      fontWeight: "bold"
                    }}
                  >
                    Full Time
                    <br />
                    Ready to Start now
                  </Typography>
                  <EditIcon mr={4} />
                </Grid>
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={2} mx={2}>
              <Grid
                item
                md={6}
                my={4}
                sx={{
                  display: "flex"
                }}
              >
                <PaidIcon />
                <Typography variant="h6" ml={1}>
                  Role and Current Salary
                </Typography>
              </Grid>
              <Grid item md={6} my={4}>
                <Grid
                  sx={{
                    display: "flex",
                    float: "right",
                    marginRight: "20%"
                  }}
                >
                  <Typography
                    variant="p"
                    mx={1}
                    sx={{
                      fontWeight: "bold"
                    }}
                  >
                    Fullstack (FE-heavy)
                    <br />
                    Current salary: $1,000 / Year
                    <br />
                    Expected salary: $10,000 / Year
                  </Typography>
                  <EditIcon mr={4} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
