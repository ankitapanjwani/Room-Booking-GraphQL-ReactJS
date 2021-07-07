
import { makeStyles} from "@material-ui/core/styles";


export let useStyles = makeStyles(theme => ({
    root: {
      padding: "1%",
      backgroundColor: "#339ba1",
      flexGrow: 1,
      bottom: 0,
      marginTop: "10%",
      boxShadow: "2px 8px 10px 10px rgba(32, 101 , 105, 0.2)"

    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "left",
    //   border: "1px solid #206569",
      color: "white",
      height: "200px",
      backgroundColor: "#339ba1",
      boxShadow:"0px 0px 0px 0px",
      borderleft: "1px solid white",
      [theme.breakpoints.down("sm")]: {
        textAlign:"center",

      }
    },
    grid2: {
      padding: theme.spacing(2),
      marginTop: 0,
      textAlign: "left",
      color: "white",
      height: "250px",
      backgroundColor: "#171a29"
    },
    hr: {
      backgroundColor: "white"
    },  
    boxBorder:{
        // borderRight: "1px solid white",
        height: "200px",
        [theme.breakpoints.down("sm")]: {
          // border: "1px solid white",
          margin:"0 auto",
          textAlign:"center",
          borderRight:0,
          borderBottom: "1px solid white",
          width: "60%"
        }
    }

    

  }));
  