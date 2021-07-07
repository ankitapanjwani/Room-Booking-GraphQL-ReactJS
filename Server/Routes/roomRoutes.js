const express = require('express');
const router = express.Router();
const roomController = require('../Controllers/roomController');



router.post('/postRooms', roomController.postRoomDetails);
router.get('/getRooms/:checkIn', roomController.getAllRooms);
router.get('/getRoom/:roomId', roomController.getroomById);

router.put('/updateRoom/:id', roomController.updateRoomDates)
module.exports = router;