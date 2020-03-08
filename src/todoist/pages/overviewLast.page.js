import { Selector, t} from 'testcafe';

var number="";
class OverviewPage{
    
    constructor(){
        this.overviewPage = Selector(".subheader");
        this.inventory = Selector(".inventory_item_name");
        this.finish = Selector(".btn_action.cart_button");
        
    
      }

    async isPageLoaded(){
        return this.overviewPage.exists;

    }
    async ValidateItem(){
        return this.inventory.textContent;
       
    }
    async ClickFinish(){
        
        await t.click(this.finish); 
       
    }


}export default new OverviewPage();