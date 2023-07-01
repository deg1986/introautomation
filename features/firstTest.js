import { Selector, t } from 'testcafe';

const urlBase = 'https://demoqa.com/login';
const username = 'demoautomation';
const password = 'Demoautomation01!';


fixture `First Test`// declare the fixture
    .page(urlBase)
    

test('Check page of testing', async t => { //declare of test
//declare all action and asserts of test
var logo = Selector('img').withAttribute('src','/images/Toolsqa.jpg');
var inputUserName = Selector('#userName');
var inputPassword = Selector('input').withAttribute('type','password');
var buttonLogin = Selector('#login');

//declare asserts
   await t 
        .wait(2000)
        .expect(logo.exists).ok('The logo is not ok')
        .expect(inputUserName.exists).ok('The username input is not ok')
        .expect(inputPassword.exists).ok('The username input is not ok')
        .expect(buttonLogin.exists).ok('The username input is not ok')
        .expect(buttonLogin.withText('Login').exists).ok('The text in button is not ok');

//declare actions
    await t
        .typeText(inputUserName, username)
        .typeText(inputPassword, password)
        //.wait(4000)
        .click(buttonLogin);
});