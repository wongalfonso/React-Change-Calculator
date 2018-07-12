const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:8888';

describe('express', function() {
  this.timeout(10000);
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should load successfully', () => axios.get(url).then(r => expect(r.status === 200)));

  it('should calculate total change correctly', () =>
    nightmare
    .goto(url)
    .type('input[name=amountDue]', 13.01)
    .type('input[name=amountReceived]', 20)
    .click('button.btn')
    .wait('div.alert.alert-success')
    .evaluate(() => document.querySelector('div.alert.alert-success').innerText)
    .end()
    .then(el => expect(el).to.equal('The total change due is $6.99'))
  );

});
