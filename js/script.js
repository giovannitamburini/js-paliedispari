
//ESERCIZIO 1
/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

// PSEUDO CODICE
/*
- chiedi all'utente di inserire una parola e memorizza
- richiamo un elemento dal Dom all'interno del quale scriverò il responso del confronto
- trasformo la stringa inserita in array di caratteri
- inverto l'ordine dei caratteri
- ricompongo i caratteri invertiti in una stringa
- devo confrontare la stringa inserita dall'utente con la striga invertita:
  SE la stringa inserita è uguale alla stringa invertita:
  ° scrivo nel documento che la parola risulta palindroma
  ALTRIMENTI:
  ° scrivo nel documento che la parola inserita non è palindroma
*/

/* QUA C'è L'APERTURA COMMENTO

//- chiedi all'utente di inserire una parola e memorizza
let word = prompt('Scrivi una parola');

//- richiamo un elemento dal Dom all'interno del quale scriverò il responso del confronto
let responseContainerElement = document.getElementById('response-container');

function reverseWord(drow) {

    //- trasformo la stringa inserita in array di caratteri
    let splitWord = drow.split('');

    //- inverto l'ordine dei caratteri
    let reverseWord = splitWord.reverse('');

    //- ricompongo i caratteri invertiti in una stringa
    let joinWord = reverseWord.join('');

    return joinWord;
}

let response = document.createElement('div');

// response.innerHTML = reverseWord(word);

//- devo confrontare la stringa inserita dall'utente con la striga invertita:
// SE la stringa inserita è uguale alla stringa invertita:
if (word === reverseWord(word)) {

    // ° scrivo nel documento che la parola risulta palindroma
    responseContainerElement.append(word + " uguale a " + reverseWord(word) + ": la parola da te scelta è palindroma");

//ALTRIMENTI:
} else {
    
    // ° scrivo nel documento che la parola inserita non è palindroma
    responseContainerElement.append(word + " diversa da " + reverseWord(word) + ": la parola da te scelta non è palindroma");
}


QUA C'è LA CHIUSURA DEL COMMENTO */

/*-----------------------------------------------------
ESERCIZIO 2
-----------------------------------------------------*/
/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

// PSEUDO CODICE
/*
- chiedo all'utente di scegliere tra pari e dispari e memorizzo
- chiedo all'utente di scegliere un numero compreso tra 1 e 5 e memorizzo
- creo un evento click per memorizzare il valore inserito negli input
- tramite funzione, genero un numero casuale che va da 1 a 5 per il computer
- tramite funzione, sommo il numero scelto dall'utente con quello generato casualmente dal computer
  e stabilisco se la somma è pari o dispari
- stabilisco il vincitore:
  SE ho scelto pari e la somma è pari oppure se ho scelto dispari e la somma è dispari:
  ° comunico all'utente che ha vinto
  ALTRIMENTI:
  ° comunico all'utente che ha perso
*/


// - chiedo all'utente di scegliere tra pari e dispari e memorizzo
let evenOddElement = document.getElementById('even-odd');

// - chiedo all'utente di scegliere un numero compreso tra 1 e 5 e memorizzo
let fiveElement = document.getElementById('five');

// - creo il collegamento con il button che mi servirà per l'evento click
let playElement = document.getElementById('play');

// - creo il collegamento con l'emento all'interno del quale appenderò i risultati del gioco
let winnerContainerElement = document.getElementById('winner-container');

// - creo un evento click per memorizzare il valore inserito negli input
playElement.addEventListener('click', function() {

    //prendo il valore inserito dall'utente nell'input
    let insideEvenOddElement = evenOddElement.value;

    //prendo il valore inserito dall'utente nell'input
    let insideFiveElement = fiveElement.value;

    // - condizione di verifica dell'inserimento corretto della scelta(pari/dispari)
    if (insideEvenOddElement === "pari" || insideEvenOddElement === "dispari") {
        
        // - condizione di verifica dell'inserimento corretto di un numero tra 1 e 5
        if (insideFiveElement >= 1 && insideFiveElement <= 5) {

            //richiamo la funzione per generare un numero casuale
            let randomPc = generatorRandom(1,5);

            //richiamo la funzione per sommare i numeri(scelto e generato) e verificare l'esito della somma
            let allTogether = generatorAddition(insideFiveElement, randomPc);

            //creo div all'inetrno del quale è scritto il numero generato casualmente
            let resultPc = document.createElement('div');
            resultPc.innerHTML = "numero del computer: " + randomPc;

            //creo div all'inetrno del quale è scritto il numero scelto dall'utente
            let resultUser = document.createElement('div');
            resultUser.innerHTML = "numero scelto: " + insideFiveElement;

            //creo div all'interno del quale è scritto il risultato della somma
            let resultAllTogether = document.createElement('div');
            resultAllTogether.innerHTML = "la somma dei due numeri è: " + (parseInt(randomPc) + parseInt(insideFiveElement));

            //creo div all'interno del quale è scritta la scelta fatta tra pari e dispari
            let yourOddEven = document.createElement('div');
            yourOddEven.innerHTML = "hai scelto: " + insideEvenOddElement;
            
            //appendo all'elemento del Dom gli elementi creati
            winnerContainerElement.append(resultPc, resultUser, resultAllTogether, yourOddEven);


            // condizioni che decretano la vittoria
            if ((insideEvenOddElement == "pari" && allTogether == true) || (insideEvenOddElement == "dispari" && allTogether == false)) {

                //creo e appendo nel dom il risultato positivo del gioco
                let victory = document.createElement("div");
                victory.innerHTML= "HAI VINTO";
                winnerContainerElement.append(victory);

              //condizione di sconfitta
            } else {

                //creo e appendo nel dom il risultato negativo del gioco
                let victory = document.createElement("div");
                victory.innerHTML = "HAI PERSO";
                winnerContainerElement.append(victory);

            }

          //condizione di inserimento scorretto del numero
        } else {

            alert('inserimento dati non corretto, inserisci un numero compreso tra 1 e 5');
        }

      //condizione di inserimento scorretto di pari o dispari
    } else {

        alert('inserimento dati non corretto, scegli pari o dispari');
    }

})



//FUNZIONI

// - tramite funzione, genero un numero casuale che va da 1 a 5 per il computer
function generatorRandom (min, max) {
    
    let random = Math.floor(Math.random() * (max - min + 1) + min);

    return random;
}

// - tramite funzione, sommo il numero scelto dall'utente con quello generato casualmente dal computere stabilisco se la somma è pari o dispari
function generatorAddition (myNumber, pcNumber) {
    
    let addition = parseInt(myNumber) + parseInt(pcNumber);

    let result ;

    if (addition % 2 == 0) {
        
        result = true;

    } else {

        result = false;
    }

    return result;
}


//STYLE

//input pari/dispari
evenOddElement.style.width = "150px";

//input numeri dal 1 al 5
fiveElement.style.width = "150px"

