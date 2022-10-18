const crypto = require("crypto");
const token = crypto.randomBytes(48).toString("hex");

console.log(token);
