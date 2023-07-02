import { t } from 'testcafe';

export default class Page {
  constructor() {
    
  }

async checkExistsUser(url,user,pass){
    var request = require('request');
    var options = {
    'method': 'POST',
    'url': url,
    'headers': {
        'accept': 'application/json',
        'authorization': 'Basic ZGVtb2F1dG9tYXRpb246RGVtb2F1dG9tYXRpb24wMSE=',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "userName": user,
        "password": pass
    })

    };
    var responseComplete = new Promise((resolve) => {
        request(options, function (error, response) {
            if (error) throw new Error(error);
                resolve(response);
            });

    });
    return responseComplete;   
}

async getToken(url,user,pass){
    var request = require('request');
    var options = {
    'method': 'POST',
    'url': url,
    'headers': {
        'accept': 'application/json',
        'authorization': 'Basic ZGVtb2F1dG9tYXRpb246RGVtb2F1dG9tYXRpb24wMSE=',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "userName": user,
        "password": pass
    })

    };
    var token = new Promise((resolve) => {
        request(options, function (error, response) {
        if (error) throw new Error(error);
        var obj = JSON.parse(response.body);
        //console.log(obj.token);
        resolve(obj.token);
        });
    });
    return token;
}


async getBooksUser(url, token){
    var tokenComplete = 'Bearer '+token;
    var idUser = '7d6af6c3-29da-4ed0-b6e0-d47c31c3486e';
    var request = require('request');
    var options = {
    'method': 'GET',
    'url': url+idUser,
    'headers': {
        'Authorization': tokenComplete
    }
    };
    var books = new Promise((resolve) => {
        request(options, function (error, response) {
        if (error) throw new Error(error);
        var obj = JSON.parse(response.body);
        console.log(obj);
        resolve(obj.books)
        });
    });
    return books;

}



}