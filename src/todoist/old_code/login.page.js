import { Selector, t} from 'testcafe';


class LoginPage {
/**
 * 
 * 
*/


    constructor(){
        //this.loginLink = Selector('ul > li > ').withExactText('Iniciar sesión').nth(1);
        //this.loginLink = Selector('ul > li > a').withExactText('Login').nth(1);
       
        this.loginLink = Selector('ul.W9ktc > li:nth-child(1) > a');
        this.loginFrame = Selector("iframe[src*='showLogin']");
        this.emailField = Selector('#email');
        this.passwordField=Selector('#password');
        this.loginButton=Selector('.submit_btn');
        //this.errorBanner=Selector('.error_msg > span');
    }

    async login(email, password){
        await t.click(this.loginLink);
        //await t.switchToIframe(this.loginFrame);
        //await t.typeText(this.emailField, email);
        //await t.typeText(this.passwordField, password);
        //await t.click(this.loginButton);
        //await t.switchToMainWindow();
        
    
    }

    async errorBanner(){
        //return this.errorBanner.exists;
        await t.switchToIframe(this.loginFrame);
        return this.errorBanner.exists;
     


        /*
        return (await t.expect(this.todoistIcon.exists).ok())
        && return (await t.expect(this.todoistIcon.exists).ok());

        */
    }
    // await t.expect(Selector('div.error_block > div > span').withText('ERROR').exists).ok();

   
}
export default new LoginPage();