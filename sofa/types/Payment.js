const numberToBN = require('number-to-bn');
const SOFAObject = require("../SOFAObject.js");

class Payment extends SOFAObject {
  preprocess(content) {
    this.value = numberToBN(content.value);
    content.value = '0x' + this.value.toString(16);
  }
}

module.exports = Payment;
