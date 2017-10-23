'use strict';

// Creating objects for each store

var store1 = {
  location: 'First & Pike', //store location
  minCust: 23, //minimum customers per hr
  maxCust: 65, //maximum customers per hr
  avgCookies: 6.3, //expected average cookies sold per hour
  hrSales: [], // empty array to later store for loop results
  dailyCookies: 0, //initialize total counter

  custPerHr: function () {  //define a random number generator with contraints
    var max = Math.ceil(this.maxCust);
    var min = Math.floor(this.minCust);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
  }

console.log(store1.custPerHr());

  for (var i = 6; i < 21; i++) {  //for-loop to generate hourly sales
    store1.custPerHr();
    dailyCookies += store1.custPerHr(i); //tally total
    console.log('Hrs ', i, ' Avg Cookies', store1.custPerHr(i), ' Total ', dailyCookies);
    store1.hrSales.push(i, store1.custPerHr[i], dailyCookies); //store in array
    console.log(store1.hrSales[i]);
  }
