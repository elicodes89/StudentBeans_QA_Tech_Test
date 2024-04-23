const { expect , assert } = require('chai')

class ParentPageObject {
  async isElementEqualToExpected (element, expectedText) {
    const errorMessage = 'Actual does not match expected'
    assert(await expect(await element.getText(), errorMessage).to.equal(expectedText))
  }

  async isElementDisplayed (element){
    const errorMessage = 'Element is not displayed'
    assert(await expect(await element, errorMessage).be.true)
  }
}

module.exports = ParentPageObject
