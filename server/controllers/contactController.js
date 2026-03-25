exports.sendMessage = (req, res) => {
  const { name, email, message } = req.body;

  console.log("New Message:");
  console.log(name, email, message);

  res.json({
    success: true,
    message: "Message received!",
  });
};