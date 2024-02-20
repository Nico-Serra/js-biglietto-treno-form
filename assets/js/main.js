console.log('Funziona');

const priceKm = 0.21
//console.log(typeof priceKm);
const discountMinor = 0.2
const discountSenior = 0.4

let userName = document.getElementById('username');
//console.log(userName);

//- Chiedere all'utente il numero di km da percorrere e la propria età
let trip = document.getElementById('km');

//console.log(typeof trip);

let userAge = document.getElementById('age');

//console.log(userAge);

document.querySelector('button').addEventListener('click', function () {
    //alert('funziona')
    console.log(trip.value);
    console.log(userAge.value);
    console.log(userName.value);
    trip = (trip.value);
    userAge = (userAge.value);
    userName = (userName.value)
    document.getElementById('result_name').innerHTML = userName;
    document.querySelector('.carriage').innerHTML = Math.floor(Math.random() * 10);
    //- Stabilire il prezzo totale del biglietto;

    let priceTicket = trip * priceKm;
    console.log(priceTicket);
   
    if (userAge < 18) {
        //-SE il passeggero è minorenne viene applicato uno sconto del 20%
        priceTicket = priceTicket - (priceTicket * discountMinor);
        console.log(priceTicket);
        document.querySelector('.discount').innerHTML = 'Hai diritto al 20% di sconto'
    } else if (userAge > 65) {
        //- ALTRIMENTI SE il passeggero è over65 viene applicato uno sconto del 40%
        priceTicket = priceTicket - (priceTicket * discountSenior);
        console.log(priceTicket);
        document.querySelector('.discount').innerHTML = 'Hai diritto al 40% di sconto'
    }
    document.querySelector('.price').innerHTML = priceTicket.toFixed(2) + '€';
});


//- Stampare il prezzo del biglietto in forma umana