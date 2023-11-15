const Razorpay = require('razorpay');
require('dotenv').config();

let instance = new Razorpay({ key_id: process.env.razorpay_key_id, key_secret: process.env.razorpay_key_secret });

var options = {
    amount: 50000,  // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11"
};
instance.orders.create(options, function (err, order) {
    console.log(order);
});
