import { t } from 'testcafe';
import ExampleApi from '../api/example'

const exampleApi = new ExampleApi();

export default class Page {
  constructor() {
    
  }

async checkUserExists(url,user,pass){
    var response = await exampleApi.checkExistsUser(url,user,pass)
    await t
      .expect(response.statusCode).eql(200)
      .expect(response.body).eql('true');    
}

async listBook(user,pass){
  var urlToken = 'https://demoqa.com/Account/v1/GenerateToken';
  var urlBooks = 'https://demoqa.com/Account/v1/User/';

  var token = await exampleApi.getToken(urlToken,user,pass);
  //console.log(token);
  var listBooks = await exampleApi.getBooksUser(urlBooks, token);
  console.log(listBooks.books)
}



}