import { Selector, t} from 'testcafe';

var number="";
class FinishPage{
    
    constructor(){
        this.hugePonyIcon = Selector(".subheader");
       
    
      }

    async isPageLoaded(){
        return this.hugePonyIcon.exists;

    }
   


}export default new FinishPage();