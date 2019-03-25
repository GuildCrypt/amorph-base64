const converters = require('./')
const chai = require('chai')

chai.should()

describe('converters', () => {

  it('should .to', () => {
    converters.to(new Uint8Array([0, 1, 2, 253, 254, 255])).should.equal('AAEC/f7/')
  })
  it('should .from', () => {
    converters.from('AAEC/f7/').should.deep.equal(new Uint8Array([0, 1, 2, 253, 254, 255]))
  })
})
