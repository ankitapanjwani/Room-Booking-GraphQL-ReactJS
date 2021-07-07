import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import { useStyles } from "../Header/Header.style";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const classes = useStyles();
  // useEffect(() => {
  //  localStorage.removeItem('UserId');
  // }, [])

  const [drawer, setdrawer] = useState(false);
  const handleDrawerToggle = () => {
    setdrawer(!drawer);
  };

  // const drawerWidth = 240;

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.header}>
        <Toolbar className={classes.navbar}>
          <div>
            <Typography variant="h6" className={classes.title}>
              Hotel LUXURA
            </Typography>
          </div>
          <Hidden xsDown>
            <div>
              <Button
                color="inherit"
                onClick={() => {
                  localStorage.removeItem("UserId");
                }}
              >
                <Link to="/" className={classes.homeBtnLink}>
                  Home
                </Link>
              </Button>
              <Button color="inherit">Contacts</Button>

              <Button color="inherit">
                <SearchIcon />{" "}
                <Link to="/roomSearch" className={classes.searchRoomsLink}>
                  {" "}
                  Rooms
                </Link>
              </Button>
            </div>
          </Hidden>

          <Hidden smUp>
            <MenuIcon onClick={handleDrawerToggle} className={classes.menuIcon}/>
          </Hidden>

          <Drawer
            open={drawer}
            onClose={handleDrawerToggle}
            anchor="left"
            // transitionDuration={{ enter: 1000, exit: 30000 }}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton>
            <div className={classes.linksDrawer}>
              <Button
                color="inherit"
                onClick={() => {
                  localStorage.removeItem("UserId");
                }}
              >
                <Link to="/" className={classes.homeBtnLink} >
                  Home
                </Link>
              </Button>
              <Button color="inherit"   className={classes.contactLink}>Contacts</Button>

              <Button color="inherit">
                <SearchIcon className={classes.searchicon}/>{" "}
                <Link to="/roomSearch"  className={classes.searchRoomsLink}>
                  {" "}
                  Rooms
                </Link>
              </Button>
            </div>
            
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
