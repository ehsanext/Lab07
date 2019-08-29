'use strict';

var myCity = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var myHours =['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm' ];
var myMin= [23, 3, 11, 20, 20];
var myMax= [65, 24, 38, 38, 16];
var myAve= [6.3, 1.2, 3.7, 2.3, 4.6];

function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var samonCookieStoreObj = {
    minCustomers: 23,
    maxCustomers: 65,
    avgCookiesPerCustomer: 6.3,

    cookiesSoldEachHourArr : [],
    customersPerHourArr : [],
    totalPerDay : 0,
    myStore: '1st and Pike',
    myOpHours:[],

    calcCustomersEachHour: function(){
        for(var i = 0; i < myHours.length; i++){
            var customersEachHour = generateRandom(this.minCustomers, this.maxCustomers);
            this.customersPerHourArr.push(customersEachHour);
      
          }
        },
        
    calcCookieSoldEachHour : function(){
        for(var i = 0; i < myHours.length; i++){
            var oneHourOfSales = Math.floor(this.customersPerHourArr[i] * this.avgCookiesPerCustomer);
            this.cookiesSoldEachHourArr.push(oneHourOfSales);
            this.totalPerDay += oneHourOfSales;
          }
    },
}

// Testing my arrays and see if it works
// samonCookieStoreObj.calcCustomersEachHour();
// console.log(`This is my cus p hr${samonCookieStoreObj.customersPerHourArr}`)
// samonCookieStoreObj.calcCookieSoldEachHour();
// console.log(`This is coockie p hr${samonCookieStoreObj.cookiesSoldEachHourArr}`);
// console.log(samonCookieStoreObj.calcCustomersEachHour());


for ( var k = 0; k < myCity.length; k++){
    var liEl = document.createElement('ul');
    liEl.textContent = `${myCity[k]} :`;
    document.getElementById('Forcast').appendChild(liEl);

        for ( var h = 0; h < myHours.length; h++){
            var liEl = document.createElement('li');
            samonCookieStoreObj.calcCustomersEachHour();
            samonCookieStoreObj.calcCookieSoldEachHour();
            liEl.textContent = `${myHours[h]}: ${samonCookieStoreObj.cookiesSoldEachHourArr[h]} cookies`;
            document.getElementById('Forcast').appendChild(liEl);
        }

        liEl = document.createElement('li');
        liEl.textContent = `Total: ${samonCookieStoreObj.totalPerDay} cookies \n`;
        document.getElementById('Forcast').appendChild(liEl);
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


