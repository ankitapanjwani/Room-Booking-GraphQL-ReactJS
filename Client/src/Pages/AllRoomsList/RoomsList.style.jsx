import { makeStyles } from "@material-ui/core/styles";

export let useStyles = makeStyles((theme) => ({
  imageContainer: {
    width: "100%",
    height: "700px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "500px",
    },
  },
  allRoomsImage: {
    width: "100%",
    height: "100%",
  },
  roomBannerContainer: {
    position: "relative",
  },

  roomBannerContent: {
    position: "absolute",
    top: "5vh",
    // left: "15vh",
    textAlign: "center",
    background: "rgb(0, 0, 0)" /* Fallback color */,
    backgroundColor: "rgba(0, 0, 0, 0.35)" /* Black background with 0.5 opacity */,
    color: "#f1f1f1",
    width: "30%",
    padding: "30px",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      width: "60%",
      padding: "20px",
    },
  },
  bannercontent: {
    fontFamily: "Limelight, cursive",
  },
  headingRooms: {
    fontFamily: "Lobster, cursive",
    color: "#206569",
  },
  heading: {
    marginTop: "5%",
    textAlign: "center",
  },
  hrStyle: {
    width: "40%",
    backgroundColor: "#51cddb",
    border: "2px solid #51cddb",
  },
  backbtn: {
    backgroundColor: "#51cddb",
    padding: "15px",
    width: "18%",
    color: "white",
    "&:hover": {
      backgroundColor: "#51cddb",
    },
    [theme.breakpoints.down('sm')]:{
      width: "50%",
    }
  },
  root: {
    marginTop: "5rem",
    justifyContent:"center"
  },
  card: {
    boxShadow: "0px 0px 0px 0px",
    height: "18rem",
    maxWidth: 300,
    borderRadius: "5px",
    "& .hidden-button": {
      display: "none",

      // backgroundColor:'red'
      // makeStyles-card-62
    },
    "&:hover": {
      height: "18rem",
    },
    // "&:hover .cardImage":{
    //   height: "350px"
    // },
    "&:hover .hidden-button": {
      display: "block",
      position: "absolute",
      top: 0,
      // backgroundColor: "#6495ed",
      background: "rgb(0, 0, 0)" /* Fallback color */,
      backgroundColor: "rgba(0, 0, 0,0.55)",
      padding: "15px",
      borderBottomRightRadius: "40%",
      color: "white",
      //   transform: scale(0.54)
    },
    "&:hover .roomCategoryContent": {
      display: "block",
      position: "absolute",
      top: "21vh",
      left: 0,
      background: "rgb(0, 0, 0)" /* Fallback color */,
      backgroundColor: "rgba(0, 0, 0, 0.25)",
      padding: "15px 0",
      width: "100%",
      // borderBottomRightRadius: "40%",
      fontFamily: "Limelight, cursive",
      fontSize: "18px",
      color: "white",
    },  
  },
  roomPrice: {
    textAlign: "center",
    fontSize: "20px",
    marginTop: "1rem",
  },
  roomCategory: {
    textAlign: "center",
    fontSize: "20px",
    paddingTop: 0,
    marginTop: "-10px",
    padding: "10px 0",
    // fontFamily: "Sigmar One, cursive",
    fontFamily: "Suez One, serif",

    // fontFamily: "Kaushan Script, cursive",
    color: "rgb(24, 69, 74)",
  },
  cardBack: {
    // background: "rgb(91, 214, 227)", /* Fallback color */
    // background: "rgba(14, 89, 97, 0.25)",
  },
  cardImage: {
    borderRadius: "5px",
  },
 
}));
