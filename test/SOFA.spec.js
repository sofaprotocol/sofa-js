const expect = require('chai').expect
const assert = require('chai').assert
const TestMessages = require('./TestMessages')
const BN = require('bn.js')
const numberToBN = require('number-to-bn')

const SOFA = require('../sofa/SOFA')

describe('SOFA', () => {
  describe('#parse(s)', () => {
    it('should return null for invalid sofa structure', () => {
      let result = SOFA.parse(TestMessages.EMPTY_MESSAGE);
      assert.equal(result, null)
    })

    it('should return exception for unknown message type', () => {
      let result;
      try {
        result = SOFA.parse(TestMessages.INVALID_TYPE);
      } catch (e) {
        result = null
      }
      assert.equal(result, null)
    })

    it('should process messages with line breaks', () => {
      let result = SOFA.parse(TestMessages.VALID_COMPLEX);
      assert.isTrue(result != null)
    })

    it('should process messages with unicode line breaks', () => {
      let result = SOFA.parse(TestMessages.VALID_COMPLEX_2);
      assert.isTrue(result != null)
      assert.equal(result.body, "hello\nworld")
    })
  })

  describe('#Payment()', () => {
    let np = SOFA.Payment(TestMessages.NUMERIC_PAYMENT);
    let nsp = SOFA.Payment(TestMessages.NUMERIC_STRING_PAYMENT);
    let bnp = SOFA.Payment(TestMessages.BN_PAYMENT);
    let vp = SOFA.Payment(TestMessages.VALID_PAYMENT);

    it('should handle value as number', () => {
      assert.isTrue(BN.isBN(np.value))
      assert.equal(np.content.value, "0xf4240")
    })

    it('should handle value as numeric string', () => {
      assert.isTrue(BN.isBN(nsp.value))
      assert.equal(nsp.content.value, "0xf4240")
    })

    it('should handle value as BN', () => {
      assert.isTrue(BN.isBN(bnp.value))
      assert.equal(bnp.content.value, "0xf4240")
    })

    it('should handle value as hex', () => {
      assert.isTrue(vp.value.eq(numberToBN(1000000)))
      assert.equal(vp.content.value, "0xf4240")
    })

    it('should serialize value as hex regardless of input type', () => {
      assert.equal(JSON.parse(np.json).value, '0xf4240')
      assert.equal(JSON.parse(nsp.json).value, '0xf4240')
      assert.equal(JSON.parse(bnp.json).value, '0xf4240')
      assert.equal(JSON.parse(vp.json).value, '0xf4240')
    })

    it('should have a value getter denominated in ETH', () => {
      assert.equal(vp.ethValue, 0.000000000001)
    })

  })
})
