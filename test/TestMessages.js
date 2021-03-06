const numberToBN = require('number-to-bn')

module.exports = {
  INVALID_TYPE: 'SOFA::BadType:{"body": "Hello"}',
  EMPTY_MESSAGE: 'SOFA::Message:{}',
  VALID_COMPLEX: "SOFA::Message:{\"body\":\"Thank you for using Toshi during our developer preview. We've now launched a mainnet version of Toshi (this means we now support real Ether!) You'll need to download the new version of the Toshi app to continue using Toshi. \n\nAndroid users can go ahead and download the new app here: https:\/\/play.google.com\/store\/apps\/details?id=org.toshi \nThe iOS version will be out soon, hang on tight!\n\nYou can read more about the mainnet launch on our blog here: https:\/\/blog.toshi.org\/\"}",
  VALID_COMPLEX_2: "SOFA::Message:{\"body\":\"hello\u2028world\"}",
  VALID_PAYMENT_REQUEST: {
    value: "0xf4240",
    destinationAddress: "0xcd111aa492a9c77a367c36e6d6af8e6f212e0c8e"
  },
  VALID_PAYMENT: {
    status: "unconfirmed",
    value: "0xf4240",
    txHash: "0x3c7e53ece52a652412faec70d23ef67b3ca056ff8973b021a3aa91a66ab77c60",
    fromAddress: "0x00472c1e4275230354dbe5007a5976053f12610a",
    toAddress: "0xcd111aa492a9c77a367c36e6d6af8e6f212e0c8e"
  },
  NUMERIC_PAYMENT: {
    status: "unconfirmed",
    value: 1000000,
    txHash: "0x3c7e53ece52a652412faec70d23ef67b3ca056ff8973b021a3aa91a66ab77c60",
    fromAddress: "0x00472c1e4275230354dbe5007a5976053f12610a",
    toAddress: "0xcd111aa492a9c77a367c36e6d6af8e6f212e0c8e"
  },
  NUMERIC_STRING_PAYMENT: {
    status: "unconfirmed",
    value: "1000000",
    txHash: "0x3c7e53ece52a652412faec70d23ef67b3ca056ff8973b021a3aa91a66ab77c60",
    fromAddress: "0x00472c1e4275230354dbe5007a5976053f12610a",
    toAddress: "0xcd111aa492a9c77a367c36e6d6af8e6f212e0c8e"
  },
  BN_PAYMENT: {
    status: "unconfirmed",
    value: numberToBN(1000000),
    txHash: "0x3c7e53ece52a652412faec70d23ef67b3ca056ff8973b021a3aa91a66ab77c60",
    fromAddress: "0x00472c1e4275230354dbe5007a5976053f12610a",
    toAddress: "0xcd111aa492a9c77a367c36e6d6af8e6f212e0c8e"
  },
  INCOMPLETE_PAYMENT: {
    status: "unconfirmed",
  }
}
