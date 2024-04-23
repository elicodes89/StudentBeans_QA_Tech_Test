const ParentPageObject = require('./parentPageObject')

class TrendingOffersPageObject extends ParentPageObject{
    
        async clickNavigationButton(){
            const navigationButton = $('a[data-testid="nav-category-trending-now"]')
            navigationButton.click() 
        }
    
        async verifyTrendingPage () {
          await this.isElementEqualToExpected($('h1=The latest and best student discounts'), 'The latest and best student discounts')
        }
    
        async selectItemFromList(item){
          const element = await $(`div.css-1b0petf:nth-child(${item})`)
          element.click()
        }
    
        async verifyDiscount(){
          const element = await $('div[data-testid="native-offer-0"]');
          const isDisplayed = await element.isDisplayed()
          await this.isElementDisplayed(isDisplayed) 
        }
    }

module.exports = TrendingOffersPageObject