import { User } from "../models/user.js";

export const getMyProfile = (req, res, next) => {
  res.send("Profile Data!");
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");
  const isMatch = await user.comparePassword(password);
  
  if (!isMatch) {
    return res.status(400).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  res.status(200).json({
    success: true,
    message: `Welcome back, ${user.name}!`,
    data: user,
  });
};

export const signup = (req, res, next) => {
  const { name, email, password, address, city, country, pinCode } = req.body;

  // Add Cloudinary here
  User.create({
    name,
    email,
    password,
    address,
    city,
    country,
    pinCode,
  });

  res.status(201).json({
    success: true,
    message: "User created successfully!",
  });
};
