import LoginPage from '../pages/loginPage'

const loginPage = new LoginPage();
const urlBase = 'https://demoqa.com/login';
const username = 'demoautomation';
const password = 'Demoautomation01!';



fixture `Login Test`// declare the fixture
    .page(urlBase)
    

test.skip('Check page of testing', async t => { //declare of test

//asserts for check the page
   await loginPage.checkForm();

//declare actions
    
    await loginPage.completeLoginForm(username,password);
    await loginPage.clickLoginButton();
});