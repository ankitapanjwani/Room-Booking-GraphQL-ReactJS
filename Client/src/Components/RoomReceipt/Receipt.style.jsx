import { makeStyles } from "@material-ui/core/styles";

export let useStyles = makeStyles((theme) => ({
  paper: {
    
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5%",
    backgroundColor: "rgb(81, 185, 201)",
    height: "35rem",
   
    [theme.breakpoints.down("md")]: {
        width: "100%",
        marginLeft:"auto",
        marginRight:"auto"
    },
  },
  
  hrStyle: {
    color: "white",
    width: "40%",
    marginTop: 0,
    backgroundColor: "white",
    border: "1px solid white",
  },
  roomReceiptTitle: {
    padding: "2rem",
    textAlign: "center",
    fontFamily: "Limelight, cursive",
    color: "white",
  },
  Details: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    // justifyContent:"space-a",
    color: "white",
    // textAlign:"center"
    // backgroundColor: "blue",
    width: "80%",
    [theme.breakpoints.down('sm')]:{
      width:"100%"
    }
  },
  receiptDetailsContainer: {
    display: "flex",
    flexDirection: "column",
    // alignItems:"center",
    justifyContent: "space-between",
    marginTop: "5%",
    marginBottom: "5%",
    textAlign: "center",
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    // backgroundColor:"blue",
    height: "130px",
    
  },
  detailsNames: {
    fontFamily: "Limelight, cursive",
    // marginTop:"5%",
    // marginLeft: "5%",
    fontSize: "1.2rem",
  },
  checkindetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    color: "white",
    width: "60%",
    marginTop: "10%",
    marginLeft: "auto",
    marginRight: "auto",
    height: "100px",
    // backgroundColor: "blue"
  },
  userNamingDetails: {
    marginLeft: "5%",
  },
  hrStyleCheckin: {
    color: "white",
    width: "60%",
    marginTop: "10%",
    // backgroundColor:"white",
    border: "1px dashed white",
  },
}));
