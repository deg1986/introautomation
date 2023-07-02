import ApiPage from '../pages/apiPage'

const apiPage = new ApiPage();
const urlBase = 'https://demoqa.com/Account/v1/Authorized';
const username = 'demoautomation';
const password = 'Demoautomation01!';



fixture `Api Test`// declare the fixture
    .page(urlBase)
    

test('Check using api test', async t => { //declare of test
    await apiPage.checkUserExists(urlBase,username,password);
});

test('List books', async t => { //declare of test
    await apiPage.listBook(username,password);
});