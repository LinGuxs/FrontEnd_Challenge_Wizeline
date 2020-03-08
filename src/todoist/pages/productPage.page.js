import { Selector, t} from 'testcafe';

let  msn="";
class ProductPage{
    
    constructor(){
        this.smallRobot = Selector(".peek");
        this.shoppingCart = Selector("#shopping_cart_container");
        this.clickOn3barsMenu = Selector("#menu_button_container > div > div:nth-child(3) > div > button");
        this.clickOnLogout = Selector("#logout_sidebar_link");
        this.clickOnAddItem = Selector("#inventory_container > div > div:nth-child(1) > div.pricebar > button");
        this.inventoryName = Selector(".inventory_item_name");
    }

    async isPageLoaded(){
        return this.smallRobot.exists;

    }
    async logout(){
        await t.click(this.clickOn3barsMenu);
        await t.click(this.clickOnLogout);
    }
    async clickOnCart(){
        await t.click(this.shoppingCart);
    }
    
    async addAnItem(VAR){
            
    let btn = Selector("#inventory_container > div > div:nth-child("+VAR+") > div.pricebar > button"); 
    //const text = await Selector('.my-form > a').innerText;
    msn = await Selector(this.inventoryName).innerText;
    //msn = this.inventoryName.textContent;
    //console.log("Lo que vale msn es",msn);

    await t.click(btn); 
    }
    async itemAdded(){
       
        return msn;
        }
    
    
   

}export default new ProductPage();