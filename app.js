'use strict';

var table = document.getElementById('table_content');
var form = document.getElementById('input_form');
//var sites = [];
var data = [];


//var hrSales = [];
var times = ['6:00 am', '7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 am','3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm'];

// Creating the store constructor

function Store(minCust, maxCust, avgCookies, location, hrSales) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.location = location;
  this.hrCookies = 0; //cookies sold per hour
  this.dailyCookies = 0; //total for store
  this.hrSales = []; //array with hourly sales
  this.salesHr();
}

//Creating prototype methods

//Random number generator funciton
Store.prototype.random = function () {
for (var i = 0; i < times.length; i++)  {
  var max = Math.ceil(this.maxCust);
  var min = Math.floor(this.minCust);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
}

// Calculate sales data function
Store.prototype.salesHr = function () {
for (var i = 0; i < times.length; i++)  {
  var custPerHr = this.random();
  this.hrCookies = Math.round(custPerHr * this.avgCookies);
  this.dailyCookies += this.hrCookies; //tally total
  this.hrSales.push(this.hrCookies);
  //console.log(times[i], this.hrSales[i]);
  }
 }

//Create an array with the store location first, the hourly sales data, and total  location sales, converts array to a string and adds a table row

Store.prototype.tableRow = function () {
    var rowInfo = ['<td>' + this.location + '</td>'];
    console.log('begin',rowInfo);
    for(var j=0; j < this.hrSales.length; j++) {
      rowInfo.push('<td>' + this.hrSales[j] + '</td>');
    }
    rowInfo.push('<td>' + this.dailyCookies + '</td>');

  console.log(rowInfo);

  var rowInfoStr = rowInfo.join(' ');

  console.log(rowInfoStr);
  var newRow;

  newRow = document.createElement('tr');
  newRow.innerHTML = rowInfoStr;
  table.appendChild(newRow);
}
// Function to compute column totals
Store.prototype.colTotal = function () {
    for (var i = 0; i < times.length; i++)  {
      var rowInfo = ['<tf>' + "Totals" + '</tf>'];
      console.log('begin',rowInfo);

      for(var j=0; j < this.hrSales.length; j++) {
        rowInfo.push('<tf>' + this.hrSales[j] + '</tf>');
      }
    rowInfo.push('<tf>' + this.dailyCookies + '</tf>');

    console.log('String to push', rowInfo);
    }
  var rowInfoStr = rowInfo.join(' ');

  console.log(rowInfoStr);
  var newRow;

  newRow = document.createElement('tr');
  newRow.innerHTML = rowInfoStr;
  table.appendChild(newRow);
}

//Function to receive input
function formData(e) {
  event.preventDefault();

  var stand = e.target.stand.value;
  var min_cust = e.target.min_cust.value;
  var max_cust = e.target.max_cust.value;
  var avg_cookies = e.target.avg_cookies.value;

  console.log(stand, min_cust, max_cust, avg_cookies);
  var storeOne = new Store(min_cust, max_cust, avg_cookies, stand);
  storeOne.tableRow();
  storeOne.colTotal();
  console.log(storeOne);
  form.reset();
}


form.addEventListener('submit', formData);
