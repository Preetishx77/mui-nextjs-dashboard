import { Button, makeStyles, styled, Card } from "@material-ui/core";
import { Box, Container, Grid, Slider, Typography } from "@mui/material";
import techskills from "./techskills.js";
import LockIcon from "@mui/icons-material/Lock";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      margin: "0.5rem"
    },
    [theme.breakpoints.up("md")]: {
      margin: "1rem"
    },
    [theme.breakpoints.up("lg")]: {
      margin: "2.5rem"
    }
  },
  slider: {
    height: "12px",
    thumb: {
      height: "20px",
      width: "20px"
    }
  }
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  background:
    "linear-gradient(90deg, rgba(54,44,231,1) 0%, rgba(64,64,160,1) 100%)"
}));

function valuetext(value) {
  return `${value} %`;
}

export default function Center() {
  const classes = useStyles();

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "#FFFAF1",
          overflowX: "hidden"
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            md={12}
            lg={10}
            xl={10}
            py={4}
            className={classes.root}
            sx={{
              backgroundColor: "white"
            }}
          >
            <Hidden smDown>
              <Grid
                px={6}
                my={3}
                sx={{
                  backgroundColor: "white"
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold"
                  }}
                >
                  Test Progress <span style={{ opacity: "0.75" }}>25%</span>
                </Typography>
              </Grid>
              <Box mx={6}>
                <Slider
                  color="primary"
                  defaultValue={25}
                  className={classes.slider}
                  step={25}
                  size="medium"
                  valueLabelDisplay="auto"
                />
              </Box>
              <Grid container mx={4}>
                <Grid item md={10} lg={3}>
                  <Typography variant="p">Welcome to Turing</Typography>
                </Grid>
                <Grid item md={10} lg={3}>
                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: "bold"
                    }}
                  >
                    Take the survey
                  </Typography>
                </Grid>
                <Grid item md={10} lg={3}>
                  <Typography variant="p">Pass your 1st test</Typography>
                </Grid>
                <Grid item md={10} lg={3}>
                  <Typography variant="p">Pass a tech stack</Typography>
                </Grid>
              </Grid>
            </Hidden>
            <Hidden smUp>
              <Grid
                px={3}
                py={2}
                sx={{
                  backgroundColor: "white"
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold"
                  }}
                >
                  Test Progress <span style={{ opacity: "0.75" }}>25%</span>
                </Typography>
              </Grid>
              <Grid container>
                <Grid md={6} item>
                  <Box sx={{ height: 300 }}>
                    <Slider
                      sx={{
                        '& input[type="range"]': {
                          WebkitAppearance: "slider-vertical"
                        }
                      }}
                      orientation="vertical"
                      defaultValue={25}
                      aria-label="Percentage"
                    />
                  </Box>
                </Grid>
                <Grid md={6} item>
                  <Grid md={12} my={6}>
                    <Typography variant="p">Welcome to Turing</Typography>
                  </Grid>
                  <Grid md={12} my={6}>
                    <Typography
                      variant="p"
                      sx={{
                        fontWeight: "bold"
                      }}
                    >
                      Take the survey
                    </Typography>
                  </Grid>
                  <Grid md={12} my={6}>
                    <Typography variant="p">Pass your 1st test</Typography>
                  </Grid>
                  <Grid md={12} my={6}>
                    <Typography variant="p">Pass a tech stack</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
        <Grid
          container
          my={2}
          xs={12}
          md={12}
          lg={10}
          xl={10}
          className={classes.root}
          sx={{
            background:
              "linear-gradient(90deg, rgba(40,44,221,1) 0%, rgba(109,109,242,1) 35%, rgba(171,196,224,1) 100%)"
          }}
        >
          <Grid item lg={9}>
            <Grid m={4}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "white"
                }}
              >
                Tell us about your work experience
              </Typography>
              <Grid mt={2}>
                <Typography
                  variant="p"
                  sx={{
                    color: "white"
                  }}
                >
                  We will ask you about your past projects, product involvement
                  and experience working with other engineers. This will help us
                  find the right jobs for you.
                </Typography>
              </Grid>
              <Grid mt={2}>
                <ColorButton variant="contained">Continue</ColorButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={3}>
            <Grid
              m={4}
              sx={{
                backgroundColor: "white",
                borderRadius: "10px"
              }}
            >
              <Typography variant="h5" px={2} pt={2}>
                Work Experience Survey
              </Typography>
              <Grid mt={3}>
                <Typography variant="p" px={2}>
                  Est. time
                </Typography>
              </Grid>

              <Typography variant="h6" px={2}>
                30 min
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{ flexGrow: 1 }}
          spacing={2}
          className={classes.root}
          xs={12}
          md={12}
          lg={10}
          xl={10}
          py={4}
        >
          <Grid container my={3}>
            <Typography
              variant="h5"
              mx={2}
              sx={{
                fontWeight: "bold"
              }}
            >
              Take relevant tests <LockIcon />{" "}
            </Typography>

            <Typography variant="p" px={2} my={3}>
              Are you interested in using these skills? This is our way of
              knowing which jobs to match you with. Please take tests for the
              skills you want to continue using in your next career. Based on
              your Profile, we marked your top skills with a star
            </Typography>
          </Grid>
          {techskills.map((skill) => {
            return (
              <>
                <Grid item xs={12} sm={6} lg={4}>
                  <Card
                    variant="outlined"
                    sx={{
                      justifyContent: "center"
                    }}
                  >
                    <img
                      style={{
                        width: "100px",
                        height: "100px",
                        marginLeft: "35%",
                        marginTop: "30px",
                        marginBottom: "30px"
                      }}
                      src={skill.skill_logo}
                      alt={skill.skill_name}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        textAlign: "center"
                      }}
                    >
                      {skill.skill_name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        textAlign: "center"
                      }}
                    >
                      {skill.test_time}
                    </Typography>
                    <Box
                      my={2}
                      sx={{
                        justifyContent: "center",
                        display: "flex",
                        textAlign: "center"
                      }}
                    >
                      <Button variant="outlined" color="primary">
                        Take Test
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
