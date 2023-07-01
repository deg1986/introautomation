import { Selector, t } from 'testcafe';

export default class Page {
  constructor() {
    this.logo = Selector('img').withAttribute('src','/images/Toolsqa.jpg');
    this.inputUserName = Selector('#userName');
    this.inputPassword = Selector('input').withAttribute('type','password');
    this.buttonLogin = Selector('#login');
  }

async checkForm(){
    await t 
        .wait(2000)
        .expect(this.logo.exists).ok('The logo is not ok')
        .expect(this.inputUserName.exists).ok('The username input is not ok')
        .expect(this.inputPassword.exists).ok('The username input is not ok')
        .expect(this.buttonLogin.exists).ok('The username input is not ok')
        .expect(this.buttonLogin.withText('Login').exists).ok('The text in button is not ok');
}



async completeLoginForm(user, pass){
    await t
        .typeText(this.inputUserName, user)
        .typeText(this.inputPassword, pass)
        .wait(4000)
    }

async clickLoginButton(){
    await t
        .click(this.buttonLogin);
}

    
    


}