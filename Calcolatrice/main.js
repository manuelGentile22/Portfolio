let btn0 = document.getElementById('n0');
let btn1 = document.getElementById('n1');
let btn2 = document.getElementById('n2');
let btn3 = document.getElementById('n3');
let btn4 = document.getElementById('n4');
let btn5 = document.getElementById('n5');
let btn6 = document.getElementById('n6');
let btn7 = document.getElementById('n7');
let btn8 = document.getElementById('n8');
let btn9 = document.getElementById('n9');
let btnSomma = document.getElementById('somma');
let btnSottrazzione = document.getElementById('sottrazione');
let btnDivisione = document.getElementById('divisione');
let btnMoltiplicazione = document.getElementById('moltiplicazione');
let btnPercentuale = document.getElementById('percentuale');
let btnUguale = document.getElementById('uguale');
let btnAc = document.getElementById('azzera');
let btnC = document.getElementById('cancella');
let btnVirgola = document.getElementById('virgola');
let virgola = false;
let display = document.getElementById('display');
let contatore1 = 0;
let contatore2 = 0;
let risultato = 0;
let numberButton;
let somma = false;
let sottrazzione = false;
let moltiplicazione = false;
let divisione = false;
let percentuale = false;

// inserimento numeri

btn0.onclick = () => {
    numberButton = '0';
    if(risultato==0){
        if(Number.isInteger(contatore1)){
            if(virgola){
                if(contatore1!==0){
                    contatore1.toString();
                    contatore1 = contatore1 + '.' + numberButton;
                    contatore1 = parseFloat(contatore1);
                    display.innerHTML = contatore1;
                } else {
                    contatore1.toString();
                    contatore1 = '0.' + numberButton;
                    parseFloat(contatore1);
                    display.innerHTML = contatore1;
                }
            } else if(!virgola){
                if(contatore1!==0){
                    contatore1.toString();
                    contatore1 = contatore1 + numberButton;
                    contatore1 = parseInt(contatore1);
                    display.innerHTML = contatore1;
                } else {
                    contatore1 = parseInt(numberButton);
                    display.innerHTML = contatore1;
                }
            }
        } else{
            virgola = false;
            if(contatore1!==0){
                contatore1.toString();
                contatore1 = contatore1 + numberButton;
                contatore1 = parseFloat(contatore1);
                display.innerHTML = contatore1;
            }
        } 
    }
}

btn1.onclick = () => {
    numberButton = '1';
    if(risultato==0){
        if(Number.isInteger(contatore1)){
            if(virgola){
                if(contatore1!==0){
                    contatore1.toString();
                    contatore1 = contatore1 + '.' + numberButton;
                    contatore1 = parseFloat(contatore1);
                    display.innerHTML = contatore1;
                } else {
                    contatore1.toString();
                    contatore1 = '0.' + numberButton;
                    parseFloat(contatore1);
                    display.innerHTML = contatore1;
                }
            } else if(!virgola){
                if(contatore1!==0){
                    contatore1.toString();
                    contatore1 = contatore1 + numberButton;
                    contatore1 = parseInt(contatore1);
                    display.innerHTML = contatore1;
                } else {
                    contatore1 = parseInt(numberButton);
                    display.innerHTML = contatore1;
                }
            }
        } else{
            virgola = false;
            if(contatore1!==0){
                contatore1.toString();
                contatore1 = contatore1 + numberButton;
                contatore1 = parseFloat(contatore1);
                display.innerHTML = contatore1;
            }
        } 
    }
}

btn2.onclick = () => {
    numberButton = '2';
    if(risultato==0){
        if(Number.isInteger(contatore1)){
            if(virgola){
                if(contatore1!==0){
                    contatore1.toString();
                    contatore1 = contatore1 + '.' + numberButton;
                    contatore1 = parseFloat(contatore1);
                    display.innerHTML = contatore1;
                } else {
                    contatore1.toString();
                    contatore1 = '0.' + numberButton;
                    parseFloat(contatore1);
                    display.innerHTML = contatore1;
                }
            } else if(!virgola){
                if(contatore1!==0){
                    contatore1.toString();
                    contatore1 = contatore1 + numberButton;
                    contatore1 = parseInt(contatore1);
                    display.innerHTML = contatore1;
                } else {
                    contatore1 = parseInt(numberButton);
                    display.innerHTML = contatore1;
                }
            }
        } else{
            virgola = false;
            if(contatore1!==0){
                contatore1.toString();
                contatore1 = contatore1 + numberButton;
                contatore1 = parseFloat(contatore1);
                display.innerHTML = contatore1;
            }
        } 
    }
}

btn3.onclick = () => {
    numberButton = '3';
    if(risultato==0){
        if(Number.isInteger(contatore1)){
            if(virgola){
                if(contatore1!==0){
                    contatore1.toString();
                    contatore1 = contatore1 + '.' + numberButton;
                    contatore1 = parseFloat(contatore1);
                    display.innerHTML = contatore1;
                } else {
                    contatore1.toString();
                    contatore1 = '0.' + numberButton;
                    parseFloat(contatore1);
                    display.innerHTML = contatore1;
                }
            } else if(!virgola){
                if(contatore1!==0){
                    contatore1.toString();
                    contatore1 = contatore1 + numberButton;
                    contatore1 = parseInt(contatore1);
                    display.innerHTML = contatore1;
                } else {
                    contatore1 = parseInt(numberButton);
                    display.innerHTML = contatore1;
                }
            }
        } else{
            virgola = false;
            if(contatore1!==0){
                contatore1.toString();
                contatore1 = contatore1 + numberButton;
                contatore1 = parseFloat(contatore1);
                display.innerHTML = contatore1;
            }
        } 
    }
}

btn4.onclick = () => {
    numberButton = '4';
    if(risultato==0){
        if(Number.isInteger(contatore1)){
            if(virgola){
                if(contatore1!==0){
                    contatore1.toString();
                    contatore1 = contatore1 + '.' + numberButton;
                    contatore1 = parseFloat(contatore1);
                    display.innerHTML = contatore1;
                } else {
                    contatore1 = '0.' + numberButton;
                    parseFloat(contatore1);
                    display.innerHTML = contatore1;
                }
            } else if(!virgola){
                if(contatore1!==0){
                    contatore1.toString();
                    contatore1 = contatore1 + numberButton;
                    contatore1 = parseInt(contatore1);
                    display.innerHTML = contatore1;
                } else {
                    contatore1 = parseInt(numberButton);
                    display.innerHTML = contatore1;
                }
            }
        } else{
            virgola = false;
            if(contatore1!==0){
                contatore1.toString();
                contatore1 = contatore1 + numberButton;
                contatore1 = parseFloat(contatore1);
                display.innerHTML = contatore1;
            }
        } 
    }
}

btn5.onclick = () => {
    numberButton = '5';
    if(risultato==0){
        if(Number.isInteger(contatore1)){
            if(virgola){
                if(contatore1!==0){
                    contatore1.toString();
                    contatore1 = contatore1 + '.' + numberButton;
                    contatore1 = parseFloat(contatore1);
                    display.innerHTML = contatore1;
                } else {
                    contatore1 = '0.' + numberButton;
                    parseFloat(contatore1);
                    display.innerHTML = contatore1;
                }
            } else if(!virgola){
                if(contatore1!==0){
                    contatore1.toString();
                    contatore1 = contatore1 + numberButton;
                    contatore1 = parseInt(contatore1);
                    display.innerHTML = contatore1;
                } else {
                    contatore1 = parseInt(numberButton);
                    display.innerHTML = contatore1;
                }
            }
        } else{
            virgola = false;
            if(contatore1!==0){
                contatore1.toString();
                contatore1 = contatore1 + numberButton;
                contatore1 = parseFloat(contatore1);
                display.innerHTML = contatore1;
            }
        } 
    }
}

btn6.onclick = () => {
    numberButton = '6';
    if(risultato==0){
        if(Number.isInteger(contatore1)){
            if(virgola){
                if(contatore1!==0){
                    contatore1.toString();
                    contatore1 = contatore1 + '.' + numberButton;
                    contatore1 = parseFloat(contatore1);
                    display.innerHTML = contatore1;
                } else {
                    contatore1 = '0.' + numberButton;
                    parseFloat(contatore1);
                    display.innerHTML = contatore1;
                }
            } else if(!virgola){
                if(contatore1!==0){
                    contatore1.toString();
                    contatore1 = contatore1 + numberButton;
                    contatore1 = parseInt(contatore1);
                    display.innerHTML = contatore1;
                } else {
                    contatore1 = parseInt(numberButton);
                    display.innerHTML = contatore1;
                }
            }
        } else{
            virgola = false;
            if(contatore1!==0){
                contatore1.toString();
                contatore1 = contatore1 + numberButton;
                contatore1 = parseFloat(contatore1);
                display.innerHTML = contatore1;
            }
        } 
    }
}

btn7.onclick = () => {
    numberButton = '7';
    if(risultato==0){
        if(Number.isInteger(contatore1)){
            if(virgola){
                if(contatore1!==0){
                    contatore1.toString();
                    contatore1 = contatore1 + '.' + numberButton;
                    contatore1 = parseFloat(contatore1);
                    display.innerHTML = contatore1;
                } else {
                    contatore1 = '0.' + numberButton;
                    parseFloat(contatore1);
                    display.innerHTML = contatore1;
                }
            } else if(!virgola){
                if(contatore1!==0){
                    contatore1.toString();
                    contatore1 = contatore1 + numberButton;
                    contatore1 = parseInt(contatore1);
                    display.innerHTML = contatore1;
                } else {
                    contatore1 = parseInt(numberButton);
                    display.innerHTML = contatore1;
                }
            }
        } else{
            virgola = false;
            if(contatore1!==0){
                contatore1.toString();
                contatore1 = contatore1 + numberButton;
                contatore1 = parseFloat(contatore1);
                display.innerHTML = contatore1;
            }
        } 
    }
}

btn8.onclick = () => {
    numberButton = '8';
    if(risultato==0){
        if(Number.isInteger(contatore1)){
            if(virgola){
                if(contatore1!==0){
                    contatore1.toString();
                    contatore1 = contatore1 + '.' + numberButton;
                    contatore1 = parseFloat(contatore1);
                    display.innerHTML = contatore1;
                } else {
                    contatore1 = '0.' + numberButton;
                    parseFloat(contatore1);
                    display.innerHTML = contatore1;
                }
            } else if(!virgola){
                if(contatore1!==0){
                    contatore1.toString();
                    contatore1 = contatore1 + numberButton;
                    contatore1 = parseInt(contatore1);
                    display.innerHTML = contatore1;
                } else {
                    contatore1 = parseInt(numberButton);
                    display.innerHTML = contatore1;
                }
            }
        } else{
            virgola = false;
            if(contatore1!==0){
                contatore1.toString();
                contatore1 = contatore1 + numberButton;
                contatore1 = parseFloat(contatore1);
                display.innerHTML = contatore1;
            }
        } 
    }
}

btn9.onclick = () => {
    numberButton = '9';
    if(risultato==0){
        if(Number.isInteger(contatore1)){
            if(virgola){
                if(contatore1!==0){
                    contatore1.toString();
                    contatore1 = contatore1 + '.' + numberButton;
                    contatore1 = parseFloat(contatore1);
                    display.innerHTML = contatore1;
                } else {
                    contatore1 = '0.' + numberButton;
                    parseFloat(contatore1);
                    display.innerHTML = contatore1;
                }
            } else if(!virgola){
                if(contatore1!==0){
                    contatore1.toString();
                    contatore1 = contatore1 + numberButton;
                    contatore1 = parseInt(contatore1);
                    display.innerHTML = contatore1;
                } else {
                    contatore1 = parseInt(numberButton);
                    display.innerHTML = contatore1;
                }
            }
        } else{
            virgola = false;
            if(contatore1!==0){
                contatore1.toString();
                contatore1 = contatore1 + numberButton;
                contatore1 = parseFloat(contatore1);
                display.innerHTML = contatore1;
            }
        } 
    }
}

// scelta operatore

btnSomma.onclick = () => {
    somma = true;
    if(contatore2==0){
        contatore2 = contatore1;  
    }
    contatore1 = 0;
    display.innerHTML = contatore1;
    sottrazzione = false;
    divisione = false;
    moltiplicazione = false;
    percentuale = false;
    virgola = false;
    risultato = 0;
}

btnSottrazzione.onclick = () => {
    sottrazzione = true;
    if(contatore2==0){
        contatore2 = contatore1;  
    }
    contatore1 = 0;
    display.innerHTML = contatore1;
    somma = false;
    divisione = false;
    moltiplicazione = false;
    percentuale = false;
    virgola = false;
    risultato = 0;
}

btnMoltiplicazione.onclick = () => {
    moltiplicazione = true;
    if(contatore2==0){
        contatore2 = contatore1;  
    }
    contatore1 = 0;
    display.innerHTML = contatore1;
    somma = false;
    divisione = false;
    sottrazzione = false;
    percentuale = false;
    virgola = false;
    risultato = 0;
}

btnDivisione.onclick = () => {
    divisione = true;
    if(contatore2==0){
        contatore2 = contatore1;  
    }
    contatore1 = 0;
    display.innerHTML = contatore1;
    somma = false;
    moltiplicazione = false;
    sottrazzione = false;
    percentuale = false;
    virgola = false;
    risultato = 0;
}

btnPercentuale.onclick = () => {
    risultato = contatore1/100;
    display.innerHTML = risultato;
    somma = false;
    divisione = false;
    sottrazzione = false;
    percentuale = false;
    moltiplicazione = false;
    virgola = false;
    contatore1 = risultato;
    contatore2 = 0;
}

btnUguale.onclick = () => {   
    if(somma){
        if(typeof(contatore1)=='string'){
        contatore1 = parseFloat(contatore1);
            if(typeof(contatore2)=='string'){
            contatore2 = parseFloat(contatore2);
            risultato = contatore1 + contatore2;
            } else {
                risultato = contatore1 + contatore2;
            }
        } else {
            if(typeof(contatore2)=='string'){
                contatore2 = parseFloat(contatore2);
                risultato = contatore1 + contatore2;
            } else {
                risultato = contatore1 + contatore2;
            }
        }
    }
    else if (sottrazzione){
        if(typeof(contatore1)=='string'){
            contatore1 = parseFloat(contatore1);
                if(typeof(contatore2)=='string'){
                contatore2 = parseFloat(contatore2);
                console.log(contatore1);
                console.log(contatore2);
                risultato = contatore2 - contatore1;
                } else {
                    risultato = contatore2 - contatore1;
                }
            } else {
                if(typeof(contatore2)=='string'){
                    contatore2 = parseFloat(contatore2);
                    risultato = contatore2 - contatore1;
                } else {
                    risultato = contatore2 - contatore1;
                }
            }
    }
    else if (moltiplicazione){
        if(typeof(contatore1)=='string'){
            contatore1 = parseFloat(contatore1);
                if(typeof(contatore2)=='string'){
                contatore2 = parseFloat(contatore2);
                risultato = contatore2 * contatore1;
                } else {
                    risultato = contatore2 * contatore1;
                }
            } else {
                if(typeof(contatore2)=='string'){
                    contatore2 = parseFloat(contatore2);
                    risultato = contatore2 * contatore1;
                } else {
                    risultato = contatore2 * contatore1;
                }
            }
    }
    else if (divisione){
        if(typeof(contatore1)=='string'){
            contatore1 = parseFloat(contatore1);
                if(typeof(contatore2)=='string'){
                contatore2 = parseFloat(contatore2);
                risultato = contatore2 / contatore1;
                } else {
                    risultato = contatore2 / contatore1;
                }
            } else {
                if(typeof(contatore2)=='string'){
                    contatore2 = parseFloat(contatore2);
                    risultato = contatore2 / contatore1;
                } else {
                    risultato = contatore2 / contatore1;
                }
            }
    }
    display.innerHTML = risultato;
    somma = false;
    sottrazzione = false;
    moltiplicazione = false;
    divisione = false;
    virgola = false;
    contatore1 = risultato;
    contatore2 = 0;
}

//bottoni Ac e C

btnAc.onclick = () => {
    somma = false;
    divisione = false;
    sottrazzione = false;
    percentuale = false;
    moltiplicazione = false;
    virgola = false;
    contatore1 = 0;
    contatore2 = 0;
    risultato = 0;
    display.innerHTML = risultato;
}

btnC.onclick = () => {
    contatore1 = 0;
    virgola = false;
    display.innerHTML = contatore1;
}

//bottone virgola

btnVirgola.onclick = () => {
    virgola = true;
}
