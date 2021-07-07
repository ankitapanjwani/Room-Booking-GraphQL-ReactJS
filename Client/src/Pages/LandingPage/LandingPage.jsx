import { Box, Button, Container, Typography } from "@material-ui/core";
import React from "react";
import Header from "../../Components/Header/Header";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Image from "../../../public/images/banner1.jpg";
import { IoMdRestaurant } from "react-icons/io";
import { GiChefToque } from "react-icons/gi";
import { GiPerson } from "react-icons/gi";

import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { useStyles } from "../LandingPage/LandingPage.style";

function LandingPage() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div>
          <Header />
        </div>
        <div className={classes.heroImage}>
          <img
            className={classes.hImage}
            alt="Hotel Banner"
            src={process.env.PUBLIC_URL + "/images/hotel-banner.jpg"}
          />
        </div>

        <Box className={classes.summary}>
          <Typography variant="h3" className={classes.summaryTitle}>
            Maximum luxury. Exclusive sensation.
          </Typography>

          <Typography variant="h4" className={classes.summaryTitle}>
            Book Your Room! Stay With Us!
          </Typography>

          <Button variant="contained" className={classes.bookNowBtn}>
          <Link to="/roomSearch" className={classes.bookNowBtnLink}>
            Book Now
            </Link>
          </Button>
        </Box>

        {/* <div>
                <h2>ABOUT HOTEL LUXURA</h2>
                <hr className={classes.hrStyle}/>
                
                </div>  */}

        <Box>
          <div className={classes.bgImageParallax}>
            {/* <img src={process.env.PUBLIC_URL + "/images/banner1.jpg"} alt="" /> */}
            <div className={classes.parallaxContent}>
              <Typography variant="h4">ABOUT HOTEL LUXURA</Typography>
              <hr className={classes.hrStyle} />
              <Typography variant="h6">
                ABOUT HOTEL LUXURA Hotel Luxura is a carefully crafted and
                meticulously designed business and family hotel with host of
                amenities and services available under one roof.
              </Typography>
              {/* <Typography variant="h6">
               The hotel has
              everything a serious guests seeks after before and after checking
              in. The hotel has well situated and king size spacious rooms,
              multicuisine vegetarian only restaurants, banquet, meeting and
              conference room, dedicated parking and so on. 
              
            </Typography> */}
            </div>
            {/* <Button
              variant="contained"
              className={classes.bookNowBtninParallax}
            >
              Book Now
            </Button> */}
          </div>
        </Box>

        {/* <div className={classes.endSection}></div>  */}
        <Container className={classes.featuresConatiner}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Paper className={classes.paper}>
                <div>
                  <div>
                    <GiPerson className={classes.hotelIcons} />
                  </div>
                  <h4 className={classes.featuredContent}>MANNERED STAFF</h4>
                  <div className={classes.featuredContent}>
                    We have the most mannered and well trained staff with focus
                    on service and guest orientation.
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Paper className={classes.paper}>
                <div>
                  <div>
                    <IoMdRestaurant className={classes.hotelIcons} />
                  </div>
                  <h4 className={classes.featuredContent}>RESTAURANT MENU</h4>
                  <div className={classes.featuredContent}>
                    View our latest menu items and rates, you can place order
                    online or take away parcel also.
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item  xs={12} sm={12} md={4} lg={4}>
              <Paper className={classes.paper}>
                <div>
                  <div>
                    <GiChefToque className={classes.hotelIcons} />
                  </div>
                  <h4 className={classes.featuredContent}>MASTER CHEF</h4>
                  <div className={classes.featuredContent}>
                    Our master chef prepares proprietary food dishes with great
                    nutrition value with a fine balance of taste.
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      
      
      <Footer/>
      
      </div>
    </>
  );
}

export default LandingPage;
