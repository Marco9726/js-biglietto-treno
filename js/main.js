// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65. L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 

//1 - Chiedere all'utente il numero di km da percorrere.
//2 - Chiedere all'utente l'età.
//3 - Calcora prezzo del viaggio.
    //3.1 - Moltiplicare il numero dei km per 0.21.
    //3.2 - Applicare eventuali sconti del 20% o 40% rispettivamente per under 18 o over 65.
//4 - Arrotondare risultato in due cifre decimali
//5 - Visualizzare in forma umana l'output del prezzo finale.

//1
let km = prompt('Quanti kilometri dovrai viaggiare?');
//2
let eta = prompt('Qual è la tua età?');
//3
//3.1
let prezzo = km * 0.21;
let messaggio =`Il prezzo del biglietto è pari a: ${prezzo}`;
//3.2
if ( eta < 18)
{
    prezzo = (prezzo * 0.8).toFixed(2);
    console.log(prezzo)
}

else if ( eta > 65)
{
    prezzo = (prezzo * 0.6).toFixed(2);
    console.log(prezzo)
}

document.getElementById('Prezzo').innerHTML = `Il prezzo del tuo biglietto è: ` + prezzo +`€`;