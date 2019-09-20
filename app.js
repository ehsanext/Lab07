'use strict';

var myCity = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var myHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];
var myMin = [23, 3, 11, 20, 20];
var myMax = [65, 24, 38, 38, 16];
var myAve = [6.3, 1.2, 3.7, 2.3, 4.6];
var cookiesSoldEachHourArr = [];
var customersPerHourArr = [];
var myTempArr = [];
var totalPerHR = [];
var myTotal = 0;

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

    render();

};

formEl.addEventListener("submit", handleSubmit);

function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function MySamonConMet(minCustomers, maxCustomers, avgCookiesPerCustomer) {
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
};

// function Mystores(myStore, myOpHours) {
//     this.myStore = myStore;
//     this.myOpHours = myOpHours;
// };

MySamonConMet.prototype.calcCustomersEachHour = function () {
    for (var i = 0; i < myHours.length; i++) {
        var customersEachHour = generateRandom(this.minCustomers, this.maxCustomers);
        customersPerHourArr.push(customersEachHour);
    }
};

MySamonConMet.prototype.calcCookieSoldEachHour = function () {
    cookiesSoldEachHourArr = [];
    totalPerHR = [];
    for (var i = 0; i < myHours.length; i++) {
        var oneHourOfSales = Math.floor(customersPerHourArr[i] * this.avgCookiesPerCustomer);
        cookiesSoldEachHourArr.push(oneHourOfSales);
        // myTempArr.push(cookiesSoldEachHourArr[i]);
        // calcMyTotal();
    }
};

function calcMyTotal(){
    for ( var i; i<myTempArr.length; i++){
        myTotal += myTempArr[i];
    }
};


function render() {
    // console.log("I'm in");
    for (var k = 0; k < myCity.length; k++) {
        // new Mystores(myCity[k],myOpHours[k]);
        var trEl = document.createElement('tr');
        trEl.textContent = `${myCity[k]} :`;
        document.getElementById('forcastTable').appendChild(trEl);

        for (var h = 0; h < myHours.length; h++) {
            var tdEL = document.createElement('td');
            var samonConMet = new MySamonConMet(myMin[k], myMax[k], myAve[k]);
            samonConMet.calcCustomersEachHour();
            samonConMet.calcCookieSoldEachHour();
            tdEL.textContent = `${myHours[h]}: \n ${cookiesSoldEachHourArr[h]} cookies`;
            document.getElementById('forcastTable').appendChild(tdEL);
            console.log(myTotal);
            
        }
        
        
        // trEL = document.createElement('tr');
        // document.getElementById('totalTable').appendChild(trEL);
        // trEL.textContent = `My total is: ${totalPerDay}`;

    }

};



render();

