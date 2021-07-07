import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import RoomsList from "../AllRoomsList/RoomsList";
import Loader from "react-loader-spinner";
import { GET_AllROOMS } from "../../queries/queries";
import { useQuery } from "@apollo/client";

function useDataQuery() {
  return new URLSearchParams(useLocation().search);
}
function AvailableRooms(props) {
  let query = useDataQuery();
  const [allrooms, setallRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  let checkInDateFinal = query.get("checkIn");

  console.log("CHECKIN DATE IN AVAILABLE ROOMS PAGE", checkInDateFinal);
  
  const { data } = useQuery(GET_AllROOMS, {
    variables: { checkIn: checkInDateFinal },
  });
  // console.log("all rooms data", data.rooms);

  useEffect(() => {
    console.log("IN USEEFFECT");
    if (data) {
      console.log("Inside useffect IF Block , DATA IS:", data.rooms);
      setallRooms(data.rooms);
      setLoading(false);
    }
  }, [data]);

  return (
    <React.Fragment>
      <Header />

      {loading ? (
        <div
          style={{
            width: "100%",
            height: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <RoomsList rooms={allrooms} />
      )}
      <Footer />
    </React.Fragment>
  );
}

export default AvailableRooms;
