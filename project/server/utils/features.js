export const sendToken = (user, res, message, statusCode) => {
  const token = user.generateToken();

  res
    .status(statusCode)
    .cookie("token", token, {
      ...cookieOptions,
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    })
    .json({
      success: true,
      message,
      token,
    });
};

export const cookieOptions = {
  secure: process.env.NODE_ENV !== "Development",
  httpOnly: process.env.NODE_ENV !== "Development",
  sameSite: process.env.NODE_ENV !== "Development" ? false : "none",
};
