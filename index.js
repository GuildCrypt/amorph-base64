const AmorphConverter = require('amorph-converter')
const base64Encoder = require('base64-js')

module.exports = new AmorphConverter((uint8Array) => {
  return base64Encoder.fromByteArray(uint8Array)
}, (base64) => {
  return base64Encoder.toByteArray(base64)
})
