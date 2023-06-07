const errorHandlerMiddleware = async (err, req, res, next) => {
  if (err instanceof Error) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again" });
};

export default errorHandlerMiddleware;
