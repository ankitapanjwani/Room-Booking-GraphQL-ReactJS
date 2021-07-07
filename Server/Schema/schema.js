const graphql = require("graphql");
const { GraphQLDate } = require("graphql-iso-date");
const Room = require("../Models/roomsModel");
const User = require("../Models/userModel");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
} = graphql;


const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    checkIn: { type: GraphQLDate },
    checkOut: { type: GraphQLDate },
  }),
});

const RoomType = new GraphQLObjectType({
  name: "Room",
  fields: () => ({
    id: { type: GraphQLID },
    roomCategory: { type: GraphQLString },
    roomPrice: { type: GraphQLInt },
    roomImages: { type: GraphQLList(GraphQLString) },
    roomDescription: { type: GraphQLString },
    roomSize: { type: GraphQLInt },
    maxCapacityOfpersons: { type: GraphQLInt },
    extraFacilities: { type: GraphQLList(GraphQLString) },
    bookedFrom: { type: GraphQLDate },
    bookedTill: { type: GraphQLDate },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        // console.log("users data:", parent); // find all users
        // return users
        return User.find({});
      },
    },

    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id); //finds user by id from User Model
      },
    },

    rooms: {
      type: new GraphQLList(RoomType),
      args: {
        checkIn: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        return Room.find({
          $and: [
            {
              bookedFrom: {
                $lt: new Date(args.checkIn),
              },
            },
            {
              bookedTill: {
                $lt: new Date(args.checkIn),
              },
            },
          ],
        });
      },
    },

    room: {
      type: RoomType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Room.findById(args.id); //finds room by id from User Model
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    //ADD USER MUTATION
    addUser: {
      type: UserType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        checkIn: { type: new GraphQLNonNull(GraphQLString) },
        checkOut: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        console.log("Inside add User Mutation");
        let user = new User({
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          checkIn: new Date(args.checkIn),
          checkOut: new Date(args.checkOut),
        });

        return user.save();
      },
    },

    //UPDATE USER MUTATION

    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        checkIn: { type: GraphQLString },
        checkOut: { type: GraphQLString },
      },
      resolve(parent, args) {
        return new Promise((resolve, reject) => {
          console.log("inside update");
          User.findOneAndUpdate(
            { _id: args.id },
            {
              $set: {
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email,
                checkIn: new Date(args.checkIn),
                checkOut: new Date(args.checkOut),
              },
            },
            { new: true }
          ).exec((err, res) => {
            if (err) reject(err);
            else resolve(res);
          });
        });
      },
    },

    // DELETE USER MUTATION
    deleteUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return new Promise((resolve, reject) => {
          User.deleteOne({ _id: args.id }).exec((err, res) => {
            if (err) reject(err);
            else resolve(res);
          });
        });
      },
    },

    // ADD ROOM MUTATION
    addRoom: {
      type: RoomType,
      args: {
        roomCategory: { type: new GraphQLNonNull(GraphQLString) },
        roomPrice: { type: new GraphQLNonNull(GraphQLInt) },
        roomImages: { type: new GraphQLNonNull(GraphQLList(GraphQLString)) },
        roomDescription: { type: new GraphQLNonNull(GraphQLString) },
        roomSize: { type: new GraphQLNonNull(GraphQLInt) },
        maxCapacityOfpersons: { type: new GraphQLNonNull(GraphQLInt) },
        extraFacilities: {
          type: new GraphQLNonNull(GraphQLList(GraphQLString)),
        },
        bookedFrom: { type: new GraphQLNonNull(GraphQLString) },
        bookedTill: { type: new GraphQLNonNull(GraphQLString) },
      },

      resolve(parent, args) {
        let room = new Room({
          roomCategory: args.roomCategory,
          roomPrice: args.roomPrice,
          roomImages: args.roomImages,
          roomDescription: args.roomDescription,
          roomSize: args.roomSize,
          maxCapacityOfpersons: args.maxCapacityOfpersons,
          extraFacilities: args.extraFacilities,
          bookedFrom: new Date(args.bookedFrom),
          bookedTill: new Date(args.bookedTill),
        });

        return room.save();
      },
    },
    // UPDATE ROOM MUTATION
    updateRoom: {
      type: RoomType,
      args: {
        id: { type: GraphQLID },
        roomCategory: { type: new GraphQLNonNull(GraphQLString) },
        roomPrice: { type: new GraphQLNonNull(GraphQLInt) },
        roomImages: { type: new GraphQLNonNull(GraphQLList(GraphQLString)) },
        roomDescription: { type: new GraphQLNonNull(GraphQLString) },
        roomSize: { type: new GraphQLNonNull(GraphQLInt) },
        maxCapacityOfpersons: { type: new GraphQLNonNull(GraphQLInt) },
        extraFacilities: {type: new GraphQLNonNull(GraphQLList(GraphQLString))},
        bookedFrom: { type: new GraphQLNonNull(GraphQLString) },
        bookedTill: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        return new Promise((resolve, reject) => {
          Room.findOneAndUpdate(
            { _id: args.id },
            {
              $set: {
                roomCategory: args.roomCategory,
                roomPrice: args.roomPrice,
                roomImages: args.roomImages,
                roomDescription: args.roomDescription,
                roomSize: args.roomSize,
                maxCapacityOfpersons: args.maxCapacityOfpersons,
                extraFacilities: args.extraFacilities,
                bookedFrom: args.bookedFrom,
                bookedTill: args.bookedTill,
              },
            },
            { new: true }
          ).exec((err, res) => {
            if (err) reject(err);
            else resolve(res);
          });
        });
      },
    },

      //update rooms
    updateRoomWithDates: {
      type: RoomType,
      args: {
        id: { type: GraphQLID },
        checkIn: { type: GraphQLString },
        checkOut: { type: GraphQLString }
       
      },
      resolve(parent, args) {
        return new Promise((resolve, reject) => {
          Room.findOneAndUpdate(
            { _id: args.id },
            {
              $set: {
                bookedFrom: args.checkIn,
                bookedTill: args.checkOut,
              },
            },
            { new: true }
          ).exec((err, res) => {
            if (err) reject(err);
            else resolve(res);
          });
        });
      },
    },

    // DELETE ROOM
    deleteRoom: {
      type: RoomType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return new Promise((resolve, reject) => {
          Room.deleteOne({ _id: args.id }).exec((err, res) => {
            if (err) reject(err);
            else resolve(res);
          });
        });
      },
    },
  },
});

module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
