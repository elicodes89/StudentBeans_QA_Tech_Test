const ParentPageObject = require('./parentPageObject')
class SimpleSearchPageObject extends ParentPageObject {
  async goToHomePage () {
    await browser.url('')
  }
  async verifyHomePage () {
    const acceptCookiesButton = $('button=Accept All Cookies')
    acceptCookiesButton.click()
    await this.isElementEqualToExpected($('h2=Student deals of the day'), 'Student deals of the day')
  }
  async clickSearchButton(){
    const searchButton = $('button[data-testid="nav-search-desktop"]')
    searchButton.click()
       
  }
  async verifySearchModalDisplayed(){
    const searchModal = await $('div[data-testid="modal-overlay"]')
    await searchModal.waitForDisplayed()
    const isDisplayed = await searchModal.isDisplayed()
    await this.isElementDisplayed(isDisplayed) 
  }
  async enterSearchValue(searchValue){
    const searchInput = await $('input[data-testid="search-input"]')
    await searchInput.setValue(searchValue)
  }

  async selectSearchListing(item, expectedResult){
    const results = await $(`div.css-7ew2lb:nth-child(${item})`).$('a').$('div:nth-child(2)').$('p:nth-child(1)')
    await browser.waitUntil(async () => {
      return (await results.getText())
    })
    await this.isElementEqualToExpected(results, expectedResult)
  }
}
module.exports = SimpleSearchPageObject
