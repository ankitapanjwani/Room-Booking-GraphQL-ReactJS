import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import Container from "@material-ui/core/Container";
import { useStyles } from "./Footer.style";
import { Box } from "@material-ui/core";

export default function Footer(){
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Paper className={classes.paper}>
            <Box borderRight={1} className={classes.boxBorder}>
            <div>
            <h4 className="p-3">
                <FacebookIcon />
                <PinterestIcon />
                <InstagramIcon />
                <TwitterIcon />
              </h4>
              <div>
                <h4>&copy; 2021 LUXURA</h4>
              </div>
              </div>
              </Box>
            </Paper>
          </Grid>
          <Grid item  xs={12} sm={12} md={4} lg={4}>
            <Paper className={classes.paper}>
            <Box borderRight={1} className={classes.boxBorder}>
              <h4>Company </h4>

              <div>
                
                  <div>About LUXURA</div>
                
                <div>Team</div>
                <div>Read Our Blog</div>
                <div>Terms and Conditions</div>
                <div>Privacy</div>
                <div>Security</div>
              </div>
              </Box>
            </Paper>
          </Grid>
          <Grid item  xs={12} sm={12} md={4} lg={4}>
            <Paper className={classes.paper}>
            <Box className={classes.boxBorder}>
              <h4>Contact Us</h4>
              <div>
                <div>Help and Support</div>
                <div>Partner With Us</div>
                <div>Code of Conduct</div>
              </div>
              </Box>
            </Paper>
          </Grid>
        </Grid>

      
      </Container>
    </div>
  );
}
