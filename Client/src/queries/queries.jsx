import { gql } from "@apollo/client";

const POST_USER = gql`
  mutation (
    $firstName: String!
    $lastName: String!
    $email: String!
    $checkIn: String!
    $checkOut: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      checkIn: $checkIn
      checkOut: $checkOut
    ) {
      id
      firstName
      lastName
      email
      checkIn
      checkOut
    }
  }
`;

const GET_USER_BY_ID = gql`
  query ($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
      email
      checkIn
      checkOut
    }
  }
`;

const UPDATE_USER = gql`
  mutation (
    $id: ID!
    $firstName: String!
    $lastName: String!
    $email: String!
    $checkIn: String!
    $checkOut: String!
  ) {
    updateUser(
      id: $id
      firstName: $firstName
      lastName: $lastName
      email: $email
      checkIn: $checkIn
      checkOut: $checkOut
    ) {
      id
      firstName
      lastName
      email
      checkIn
      checkOut
    }
  }
`;

const GET_AllROOMS = gql`
  query ($checkIn: String!) {
    rooms(checkIn: $checkIn) {
      id
      roomCategory
      roomPrice
      roomImages
    }
  }
`;

const GET_ROOM_BY_ID = gql`
  query ($id: ID!) {
    room(id: $id) {
      id
      roomCategory
      roomPrice
      roomImages
      roomDescription
      roomSize
      maxCapacityOfpersons
      extraFacilities
      bookedFrom
      bookedTill
    }
  }
`;

const UPDATE_ROOM = gql`
mutation($id: ID!,$checkIn: String!,$checkOut: String!){
  updateRoomWithDates(id: $id, checkIn: $checkIn, checkOut: $checkOut){
    id
    roomCategory
    roomPrice
    roomImages
    roomDescription
    roomSize
    maxCapacityOfpersons
    extraFacilities
    bookedFrom
    bookedTill
  }
}
`;
export { POST_USER, GET_USER_BY_ID, UPDATE_USER, GET_AllROOMS, GET_ROOM_BY_ID,UPDATE_ROOM};
