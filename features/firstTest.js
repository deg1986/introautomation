import { Selector, t } from 'testcafe';

const urlBase = 'https://www.saucedemo.com/';
const username = 'standard_user';
const password = 'secret_sauce';


fixture `First Test`// declare the fixture
    .page(urlBase)
    

test('Check page of testing', async t => { //declare of test
//declare all action and asserts of test
var logo = Selector('div').withAttribute('class','login_logo');
var inputUserName = Selector('#user-name');
var inputPassword = Selector('input').withAttribute('name','password');
var buttonLogin = Selector('#login-button');

//declare asserts
   await t 
        .wait(2000)
        .expect(logo.withText('Swag Labs').exists).ok('The logo is not ok')
        .expect(inputUserName.exists).ok('The username input is not ok')
        .expect(inputPassword.exists).ok('The username input is not ok')
        .expect(buttonLogin.exists).ok('The username input is not ok')
        .expect(buttonLogin.withAttribute('value','Login').exists).ok('The text in button is not ok');

//declare actions
    await t
        .typeText(inputUserName, username)
        .typeText(inputPassword, password)
        //.wait(4000)
        .click(buttonLogin);
});