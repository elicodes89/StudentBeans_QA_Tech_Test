const { Given, When, Then } = require('@cucumber/cucumber')
const TrendingOffersPageObject = require('../pageObjects/trendingOffersPageObject')

const trendingOffersPageObject = new TrendingOffersPageObject()

Given('I am on the studentbeans homepage', async () => {
    await simpleSearchPageObject.goToHomePage()
    await simpleSearchPageObject.verifyHomePage()
  })

When('I click on {string} navigation link', async (navigation) => {
    await trendingOffersPageObject.clickNavigationButton(navigation)
  })


 When('I select the 6th discount from the navigation list', async(item) => {
    await trendingOffersPageObject.selectItemFromList(item)
  })

 Then ('I should see the correct discount details from the selected trend', async() =>{
    await trendingOffersPageObject.verifyDiscountAppears()
  }) 