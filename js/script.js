
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

// response.innerHTML = reverseWord;

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


