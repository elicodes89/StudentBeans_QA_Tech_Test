const { Given, Then, When } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', async () => {
  await simpleSearchPageObject.goToHomePage()
  await simpleSearchPageObject.verifyHomePage()
})

When('I open the search bar' , async () => {
  await simpleSearchPageObject.clickSearchButton()
  await simpleSearchPageObject.verifySearchModalDisplayed()
})

When('I enter {string}', async (searchValue) => {
  await simpleSearchPageObject.enterSearchValue(searchValue)
})

Then('I should select the {int}th {string} search listing', async (item, expectedResult) => {
  await simpleSearchPageObject.selectSearchListing(item, expectedResult)
})
