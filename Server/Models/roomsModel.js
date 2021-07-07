const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomCategory: {
    type: String,
    required: true,
  },
  roomPrice: {
    type: Number,
    required: true,
  },
  roomImages: [
    {
      type: String,
      required: true,
    },
  ],
  roomDescription: {
    type: String,
    required: true,
  },
  roomSize: {
    type: Number,
    required: true,
  },
  maxCapacityOfpersons: {
    type: Number,
    required: true,
  },
  extraFacilities: [
    {
      type: String,
      required: true,
    },
  ],
  bookedFrom: {
    type: Date,
  
    required: true,
  },
  bookedTill: {
    type: Date,
   
    required: true,
  },

  




















  // ======================= INCLUDING BOOKING SCHEMA ======================

  // booking: [
  //             {
  //                 availableFrom: {
  //                     type: Date,
  //                     default: Date.now(),
  //                     required: true
  //                 },
  //                 availableTo:{
  //                     type: Date,
  //                     default: Date.now(),
  //                     required: true
  //                 },
  //             }
  //         ]
});

module.exports = mongoose.model("rooms", roomSchema);
