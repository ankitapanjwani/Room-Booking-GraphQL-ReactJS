import { Box, Button, Container, Paper, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { UserContext } from "../../App";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useStyles } from "../RoomReceipt/Receipt.style";

function Receipt(props) {
  const classes = useStyles();
  //getting room and user details
  let roomDetails = props.location.state.roomDetail;
  // let userDetails = props.location.state.userdata;
  const { usersData } = useContext(UserContext);
  const [usersDataContext, setUsersDataContext] = usersData;

  //formatting checkin and checkout date
  let checkinDate = new Date(usersDataContext.checkIn);
  let checkoutDate = new Date(usersDataContext.checkOut);

  //final checkIn formatted date

  let finalCheckIn =
    checkinDate?.getFullYear() +
    (checkinDate?.getMonth() + 1 > 9 ? "-" : "-0") +
    (checkinDate?.getMonth() + 1) +
    "-" +
    checkinDate?.getDate();

  //final checkOut formatted date
  let finalCheckOut =
    checkoutDate.getFullYear() +
    (checkoutDate.getMonth() > 9 ? "-" : "-0") +
    (checkoutDate.getMonth() + 1) +
    "-" +
    checkoutDate.getDate();
  const handleBackToRooms = () => {
    props.history.push(`/allRooms?checkIn=${finalCheckIn}`);
  };

  return (
    <div>
      <Header />
      <Container>
        <Paper className={classes.paper}>
          <Box className={classes.boxDetails}>
            <Typography variant="h4" className={classes.roomReceiptTitle}>
              Room Booking Receipt
            </Typography>
            <hr className={classes.hrStyle} />

            <div className={classes.receiptDetailsContainer}>
              {/* User Name */}
              <div className={classes.Details}>
                <div className={classes.detailsNames}>Name:</div>
                <div className={classes.userNamingDetails}>
                  {usersDataContext.firstName} {usersDataContext.lastName}
                </div>
              </div>

              {/* Room Category */}
              <div className={classes.Details}>
                <div className={classes.detailsNames}>Room Booked:</div>
                <div className={classes.userNamingDetails}>
                  {roomDetails.roomCategory}
                </div>
              </div>

              {/* Room Price */}
              <div className={classes.Details}>
                <div className={classes.detailsNames}>Total Amount:</div>
                <div className={classes.userNamingDetails}>
                  $ {roomDetails.roomPrice}
                </div>
              </div>
            </div>

            <hr className={classes.hrStyleCheckin} />
            {/* CheckIn Details */}
            <div className={classes.checkindetails}>
              <div className={classes.detailsNames}>Checkin Details</div>

              <div className={classes.Details}>
                <div className={classes.detailsNames}> CheckIn: </div>
                <div className={classes.userNamingDetails}>{finalCheckIn} </div>
              </div>

              <div className={classes.Details}>
                <div className={classes.detailsNames}> CheckOut: </div>
                <div className={classes.userNamingDetails}>
                  {finalCheckOut}{" "}
                </div>
              </div>
            </div>
          </Box>
        </Paper>

        <Button className={classes.bookNowBtn} onClick={handleBackToRooms}>
          Back to Rooms
        </Button>
      </Container>
      <Footer />
    </div>
  );
}

export default Receipt;
