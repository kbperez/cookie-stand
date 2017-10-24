'use strict';

// Creating objects for each store

var store1 = { //first store
  location: 'First & Pike', //store location
  minCust: 23, //minimum customers per hr
  maxCust: 65, //maximum customers per hr
  avgCookies: 6.3, //expected average cookies sold per hour
  hrSales: [], // empty array to later store for loop results
  hrCookies: 0, //cookies sold per hour
  dailyCookies: 0, //initialize total counter

  custPerHr: function () {  //define a random number generator with contraints
    var max = Math.ceil(this.maxCust);
    var min = Math.floor(this.minCust);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive

  },

  salesData: function () { //for-loop to generate hourly sales
    for (var i = 6; i < 21; i++)  {
    var custsPerHour = this.custPerHr(i);
    this.hrCookies = custsPerHour * Math.round(this.avgCookies);
    this.dailyCookies += this.hrCookies; //tally total
  //  console.log('Hrs ', i, ' Customers ', custsPerHour, ' Cookies ', this.hrCookies, ' Total ', this.dailyCookies);
    this.hrSales.push('@ ' + i + ' , ' + custsPerHour+ 'customers bought ' + this.hrCookies + 'cookies, running total ' + this.dailyCookies); //store in array
    }
  }
}

var store2 = { //second store
  location: 'SeaTac', //store location
  minCust: 3, //minimum customers per hr
  maxCust: 24, //maximum customers per hr
  avgCookies: 1.2, //expected average cookies sold per hour
  hrSales: [], // empty array to later store for loop results
  hrCookies: 0, //cookies sold per hour
  dailyCookies: 0, //initialize total counter

  custPerHr: function () {  //define a random number generator with contraints
    var max = Math.ceil(this.maxCust);
    var min = Math.floor(this.minCust);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive

  },

  salesData: function () { //for-loop to generate hourly sales
    for (var i = 6; i < 21; i++)  {
    var custsPerHour = this.custPerHr(i);
    this.hrCookies = custsPerHour * Math.round(this.avgCookies);
    this.dailyCookies += this.hrCookies; //tally total
//    console.log('Hrs ', i, ' Customers ', custsPerHour, ' Cookies ', this.hrCookies, ' Total ', this.dailyCookies);
    this.hrSales.push('@ ' + i + ' , ' + custsPerHour+ 'customers bought ' + this.hrCookies + 'cookies, running total ' + this.dailyCookies); //store in array
    }
  }
}
var store3 = { //third store
  location: 'Seattle Center', //store location
  minCust: 11, //minimum customers per hr
  maxCust: 38, //maximum customers per hr
  avgCookies: 3.7, //expected average cookies sold per hour
  hrSales: [], // empty array to later store for loop results
  hrCookies: 0, //cookies sold per hour
  dailyCookies: 0, //initialize total counter

  custPerHr: function () {  //define a random number generator with contraints
    var max = Math.ceil(this.maxCust);
    var min = Math.floor(this.minCust);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive

  },

  salesData: function () { //for-loop to generate hourly sales
    for (var i = 6; i < 21; i++)  {
    var custsPerHour = this.custPerHr(i);
    this.hrCookies = custsPerHour * Math.round(this.avgCookies);
    this.dailyCookies += this.hrCookies; //tally total
  //  console.log('Hrs ', i, ' Customers ', custsPerHour, ' Cookies ', this.hrCookies, ' Total ', this.dailyCookies);
    this.hrSales.push('@ ' + i + ' , ' + custsPerHour+ 'customers bought ' + this.hrCookies + 'cookies, running total ' + this.dailyCookies); //store in array
    }
  }
}
var store4 = { //fourth store
  location: 'Capitol Hill', //store location
  minCust: 20, //minimum customers per hr
  maxCust: 38, //maximum customers per hr
  avgCookies: 2.3, //expected average cookies sold per hour
  hrSales: [], // empty array to later store for loop results
  hrCookies: 0, //cookies sold per hour
  dailyCookies: 0, //initialize total counter

  custPerHr: function () {  //define a random number generator with contraints
    var max = Math.ceil(this.maxCust);
    var min = Math.floor(this.minCust);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive

  },

  salesData: function () { //for-loop to generate hourly sales
    for (var i = 6; i < 21; i++)  {
    var custsPerHour = this.custPerHr(i);
    this.hrCookies = custsPerHour * Math.round(this.avgCookies);
    this.dailyCookies += this.hrCookies; //tally total
//    console.log('Hrs ', i, ' Customers ', custsPerHour, ' Cookies ', this.hrCookies, ' Total ', this.dailyCookies);
    this.hrSales.push('@ ' + i + ' , ' + custsPerHour+ 'customers bought ' + this.hrCookies + 'cookies, running total ' + this.dailyCookies); //store in array
    }
  }
}
var store5 = { //fifth store
  location: 'Alki', //store location
  minCust: 2, //minimum customers per hr
  maxCust: 16, //maximum customers per hr
  avgCookies: 4.6, //expected average cookies sold per hour
  hrSales: [], // empty array to later store for loop results
  hrCookies: 0, //cookies sold per hour
  dailyCookies: 0, //initialize total counter

  custPerHr: function () {  //define a random number generator with contraints
    var max = Math.ceil(this.maxCust);
    var min = Math.floor(this.minCust);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive

  },

  salesData: function () { //for-loop to generate hourly sales
    for (var i = 6; i < 21; i++)  {
    var custsPerHour = this.custPerHr(i);
    this.hrCookies = custsPerHour * Math.round(this.avgCookies);
    this.dailyCookies += this.hrCookies; //tally total
//    console.log('Hrs ', i, ' Customers ', custsPerHour, ' Cookies ', this.hrCookies, ' Total ', this.dailyCookies);
    this.hrSales.push('@ ' + i + ' , ' + custsPerHour+ 'customers bought ' + this.hrCookies + 'cookies, running total ' + this.dailyCookies); //store in array
    }
  }
}


store1.salesData(store1.hrSales);
console.log('store1', store1.hrSales);

store2.salesData(store2.hrSales);
console.log('store2', store2.hrSales);

store3.salesData(store3.hrSales);
console.log('store3', store3.hrSales);

store4.salesData(store4.hrSales);
console.log('store4', store4.hrSales);

store5.salesData(store5.hrSales);
console.log('store5', store5.hrSales);
