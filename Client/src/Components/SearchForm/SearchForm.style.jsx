import { makeStyles } from "@material-ui/core/styles";

export let useStyles = makeStyles((theme) => ({
  halfpaneImage: {
    width: "100%",
    height: "100%",
    borderRadius:"5px",
    [theme.breakpoints.down('sm')]:{
      width: "100%",
    height: "100%",
    borderRadius:"5px",
    // objectFit:"contain"
    }
  },
  searchBoxImagecontainer:{
      marginLeft: "auto",
      marginRight: "auto",
      width: "95%",
      height: "70%",
      borderRadius:"5px",
      textAlign:"center",
      [theme.breakpoints.down('sm')]:{
        marginTop: 0,
        marginBottom: 0,
        
      }
    
  },
  formContainer: {
    marginTop: "5%",
  },
  root: {
    
      textAlign: "center",
        width: "500px",
        // backgroundColor: 'blue'
        [theme.breakpoints.down("sm")]: {
          marginRight:"auto",
          marginLeft:"auto",
         width: "500px"
    
        },
        [theme.breakpoints.between('sm', 'md')]:{
         width: "400px"
    
        }
  },
  textfieldWidth:{
      marginTop:"5%",
      width: "80%",
      '&$error': {
        color: 'red'
      },
      error: {} //<--this is required to make it work

  },
  searchBox:{
      height:"500px",
      borderColor:"#51cddb",
      
  },
  sideImageBox:{
    height:"500px",
    borderColor:"#51cddb",

    [theme.breakpoints.down('sm')]:{
      height: "400px"
 
     }
  },
  paper1:{

      boxShadow: "0px 0px 0px 0px"
  } ,
  paper:{
      marginTop: 0,
      // boxShadow: "1px 1px 1px 1px #51cddb"
      boxShadow: "1px 4px 16px 0px #51cddb",
      // [theme.breakpoints.down('sm')]:{
      //   marginTop: 0
      // }
  },
  searchButton:{
      backgroundColor:"#51cddb",
      color: "white",
      "&:hover":{
        backgroundColor: "#206569",
        color: 'white'

      }
  },
  searchBtnLink:{
    textDecoration:"none",
    color: "white"
  },
  bookRoomTitle:{
    fontFamily: "Lobster, cursive",
    color: "#206569"
  },
  errorMessage: {
    color: "red",
    fontSize: "12px",
    fontWeight: "strong",
  },
}));
