import { makeStyles } from "@material-ui/core/styles";
import Image from "../../assets/room3.jpg";

export let useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#339ba1",
  },
  heroImage: {
    width: "100%",
    height: "25rem",
    zIndex: "0",
    overflow: "hidden",
  },

  hImage: {
    width: "110%",
    height: "100%",
    objectFit: "cover",
    transform: "rotateZ(-4deg) translateY(-4rem) translateX(-1rem)",
  },
  summary: {
    width: "90%",
    textAlign: "center",
    maxWidth: "45rem",

    backgroundColor: "rgba(81, 212, 219,.55)",

    color: "white",
    borderRadius: "14px",
    padding: "1rem",
    margin: "auto",
    marginTop: "-6rem",
    position: "relative",
    boxShadow: "0 1px 18px 10px rgba(0, 0, 0, 0.25)",
    marginBottom: "10%",
  },
  summaryBackground: {
    backgroundColor: "#339ba1",
  },
  summaryItems: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  summaryTitle: {
    fontFamily: "Kaushan Script, cursive",
    marginBottom: "2%",
  },
  bookNowBtn: {
    marginTop: "2%",
    padding: "2%",
    backgroundColor: "#378c91",
    fontWeight: "700",
    width: "12rem",
    color: "white",
    "&:hover": {
      backgroundColor: "#206569",
      color: "white",
    },
  },
  bookNowBtnLink: {
    textDecoration: "none",
    color: "white",
  },
  bgImageParallax: {
    fontSize: "2em",
    color: "white",
    textShadow: "2px 2px 2px #000",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${Image})`,
    height: "500px",
    marginBottom: "10%",
    textAlign: "center",
    marginTop: "5%",

    
  },


  bookNowBtninParallax: {
    top: "30%",
    left: "40%",
    padding: "1%",

    backgroundColor: "rgba(55, 140, 145,.75)",
    fontWeight: "700",
    width: "12rem",
    height: "60px",
    color: "white",
    "&:hover": {
      backgroundColor: "#206569",
      color: "white",
    },
  },
  parallaxContent: {
    position: "relative",
    textAlign: "center",
    maxWidth: "40rem",
    top: "5rem",

    alignItems: "center",
    paddingBottom: "7%",

    marginLeft: "25%",
    backgroundColor: "rgba(0, 0, 0,.25)",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      maxWidth: "20rem",
      marginLeft: "20%",

    }
  },
  hrStyle: {
    width: "10rem",
  },

  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    height: "250px",

    backgroundColor: "#339ba1",
    boxShadow: "0px 0px 0px 0px",
  },
  hotelIcons: {
    borderRadius: "100%",

    height: "100px",
    width: "200px",

    color: "white",
  },
  featuredContent: {
    color: "white",
    textAlign: "center",
  },
  featuresConatiner: {
    marginBottom: "5%",
  },
}));
