'use strict';

var table = document.getElementById('table_content');
var form = document.getElementById('input_form');
var sites = [];
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

// Instantiation
var pikeAndFirst = new Store(23, 65, 6.3, '1st and Pike');
var seaTac = new Store(3, 24, 1.2, 'SeaTac Airport');
var seatCtr = new Store(11, 38, 3.7, 'Seattle Center');
var capHill = new Store(20, 38, 2.3, 'Capitol Hill');
var alki = new Store(2, 16, 4.6, 'Alki');

sites.push(pikeAndFirst);
sites.push(seaTac);
sites.push(seatCtr);
sites.push(capHill);
sites.push(alki);
console.log('sites',sites);


//Create an array with the store location first, the hourly sales data, and total  location sales, converts array to a string and adds a table row

Store.prototype.tableRow = function () {
  for (var i = 0; i < sites.length; i++) {
    var rowInfo = ['<td>' + sites[i].location + '</td>'];
    console.log('begin',rowInfo);
    for(var j=0; j < sites[i].hrSales.length; j++) {
      rowInfo.push('<td>' + sites[i].hrSales[j] + '</td>');
    }
    rowInfo.push('<td>' + sites[i].dailyCookies + '</td>');

  console.log(rowInfo);

  var rowInfoStr = rowInfo.join(' ');

  console.log(rowInfoStr);
  var newRow;

  newRow = document.createElement('tr');
  newRow.innerHTML = rowInfoStr;
  table.appendChild(newRow);
  }
}

function formData(event) {
  event.preventDefault();

  var stand = event.target.stand.value;
  var min_cust = parseInt(event.target.min_cust.value);
  var max_cust = parseInt(event.target.max_cust.value);
  var avg_cookies = parseFloat(event.target.avg_cookies.value);

  console.log(stand, min_cust, max_cust, avg_cookies);

  data.push(new Store(min_cust, max_cust, avg_cookies, stand));
  //createTable();
  //form.reset();
}

form.addEventListener('submit', formData);




pikeAndFirst.tableRow();
