'use strict';

var myCity = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var myHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];
var myMin = [23, 3, 11, 20, 20];
var myMax = [65, 24, 38, 38, 16];
var myAve = [6.3, 1.2, 3.7, 2.3, 4.6];
var cookiesSoldEachHourArr = [];
var customersPerHourArr = [];
var totalPerDay = 0;

var formEl = document.getElementById("myinputform");

function handleSubmit(e) {
    
    e.preventDefault();
    var mynewStore = e.target.storename.value;
    myCity.push(mynewStore);

    var mynewMinimum = e.target.mincustomer.value;
    myMin.push(mynewMinimum);

    var mynewMax = e.target.maxcustomer.value;
    myMax.push(mynewMax);

    var mynewAve = e.target.avenumb.value;
    myAve.push(mynewAve);
};



function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function MySamonConMet(minCustomers, maxCustomers, avgCookiesPerCustomer) {
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
};

function Mystores(myStore, myOpHours) {
    this.myStore = myStore;
    this.myOpHours = myOpHours;
};

MySamonConMet.prototype.calcCustomersEachHour = function () {
    for (var i = 0; i < myHours.length; i++) {
        var customersEachHour = generateRandom(this.minCustomers, this.maxCustomers);
        customersPerHourArr.push(customersEachHour);
    }
};

MySamonConMet.prototype.calcCookieSoldEachHour = function () {
    cookiesSoldEachHourArr = [];
    for (var i = 0; i < myHours.length; i++) {
        var oneHourOfSales = Math.floor(customersPerHourArr[i] * this.avgCookiesPerCustomer);
        cookiesSoldEachHourArr.push(oneHourOfSales);
        totalPerDay += oneHourOfSales;
    }
};

MySamonConMet.prototype.myTotalFun = function () {
    var liEl = document.createElement('li');
    liEl.textContent = `Total: ${totalPerDay} cookies \n`;
    document.getElementById('Forcast').appendChild(liEl);
};




for (var k = 0; k < myCity.length; k++) {
    new Mystores();
    console.log(myCity[k]);
    var trEl = document.createElement('tr');
    trEl.textContent = `${myCity[k]} :`;
    document.getElementById('forcastTable').appendChild(trEl);

    for (var h = 0; h < myHours.length; h++) {
        var tdEL = document.createElement('td');
        new MySamonConMet(myMin[k], myMax[k], myAve[k]).calcCustomersEachHour();
        new MySamonConMet(myMin[k], myMax[k], myAve[k]).calcCookieSoldEachHour();
        tdEL.textContent = `${myHours[h]}: \n ${cookiesSoldEachHourArr[h]} cookies`;
        document.getElementById('forcastTable').appendChild(tdEL);
        // tdEL = document.createElement('td');
        // document.getElementById('totalTable').appendChild(tdEL);
        // tdEL.textContent = `My total is: ${totalPerDay}`;
    }

}

formEl.addEventListener("submit", handleSubmit);


