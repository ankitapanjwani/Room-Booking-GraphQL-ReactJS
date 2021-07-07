import { makeStyles } from "@material-ui/core/styles";

// export const theme = createMuiTheme({
//     overrides: {
//       // Style sheet name ⚛️
//       MuiAppBar: {
//         // Name of the rule
//         text: {
//           // Some CSS
//         //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         backgroundColor: '#ccccc',
//         // border: 0,
//           color: 'white',
//           height: 48,
//           boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         },
//       },
//     },
//   });

export const drawerWidth = 240;
export let useStyles = makeStyles((theme) => ({

header:{
    backgroundColor: "#51cddb",
    color: "white",
    boxShadow: "0px 0px 0px 0px",
   
  
},
title:{
fontFamily: "Kaushan Script, cursive",
wordSpacing: ".5em",
fontSize: "1.75rem" 

},

  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "80px",
    padding: "0 12%"
   
  },
  searchRoomsLink:{
      textDecoration: "none",
      color: "white"
  },
 
  homeBtnLink:{
    textDecoration: "none",
    color: "white"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuIcon:{
    cursor:"pointer"
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#51cddb"
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
  contactLink:{
    color: "white"
  },
  linksDrawer:{
    display:"flex",
    flexDirection:"column"
  },
  searchicon:{
    color: "white"
  }

}));
