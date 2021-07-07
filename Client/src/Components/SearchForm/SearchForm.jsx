import React, { useContext, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Container, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import DatepickerField from "../Datepicker/DatepickerField";
import { useStyles } from "../SearchForm/SearchForm.style";
import { UserContext } from "../../App";
import { POST_USER, GET_USER_BY_ID, UPDATE_USER } from "../../queries/queries";
import { useMutation, useQuery } from "@apollo/client";

function SearchForm(props) {
  const { usersData, userDataEmail } = useContext(UserContext);
  const classes = useStyles();

  let userFinalId = JSON.parse(localStorage.getItem("UserId"));

  const [addUserData] = useMutation(POST_USER);
  const [updateUserData] = useMutation(UPDATE_USER);

  const { data } = useQuery(GET_USER_BY_ID, {
    variables: { id: userFinalId },
  });

  let newDate = new Date(data?.user?.checkIn);
  console.log("date checkin", newDate);

  //destructuring
  const [userFormData, setUsersFormData] = usersData;
  const [userEmail, setUserEmail] = userDataEmail;
  const [errors, setErrors] = useState();

  useEffect(() => {
    console.log("In USEEFFECT");
    if (data) {
      console.log("DATA", data);
      setUsersFormData(data.user);
      setUserEmail(data.user.email);
    }
  }, [data]);


  const validate = (fieldValues = userFormData) => {
    console.log("Inputs Resposnse:", userFormData);
    // const errors = {};

    let validation = { ...errors }; // specifies that to exists all other error messages if we type in another input

    if ("firstName" in fieldValues) {
      validation.firstName = fieldValues.firstName
        ? fieldValues.firstName.length < 3
          ? "Must be 3 characters!"
          : ""
        : "This field is required";
    }

    if ("lastName" in fieldValues) {
      validation.lastName = fieldValues.lastName
        ? ""
        : "This field is required";
    }
    if ("email" in fieldValues) {
      validation.email = /^\S+@\S+\.\S+$/.test(fieldValues.email)
        ? ""
        : "Email is not valid";
    }

    setErrors({
      ...validation,
    });

    const returendValue = Object.values(validation).every(
      (vali) => vali === ""
    ); // returns either true or false
    return returendValue;
  };

  // =========================== HANDLE CHANGE OF INPUTS =========================
  const handleInputChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setUsersFormData((inputs) => ({
      ...inputs,
      [key]: value,
    }));
    validate({ [key]: value });
  };

  // console.log("users data", usersdata);

  // ========================== HANDLE SUBMIT =============================
  const handleSubmit = async (event) => {
    event.preventDefault();

    let checkInDateFULL = new Date(userFormData.checkIn);

    let checkinYear = checkInDateFULL.getFullYear();
    let checkinMonth = checkInDateFULL.getMonth() + 1;
    let checkinDay = checkInDateFULL.getDate();

    //final dates of checkin
    let checkInDateFinal =
      checkinYear +
      (checkinMonth > 9 ? "-" : "-0") +
      checkinMonth +
      "-" +
      checkinDay;

    // let userDetail = {
    //   firstName: usersdata.firstName,
    //   lastName: usersdata.lastName,
    //   email: usersdata.email,
    //   checkIn: usersdata.checkIn,
    //   checkOut: usersdata.checkOut,
    // };
    // console.log(" SEARCH FORM EMAIL:", useremail);

    if (validate()) {
      console.log("IN VALIDATE");


      if (userFormData.email === userEmail) {
        console.log("IN PUT");
        //  let userDetail = {
        //     firstName: userFormData.firstName,
        //     lastName: userFormData.lastName,
        //     email: userFormData.email,
        //     checkIn: userFormData.checkIn,
        //     checkOut: userFormData.checkOut,
        //   };
        // console.log(" updated user DETAILS", userFormData.firstName);
        console.log("USER ID:", typeof(userFinalId));
        
      const respo = await updateUserData({
          variables: {
            id: userFinalId,
            firstName: userFormData.firstName,
            lastName: userFormData.lastName,
            email: userFormData.email,
            checkIn: new Date(userFormData.checkIn),
            checkOut: new Date(userFormData.checkOut),
          },
        })

        console.log("update user response:", respo);
          // .then((res) => {
          //   console.log("response from put", res);
          // })
          // .catch((err) => {
          //   console.log("error", err);
          // });

        props.history.push(`/allRooms?checkIn=${checkInDateFinal}`);
      }
      //====================APOLLO==================
      else {
        console.log("INSIDE POST");
        const res = await addUserData({
          variables: {
            firstName: userFormData.firstName,
            lastName: userFormData.lastName,
            email: userFormData.email,
            checkIn: userFormData.checkIn,
            checkOut: userFormData.checkOut,
          },
          // refetchQueries: [{query: GET_BOOKS}]
        })
          // .then((res) => {
          //   // console.log("response from put", res);
            console.log("response from POST", res.data.addUser);

            let userId = res.data.addUser.id;
            console.log("USER ID AFTER POST", userId);
            localStorage.setItem("UserId", JSON.stringify(userId));
            props.history.push(`/allRooms?checkIn=${checkInDateFinal}`);
          // })
          // .catch((err) => {
          //   console.log("error", err);
          // });
      }
    }
  };

  return (
    <div>
      <Container className={classes.formContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Paper className={classes.paper1}>
              <Box className={classes.sideImageBox}>
                <div className={classes.searchBoxImagecontainer}>
                  <img
                    alt="halfPaneImage"
                    className={classes.halfpaneImage}
                    src={process.env.PUBLIC_URL + "/images/beech.jpg"}
                  />
                  <Typography variant="h6" className={classes.bookRoomTitle}>
                    Stay with Us! Go Grab Amazing Rooms!
                  </Typography>
                </div>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Paper className={classes.paper}>
              <Box className={classes.searchBox}>
                <form
                  className={classes.root}
                  onSubmit={handleSubmit}
                  noValidate
                  autoComplete="off"
                >
                  <Typography variant="h4" className={classes.bookRoomTitle}>
                    Book Your Room
                  </Typography>
                  <div className={classes.formFields}>
                    <div>
                      <TextField
                        id="outlined-basic"
                        label="FirstName"
                        name="firstName"
                        value={userFormData.firstName}
                        onChange={handleInputChange}
                        variant="outlined"
                        type="text"
                       
                        className={classes.textfieldWidth}
                        {...(errors?.firstName
                          ? { error: true, helperText: errors?.firstName }
                          : "null")}
                      />
                   
                    </div>
                    <div>
                      <TextField
                        id="outlined-basic"
                        label="LastName"
                        name="lastName"
                        value={userFormData.lastName}
                        onChange={handleInputChange}
                        variant="outlined"
                        type="text"
                       
                        className={classes.textfieldWidth}
                        {...(errors?.lastName
                          ? { error: true, helperText: errors?.lastName }
                          : "null")}
                      />
                     
                    </div>
                    <div>
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        name="email"
                        value={userFormData.email}
                        onChange={handleInputChange}
                        variant="outlined"
                        {...(errors?.email
                          ? { error: true, helperText: errors?.email }
                          : "null")}
                        className={classes.textfieldWidth}
                      />
                   
                    </div>

                    <div>
                      <DatepickerField
                        name="checkIn"
                        label="Check In Date"
                        value={userFormData.checkIn}
                        onchange={handleInputChange}
                        className={classes.textfieldWidth}
                      />
                    
                    </div>

                    <div>
                      <DatepickerField
                        name="checkOut"
                        label="Check Out Date"
                        value={userFormData.checkOut}
                        onchange={handleInputChange}
                        className={classes.textfieldWidth}
                      />
                     
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        className={classes.searchButton}
                        type="submit"
                      >
                        Search
                      </Button>
                    </div>
                  </div>
                </form>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default withRouter(SearchForm);

