const TelegramBot = require("node-telegram-bot-api");

module.exports.sendMessage = async (message) => {
  try {
    // Create a new instance of the bot with the token.
    const bot = new TelegramBot(process.env["TELEGRAM_BOT_TOKEN"], {
      polling: false,
    }); // Set polling to true if you want to receive updates through polling.

    const chatIds = [
      // Samer
      "1492039753",
      // Group
      "-4645717516",
    ];

    // Send the message to the specified chats.
    chatIds.forEach(async (chatId) => {
      try {
        await bot.sendMessage(chatId, message);
      } catch (err) {
        console.log(err.message);
      }
    });
  } catch (err) {
    //
  }
};
