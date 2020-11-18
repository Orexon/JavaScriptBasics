let flightNumberData = ['#123456789','#112345678','#111456789','#111156789','#111116789','#111111789','#111111189','#111111119'];
let luggageInfoData = ['Standart20','Over20','AdditionalExtra'];

//To Do
// fix - on modal open/close/open -> duplicates information.
// limit search results by country entry input...Which becomes the ending of html API link..

document.querySelector('button.registerFlight').onclick = function(){
    let flightOption = document.querySelector('select#flightNumber');
        for(let i = 0; i<flightNumberData.length; i++){
            let optionF = document.createElement('option');
            optionF.value=flightNumberData[i];
            optionF.innerText=flightNumberData[i];
            flightOption.appendChild(optionF);
        }
    fetch('https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&q=&rows=1000') //${}
        .then(response => response.json())
        .then(data => {
            for(let g = 0; g < data['records'].length; g++){
                let flyFrom = document.querySelector('select#destinationFrom');
                let optionFF = document.createElement('option');
                optionFF.value = data['records'][g]['fields'].name;
                optionFF.innerText = data['records'][g]['fields'].name;
                flyFrom.appendChild(optionFF);
            }
        });
    fetch('https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&q=&rows=1000')
        .then(response => response.json())
        .then(data => {
            for(let g = 0; g < data['records'].length; g++){
                let flyTo = document.querySelector('select#destinationTo');
                let optionFT = document.createElement('option');
                optionFT.value =data['records'][g]['fields'].name;
                optionFT.innerText=data['records'][g]['fields'].name;
                flyTo.appendChild(optionFT);
            }
        });
/*    function myCountry1(){
        let country1 = document.querySelector('input#countryFrom');
        fetch("https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&q=&facet=timezone&facet=country&refine.country=" + country1.value)
            .then(response => response.json())
            .then(data => {
                for(let g = 0; g < data['records'].length; g++){
                    let flyFrom = document.querySelector('select#destinationFrom');
                    let optionFF = document.createElement('option');
                    optionFF.value = data['records'][g]['fields'].name;
                    optionFF.innerText = data['records'][g]['fields'].name;
                    flyFrom.appendChild(optionFF);
                }
            });
    }
    document.querySelector('input#countryFrom').onchange = function () {
        let country2 = document.querySelector('input#countryTo').value;
        fetch("https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&q=&facet=timezone&facet=country&refine.country=" + country2.value)
            .then(response => response.json())
            .then(data => {
                for (let g = 0; g < data['records'].length; g++) {
                    let flyTo = document.querySelector('select#destinationTo');
                    let optionFT = document.createElement('option');
                    optionFT.value = data['records'][g]['fields'].name;
                    optionFT.innerText = data['records'][g]['fields'].name;
                    flyTo.appendChild(optionFT);
                }
            });
    }*/

/*    fetch('https://api.first.org/data/v1/countries')
        .then(response => response.json())
        .then(data => {
            for (let x = 0; x <data.country.lenght; )
        });*/
    let luggageOption = document.querySelector('select#luggageInfo');
    for(let f = 0; f<luggageInfoData.length; f++){
        let optionL = document.createElement('option');
        optionL.value=luggageInfoData[f];
        optionL.innerText=luggageInfoData[f];
        luggageOption.appendChild(optionL);
    }
}

// Flight is an Object with constructor and method. This Object must have Constructors parameters.
// When creating new "flight" takes these parameters.
class Flight {
    constructor(firstName, lastName, flightNumber, pidNumber, countryFrom, countryTo,
                destinationFrom, destinationTo,departingTime,arrivalTime, moreInfo, luggageInfo, price) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.flightNumber = flightNumber;
        this.pidNumber = pidNumber;
        this.countryFrom = countryFrom;
        this.countryTo = countryTo;
        this.destinationFrom = destinationFrom;
        this.destinationTo = destinationTo;
        this.departingTime = departingTime;
        this.arrivalTime = arrivalTime;
        this.moreInfo = moreInfo;
        this.luggageInfo = luggageInfo;
        this.price = price;
    }
    register() {
        let savedInputs = {

            firstName: this.firstName,
            lastName: this.lastName,
            flightNumber: this.flightNumber,
            pidNumber: this.pidNumber,
            countryFrom: this.countryFrom,
            countryTo: this.countryTo,
            destinationFrom: this.destinationFrom,
            destinationTo: this.destinationTo,
            departingTime: this.departingTime,
            arrivalTime: this.arrivalTime,
            moreInfo: this.moreInfo,
            luggageInfo: this.luggageInfo,
            price: this.price
        };
        localStorage.setItem('finalSavedInputs',JSON.stringify(savedInputs));
    };
}

// Create a new Flight and save input information to local storage.
const saveButton = document.querySelector('.save');
saveButton.onclick = function(e) {
    const first = document.querySelector('input#firstName').value;
    const last = document.querySelector('input#lastName').value;
    const flNum = document.querySelector('select#flightNumber').value;
    const pidNum = document.querySelector('input#pidNumber').value;
    const cFrom = document.querySelector('input#countryFrom').value;
    const cTo = document.querySelector('input#countryTo').value;
    const destFrom = document.querySelector('select#destinationFrom').value;
    const destTo = document.querySelector('select#destinationTo').value;
    const timeFrom = document.querySelector('input#departingTime').value;
    const timeTo = document.querySelector('input#arrivalTime').value;
    const addInfo = document.querySelector('textarea#moreInfo').value;
    const bagInfo = document.querySelector('select#luggageInfo').value;
    const cash = document.querySelector('input#price').value;

    if (first === '' || last === '' || flNum === '' || pidNum === '' || cFrom === '' || cTo === '' || destFrom === '' || destTo === ''|| timeFrom === '' || timeTo === '' || bagInfo === '' || cash === '') {
        e.preventDefault();
        alert('Please Fill the Fields!')
    } else  {
        let flight = new Flight(first, last, flNum, pidNum, cFrom, cTo, destFrom, destTo, timeFrom, timeTo, addInfo, bagInfo, cash)
        flight.register();
    }
}
// show PrintTicket Button
let printButton = document.querySelector(".printTicket");                  // selectinu button
let InputPrint = localStorage.getItem("finalSavedInputs");                    // Pasigetinu issaugotus duomenis.
if (typeof InputPrint === 'undefined' || InputPrint === null) {                  // jeigu null(empty)
    printButton.style.display = "none";                                         // nerodyt
} else {                                                                       // kitu atveju
    printButton.style.display = "";                                           // rodyt
}

console.log(InputPrint)                                                       //issiconsolinu response.
// Ticket Print Input Form.
// Current date
InputPrint = JSON.parse(InputPrint);
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');                 //January is 0!
let mm1 = String(today.getMonth() + 2).padStart(2, '0');
let yyyy = today.getFullYear();

today = dd + '.' + mm + '.' + yyyy;
let returnDate = dd + '.' + mm1 + '.' + yyyy;

// Prices
const taxes = ((parseInt(InputPrint.price)/ 100) * 25).toFixed(2) ;
let luggageFee;

if(InputPrint.luggageInfo === 'Standart20') {
    luggageFee = 0;
} else if (InputPrint.luggageInfo === 'Over20') {
    luggageFee = 30;
} else {
    luggageFee = 100;
}
let bookingFee = 1;

// Time Difference.
let date1 = new Date(InputPrint.departingTime).getTime();
let date2 = new Date(InputPrint.arrivalTime).getTime();
/*
console.log(date1)
console.log(date2)
*/
let msec = date2 - date1;
let mins = Math.floor(msec / 60000);
let hrs = Math.floor(mins / 60);
let days = Math.floor(hrs / 24);
/*let yrs = Math.floor(days / 365);*/
mins = mins % 60;
hrs = hrs % 24;
days = days % 365;

// Notes
if (InputPrint.moreInfo !== '') {
    document.getElementById('notes').innerHTML = "Additional information: " + InputPrint.moreInfo;
} else {
    document.getElementById('notes').innerHTML = InputPrint.moreInfo;
}

document.getElementById('dateToday').innerHTML = today;
document.getElementById('returnFlight').innerHTML = "Return flight: Arrival at  " + returnDate;
document.getElementById('nameOfFirst').innerHTML = InputPrint.firstName.toUpperCase();
document.getElementById('nameOfLast').innerHTML = InputPrint.lastName.toUpperCase();
document.getElementById('nameOfPid').innerHTML = InputPrint.pidNumber;
document.getElementById('flyingFrom').innerHTML = InputPrint.countryFrom + ", " + InputPrint.destinationFrom;
document.getElementById('flyingTo').innerHTML = InputPrint.countryTo + ", " + InputPrint.destinationTo;
document.getElementById('dTime').innerHTML =  InputPrint.departingTime ;
document.getElementById('aTime').innerHTML = InputPrint.arrivalTime;
document.getElementById('durationTime').innerHTML = hrs + "hours, " + mins + "minutes"+ ", Direct/Nonstop";
document.getElementById('flNum').innerHTML = "Flight Number: "+ InputPrint.flightNumber;
document.getElementById('flightCost').innerHTML = parseInt(InputPrint.price) + parseFloat(taxes) + luggageFee + "€";
document.getElementById('toPay').innerHTML = InputPrint.price + "€";
document.getElementById('taxes').innerHTML =  parseFloat(taxes) + "€";
document.getElementById('luggageFee').innerHTML = luggageFee + "€";
document.getElementById('bookingFee').innerHTML = bookingFee + "€";
document.getElementById('totalToPay').innerHTML = parseFloat(InputPrint.price) + parseFloat(taxes) + luggageFee + bookingFee +"€";


//On Print cleat storage. use with risk.

/*document.querySelector('button.confirmPrint').onclick = function (){
    localStorage.clear();
}*/


