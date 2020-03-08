import LoginSaucePage from '../pages/loginSauce.page.js';
import ProductPage from '../pages/productPage.page.js';
import ShoppingPage from '../pages/shoppingCart.page.js';
import CheckOutPage from '../pages/checkOutInfo.page.js';
import OverviewPage from '../pages/overviewLast.page.js';
import FinishPage from '../pages/finish.page.js';
import { Selector, t} from 'testcafe';
//const EMAIL = process.env.TODOIST_EMAIL;
//const PASSWORD = process.env.TODOIST_PASSWORD;
const USER = "standard_user";
const FIRST = "gux";
const FIRST2 = "gux2";
const LAST = "nava";
const INVALID = "sdfd";
const PASSWORD = "secret_sauce";
const ZIP = "90210";
let VAR =1;

fixture('Login Test sauce' ).page('https://www.saucedemo.com');
                               
test('1-  Login with a valid user', async t => {
    await LoginSaucePage.login(USER,PASSWORD);
    await t.expect(await ProductPage.isPageLoaded()).ok();    
});
/*
test.skip('Login with a invalid user', async t => {
   
    const btn = Selector('#login_button_container > div > form > h3'); 
    await LoginSaucePage.login(INVALID,PASSWORD);
    await t.expect(btn.textContent).contains('Epic sadface: ');
    
});*/
test('2- Login with a invalid user', async t => {
   
    await LoginSaucePage.login(INVALID,PASSWORD);
    await t.expect(await LoginSaucePage.ErrorBanner()).contains('Epic sadface: ');   
 
});
test('3- Logout from product’s page', async t => {
   
    await LoginSaucePage.login(USER,PASSWORD);
    await ProductPage.logout();
    await t.expect(await LoginSaucePage.isPageLoaded()).ok();  
});
test('4- Navigate to the shopping cart', async t => {
   
    await LoginSaucePage.login(USER,PASSWORD);
    await t.expect(await ProductPage.isPageLoaded()).ok();  
    await ProductPage.clickOnCart();  
    await t.expect(await ShoppingPage.isPageLoaded()).contains('Your Cart');  
   
});
test('5- Add a single item to the shopping cart', async t => {
   
    await LoginSaucePage.login(USER,PASSWORD);
    await t.expect(await ProductPage.isPageLoaded()).ok();
    await ProductPage.addAnItem(VAR);  
    await ProductPage.clickOnCart();  
    await t.expect(await ShoppingPage.isPageLoaded()).contains('Your Cart');  
  
   
});

test('7- Continue with missing information', async t => {
   
    await LoginSaucePage.login(USER,PASSWORD);
    await t.expect(await ProductPage.isPageLoaded()).ok();
    await ProductPage.addAnItem(VAR);  
    await ProductPage.clickOnCart(); 
    await ShoppingPage.clickOnCheckout(); 
    await CheckOutPage.clickOnContinue();
    await t.expect(await CheckOutPage.ErrorBannerInfo()).contains('Error: '); 
    
});
test('8- Fill user’s information', async t => {
   
    await LoginSaucePage.login(USER,PASSWORD);
    await t.expect(await ProductPage.isPageLoaded()).ok();
    await ProductPage.addAnItem(VAR);  
    await ProductPage.clickOnCart(); 
    await ShoppingPage.clickOnCheckout(); 
    await CheckOutPage.fillData(FIRST,LAST,ZIP);
    await t.expect(await OverviewPage.isPageLoaded()).ok(); 
    ///await CheckOutPage.clickOnContinue();
    
    
});
test('9- Final order items', async t => {
   
    await LoginSaucePage.login(USER,PASSWORD);
    await t.expect(await ProductPage.isPageLoaded()).ok();
    await ProductPage.addAnItem(VAR);  
    let data = ProductPage.itemAdded();
    let data2 = (await data).toString();
    console.log("Lo que vale data",data2);
    await ProductPage.clickOnCart(); 
    await ShoppingPage.clickOnCheckout(); 
    await CheckOutPage.fillData(FIRST2,LAST,ZIP);  
    await t.expect(await OverviewPage.isPageLoaded()).ok(); 
    await t.expect(await OverviewPage.ValidateItem()).contains(data2); 
   
});
test('10- Final order items', async t => {
   
    await LoginSaucePage.login(USER,PASSWORD);
    await t.expect(await ProductPage.isPageLoaded()).ok();
    await ProductPage.addAnItem(VAR);  
    let data = ProductPage.itemAdded();
    let data2 = (await data).toString();
    console.log("Data value",data2);
    await ProductPage.clickOnCart(); 
    await ShoppingPage.clickOnCheckout(); 
    await CheckOutPage.fillData(FIRST,LAST,ZIP);  
    await t.expect(await OverviewPage.isPageLoaded()).ok(); 
    await t.expect(await OverviewPage.ValidateItem()).contains(data2); 
    await OverviewPage.ClickFinish();   
    await t.expect(await FinishPage.isPageLoaded()).ok();  
});
test('6- Add multiple items to the shopping cart', async t => {
   
    await LoginSaucePage.login(USER,PASSWORD);
    await t.expect(await ProductPage.isPageLoaded()).ok();
    
    for (VAR;VAR<=5;VAR++){
        await ProductPage.addAnItem(VAR);  
       
    }
    await ProductPage.clickOnCart();  
    await t.expect(await ShoppingPage.isPageLoaded()).contains('Your Cart'); 
      
   
});






