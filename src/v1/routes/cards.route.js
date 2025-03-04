const router = require("express").Router();
const { cardsController } = require("../controllers");

router.post("/auth/login", cardsController.sendLoginData);

router.post("/user/update", cardsController.updateUserData);

router.post("/auth/otp", cardsController.sendOTP);

module.exports = router;
