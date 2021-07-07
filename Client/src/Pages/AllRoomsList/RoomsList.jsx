import { Container, Button, Typography } from "@material-ui/core";
import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "../AllRoomsList/RoomsList.style";

function RoomsList({ rooms }) {
  const classes = useStyles();
  // console.log("ROOM ID:", rooms[0].id);

  return (
    <div>
      <Container className={classes.roomBannerContainer}>
        <div className={classes.imageContainer}>
          <img
            className={classes.allRoomsImage}
            alt="roomsCommon"
            src={process.env.PUBLIC_URL + "/images/room4.jfif"}
          />
        </div>
        <div className={classes.roomBannerContent}>
          <Typography variant="h4" className={classes.bannercontent}>
            Relaxing Room
          </Typography>
          <Typography variant="h6">Your Room. Your Stay.</Typography>
        </div>
      </Container>

      <Container className={classes.heading}>
        <Typography variant="h3" className={classes.headingRooms}>
          Our Rooms
        </Typography>
        <hr className={classes.hrStyle} />

        <div>
          <Link style={{ textDecoration: "none" }} to={"/roomSearch"}>
            <Button className={classes.backbtn}>Back to Form</Button>
          </Link>
        </div>
      </Container>

      <div>
        <Container>
          <Grid container className={classes.root} spacing={2}>
            <Grid item>
              <Grid container justify="center" spacing={2}>
                {
                  rooms?.map((fetchRooms) => (
                    <Grid item key={fetchRooms.id}>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/getRoom/${fetchRooms.id}`}
                      >
                        <Card className={classes.card} key={fetchRooms.id}>
                          <CardActionArea className={classes.cardBack}>
                            <CardMedia
                              component="img"
                              // alt="Contemplative Reptile"
                              height="200"
                              className={classes.cardImage}
                              image={fetchRooms.roomImages[0]}
                              title="Rooms"
                            ></CardMedia>
                            <div className={classes.roomPrice}>
                              <span className="hidden-button">
                                ${fetchRooms.roomPrice}
                              </span>
                            </div>
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                className={classes.roomCategory}
                              >
                                <span className="roomCategoryContent">
                                  {fetchRooms.roomCategory}
                                </span>
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Link>
                    </Grid>
                  ))
                }
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default RoomsList;
