console.log('Funziona');

const priceKm = 0.21
console.log(typeof priceKm);

//- Chiedere all'utente il numero di km da percorrere e la propria età
const trip = document.getElementById('km');

//console.log(typeof trip);

const userAge = document.getElementById('age');

//console.log(userAge);

document.querySelector('button').addEventListener('click', function () {
    //alert('funziona')
    console.log(trip.value);
    console.log(userAge.value);
});


//- Stabilire il prezzo totale del biglietto
    //let priceTicket = trip.value * priceKm
   // console.log(priceTicket);

    //-SE il passeggero è minorenne viene applicato uno sconto del 20%
    //- ALTRIMENTI SE il passeggero è over65 viene applicato uno sconto del 40%
//- Stampare il prezzo del biglietto in forma umana