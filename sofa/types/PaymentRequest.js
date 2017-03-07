const numberToBN = require('number-to-bn');
const SOFAObject = require("../SOFAObject.js");

class PaymentRequest extends SOFAObject {
  preprocess(content) {
    this.value = numberToBN(content.value);
    content.value = '0x' + this.value.toString(16);
  }
}

module.exports = PaymentRequest;
