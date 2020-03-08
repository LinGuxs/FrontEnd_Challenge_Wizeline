import { Selector, t} from 'testcafe';


class LoginSaucePage {
/**
 * 
 * 
*/

    constructor(){
       
       
        this.loginUser = Selector('#user-name');
        this.passwordField=Selector('#password');
        this.loginButton=Selector('.btn_action');
        this.errorBanner=Selector('#login_button_container > div > form > h3');
        this.botimage=Selector('.bot_column');
        
    }

    async login(USER, password){
        
        await t.typeText(this.loginUser, USER);
        await t.typeText(this.passwordField, password);
        await t.click(this.loginButton);
    
    }
    async ErrorBanner(){
        return this.errorBanner.textContent;
       
    }
    async isPageLoaded(){
        return this.botimage.exists;
       
    }

   
}
export default new LoginSaucePage();