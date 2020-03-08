import { Selector, t} from 'testcafe';

var number="";
class CheckOutPage{
    
    constructor(){
        this.continue = Selector(".btn_primary.cart_button");
        this.checkErrorMsn = Selector("#checkout_info_container > div > form > h3");
        this.firstName =Selector("#first-name"); 
        this.lastName =Selector("#last-name"); 
        this.zipcode =Selector("#postal-code"); 
      }

    async isPageLoaded(){
       // return this.smallRobot.exists;

    }
   
    async clickOnContinue(){
        await t.click(this.continue);
       
    }
    async ErrorBannerInfo(){
        return this.checkErrorMsn.textContent;
       
    }
    async fillData(first, last,zip){
        
        await t.typeText(this.firstName, first);
        await t.typeText(this.lastName, last);
        await t.typeText(this.zipcode, zip);
        await t.click(this.continue);
        
    
    }
    
    
    
    
   

}export default new CheckOutPage();