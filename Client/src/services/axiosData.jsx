import axios  from 'axios';
export const getUsersData = async (id) => {
    const res = await axios.get(`http://localhost:5000/user/getUser/${id}`);
    return res.data;
  
  }

  export const postUsersData = async (userDetails) => {
    const res = await axios.post(
      "http://localhost:5000/user/addUserDetails",
      userDetails
    );
    return res.data;
    
    
    // console.log("POST USERS DETAILS IN AXIOSDATA", res);
  }