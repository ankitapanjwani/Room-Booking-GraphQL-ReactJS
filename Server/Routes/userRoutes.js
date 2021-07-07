const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');


// router.get('/home', (req,res)=>{
//     res.json({
//         body:{
//             message: 'Room application first get api'
//         }
//     });
// });


router.post('/addUserDetails', userController.postUserDetails);
router.get('/getUser/:id', userController.getUserDetails);

router.put('/updateUserDetails/:id', userController.updateUserDetails);

module.exports = router;