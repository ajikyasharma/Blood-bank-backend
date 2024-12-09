const testController = (req, res) => {
  res.status(200).send({
    message: "test route nodemon",
    success: true,
  });
};

module.exports = { testController };
