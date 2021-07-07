import LandingPage from "./Pages/LandingPage/LandingPage";
import { Route, Switch } from "react-router-dom";
import RoomSearch from "./Pages/RoomSearchPage/RoomSearch";
import Error from "./Components/Error/Error";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AvailableRooms from "./Pages/AvailableRoomsPage/AvailableRooms";
import RoomDetails from "./Pages/RoomDetailPage/RoomDetails";
import Receipt from "./Components/RoomReceipt/Receipt";
import { useState, createContext, useEffect } from "react";
import { GET_USER_BY_ID } from "../src/queries/queries";
import {  useQuery } from "@apollo/client";

export const UserContext = createContext();

// const client = new ApolloClient({
//   uri: "http://localhost:8000/graphql",
//   cache: new InMemoryCache(),
// });

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  checkIn: new Date(),
  checkOut: new Date(),
};
function App() {

  let userFinalId = JSON.parse(localStorage.getItem("UserId"));
  
    const { data } = useQuery(GET_USER_BY_ID, {
      variables: { id: userFinalId },
    });
  const [usersFormData, setUsersFormdata] = useState(initialState);
  const [userEmail, setUserEmail] = useState("");
 




  //will need below useeffect in case of  refresh in receipt page


  useEffect(() => {
    
    if(data){
      console.log("RESPONSE USER IN APP JS", data);
      setUsersFormdata(data.user);
      setUserEmail(data.user.email);

    }
      
  }, [data]);

  return (
    <div>
      {/* <ApolloProvider client={client}> */}
      <UserContext.Provider
        value={{
          usersData: [usersFormData, setUsersFormdata],
          userDataEmail: [userEmail, setUserEmail],
        }}
      >
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/roomSearch" component={RoomSearch} exact />
          <Route path="/allRooms" component={AvailableRooms} exact />
          <Route path="/room-booking-receipt" component={Receipt} exact />
          <Route path="/getRoom/:id" component={RoomDetails} exact />
          <Route component={Error} />
        </Switch>
      </UserContext.Provider>
        {/* </ApolloProvider> */}
    </div>
  );
}

export default App;
