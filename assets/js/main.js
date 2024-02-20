console.log('Funziona');

const priceKm = 0.21
//console.log(typeof priceKm);
const discountMinor = 0.2
const discountSenior = 0.4

//- Chiedere all'utente il numero di km da percorrere e la propria età
let trip = document.getElementById('km');

//console.log(typeof trip);

let userAge = document.getElementById('age');

//console.log(userAge);

document.querySelector('button').addEventListener('click', function () {
    //alert('funziona')
    console.log(trip.value);
    console.log(userAge.value);
    trip = (trip.value)
    userAge = (userAge.value)
    //- Stabilire il prezzo totale del biglietto;

    let priceTicket = trip * priceKm
    console.log(priceTicket);
   
    if (userAge < 18) {
        //-SE il passeggero è minorenne viene applicato uno sconto del 20%
        priceTicket = priceTicket - (priceTicket * discountMinor)
        console.log(priceTicket);
    } else if (userAge > 65) {
        //- ALTRIMENTI SE il passeggero è over65 viene applicato uno sconto del 40%
        priceTicket = priceTicket - (priceTicket * discountSenior)
        console.log(priceTicket);
    }
});








    
    
//- Stampare il prezzo del biglietto in forma umana