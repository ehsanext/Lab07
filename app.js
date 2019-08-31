'use strict';

var myCity = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var myHours =['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm' ];
var myMin= [23, 3, 11, 20, 20];
var myMax= [65, 24, 38, 38, 16];
var myAve= [6.3, 1.2, 3.7, 2.3, 4.6];


var samonCookieStoreObj = {
    //minCustomers: 23,
    //maxCustomers: 65,
    //avgCookiesPerCustomer: 6.3,
    //myStore: '1st and Pike',
    //myOpHours:[],
    cookiesSoldEachHourArr : [],
    customersPerHourArr : [],
    totalPerDay : 0,
    
}

function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function MySamonConMet (minCustomers, maxCustomers, avgCookiesPerCustomer) {
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;        
};

function Mystores (myStore, myOpHours) {
    this.myStore = myStore;
    this.myOpHours = myOpHours;
};

MySamonConMet.prototype.calcCustomersEachHour = function(){
    for(var i = 0; i < myHours.length; i++){
        var customersEachHour = generateRandom(this.minCustomers, this.maxCustomers);
        samonCookieStoreObj.customersPerHourArr.push(customersEachHour);
      }
};

MySamonConMet.prototype.calcCookieSoldEachHour = function(){
    for(var i = 0; i < myHours.length; i++){
        var oneHourOfSales = Math.floor(samonCookieStoreObj.customersPerHourArr[i] * this.avgCookiesPerCustomer);
        samonCookieStoreObj.cookiesSoldEachHourArr.push(oneHourOfSales);
        samonCookieStoreObj.totalPerDay += oneHourOfSales;
      }
};


// Testing my arrays and see if it works
// samonCookieStoreObj.calcCustomersEachHour();
// console.log(`This is my cus p hr${samonCookieStoreObj.customersPerHourArr}`)
// samonCookieStoreObj.calcCookieSoldEachHour();
// console.log(`This is coockie p hr${samonCookieStoreObj.cookiesSoldEachHourArr}`);
// console.log(samonCookieStoreObj.calcCustomersEachHour());


for ( var k = 0; k < myCity.length; k++){
    new Mystores();
    //var ulEl = document.createElement('ul');
    var trEl = document.createElement('tr');
    trEl.textContent = `${myCity[k]} :`;
    document.getElementById('forcastTable').appendChild(trEl);

        for ( var h = 0; h < myHours.length; h++){
            var tdEL = document.createElement('td');
            new MySamonConMet(myMin[k],myMax[k], myAve[k]).calcCustomersEachHour();
            new MySamonConMet(myMin[k],myMax[k],myAve[k]).calcCookieSoldEachHour();
            console.log(samonCookieStoreObj.cookiesSoldEachHourArr[h]);
            tdEL.textContent = `${myHours[h]}: ${samonCookieStoreObj.cookiesSoldEachHourArr[h]} cookies`;
            document.getElementById('forcastTable').appendChild(tdEL);
        }

        // liEl = document.createElement('li');
        // liEl.textContent = `Total: ${samonCookieStoreObj.totalPerDay} cookies \n`;
        // document.getElementById('Forcast').appendChild(liEl);
    }





// var myHr = 6;
// var string = `${myHr} am`;

// function salesHours() {
//     for (var i = 0; i < 15; i++) {
//         if (string != `${myHr} pm` && myHr < 13) {
//             string = `${myHr} am`;
//             //console.log(string);
//         }
//         else {
//             string = `${myHr - 12} pm`;
//             //console.log(string);
//         }
//         myHr++;
//     }
// }


