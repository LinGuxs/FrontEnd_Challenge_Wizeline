import { Selector, t} from 'testcafe';


class ShoppingPage{
    constructor(){
        this.yourCartMsn = Selector(".subheader");
        this.checkOut = Selector(".btn_action.checkout_button");
    }

    async isPageLoaded(){
        return this.yourCartMsn.textContent;

    }
    async clickOnCheckout(){
        await t.click(this.checkOut);
       
    }
  
  
    /// agregar tarea , borrar tarea   ///https://www.saucedemo.com/
   

}export default new ShoppingPage();