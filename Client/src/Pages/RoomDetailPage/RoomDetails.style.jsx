import { makeStyles } from "@material-ui/core/styles";




export let useStyles = makeStyles((theme)=>({
    roomDetailbanner:{
        height: "500px",
        width: "100%",
        backgroundColor: "#51cddb",
        [theme.breakpoints.down('sm')]:{
            height: "350px",

        }
    },
    imageContainer:{
        position: "absolute",
        marginTop: "-25rem",
        height: "500px",
        width: "80%",
        left: "15rem",
        [theme.breakpoints.down('sm')]:{
            marginTop: "-20rem",
            left: "4.5rem",
            height: "350px",


        }
    },
    roomImage:{
        height: "100%",
        width:"90%"
    },
    roomCategory:{
        padding: "20px",
        // fontFamily: "Limelight, cursive",
        color: "white",
        fontFamily: "Lobster, cursive",
        fontSize: "4rem",
        [theme.breakpoints.down('sm')]:{
            fontSize: "2.5rem",

        }
    },
    roomBannerContainer:{
        marginBottom: "20rem"
    },
   
    roomDescriptionTitle:{
        color: "#51cddb",
        fontFamily: "Lobster, cursive",
        fontSize: "3rem",
        [theme.breakpoints.down('sm')]:{
            fontSize:"2rem",
            marginRight:"10%",
            marginLeft:"10%",
            width: "80%",

        }
    },
    roomDescription:{
        marginTop:"3%",
        fontFamily: "Assistant, sans-serif",
        fontSize:"20px",
        // color: "black",
        [theme.breakpoints.down('sm')]:{
            fontSize:"1.2rem",
            marginRight:"10%",
            marginLeft:"10%",
            width: "80%",

        }
    },
    paper:{
        boxShadow:"0px 0px 0px 0px",
        height: "300px",
        [theme.breakpoints.down('sm')]:{
            height:"250px"
        }
    },
    roomDetails:{
        
        marginTop:"-5rem",
        // border:"1px solid black"
    },
    infoAbt:{
        marginTop:"5%"
    },
    imagesArrayContainer:{
        width: "100%",
        height:"250px"
    },
    roomArrayImage:{
        width: "90%",
        height: "100%"
    },
    ImageGrid:{
        "&:hover":{

            // transform: "scale(1.2)",
            cursor: "pointer"
        },
        
    },
    imagePaper:{
        boxShadow:"0px 0px 0px 0px"
    },
    imagesArrayContainers:{
        width: "100%",
        height:"300px",
        overflow: "hidden",
        borderRadius:"10px",
     
            // border: "1px solid blue",
        [theme.breakpoints.down('sm')]:{
            marginRight:"auto",
            marginLeft:"auto",
        }

    },
    roomArrayImages:{
        width: "90%",
        height: "100%",
        // transition: "transform .5s ease",
        borderRadius:"10px",
        [theme.breakpoints.down('sm')]:{
            marginRight:"10%",
            marginLeft:"10%",
            width: "80%",

        }
      

    },
    roomExtras:{
        marginTop: "10%",
        // [theme]
    },
    extrasPaper:{
        boxShadow:"0px  0px 0px 0px",
        marginTop:"5%",
        [theme.breakpoints.down('sm')]:{
            height:"120px",
            // boxShadow:"0px  0px 0px 0px",
            boxShadow: "1px 3px 16px 3px #51cddb",


        }
    },
    extrasBox:{
        height: "150px"
    },
    booknowbtnContainer:{
        right: "7rem",
        position:"absolute",
        
    },
    bookNowBtn:{
        padding: "10px",
        // paddingLeft:"1%",
        width: "150px",
        backgroundColor: '#2590a1',
        color: "white",
        "&:hover":{
            backgroundColor: '#2590a1',
            color: "white",

        },

        [theme.breakpoints.down('sm')]:{
            width: "150px",
            padding: "10px",


        }
    },
    
    booknowBottom:{
        marginTop: "5%",
        textAlign:"center",
        
    }
   
    
}));