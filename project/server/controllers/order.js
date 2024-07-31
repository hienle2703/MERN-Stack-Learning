import { asyncError } from "../middlewares/error.js";
import { Order } from "../models/order.js";
import { Product } from "../models/product.js";

export const createNewOrder = asyncError(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentMethod,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
  } = req.body;

  await Order.create({
    user: req.user._id,
    shippingInfo,
    orderItems,
    paymentMethod,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
  });

  // Trừ stock của từng sản phẩm sau khi lên đơn
  for (let i = 0; i < orderItems.length; i++) {
    const product = await Product.findOne({ _id: orderItems[i].product });
    product.stock -= orderItems[i].quantity;
    await product.save();
  }

  res.status(201).json({
    success: true,
    message: "Order placed successfully",
  });
});

export const getMyOrders = asyncError(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    orders,
  });
});

export const getOrderDetail = asyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) return next(new ErrorHandler("Order not found", 404));

  res.status(200).json({
    success: true,
    order,
  });
});
