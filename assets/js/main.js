// Il numero di chilometri da percorrere
// Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:


// il prezzo del biglietto è definito in base ai km (0.21 € al km)

let nome = document.getElementById('nome');

let genera = document.getElementById('genera');

let annulla = document.getElementById('delete');

let anni = document.getElementById('anni');

let km = document.getElementById('km');

let prezzo = 0.21;
//return
genera.addEventListener('click' , function(){
        if(document.getElementById('nome_passeggero').innerHTML =(nome.value) == ''|| anni.value == ''|| km.value == ''
        ){
                alert('Compila tutti i campi')
                return
};

        let biglietto = km.value * prezzo;

        //pulsante genera
        genera = document.getElementById('wiew').style.display = 'block';

        //nome utente
        document.getElementById('nome_passeggero').innerHTML =(nome.value);

        /*console.log(nome.value);
        console.log(km.value);
        console.log(anni.value);*/

        //prezzo biglietto
        document.getElementById('costo_biglietto').innerHTML =(biglietto).toFixed(2) + (' €');

        //console.log(biglietto);
        
        //numero carrozza
        document.getElementById('carrozza').innerHTML = Math.floor((Math.random() * 10) + 1);

        //codice cp
        document.getElementById('random').innerHTML = Math.floor((Math.random() * 100000) + 1);

        //sconto del 20% per i minorenni
        if (anni.value < 18){
                let discount = (biglietto - biglietto * 0.2);
                document.getElementById('sconto').innerHTML =('Sconto Minorenne');
                console.log(discount.toFixed(2));

        //sconto del 40% per gli over 65.
        } else if (anni.value > 65){
                let discount = (biglietto - biglietto * 0.4);
                document.getElementById('sconto').innerHTML =('Sconto Anziano');
                console.log(discount.toFixed(2));
        //nessun sconto
        } else {
                document.getElementById('sconto').innerHTML =('Sconto non disponibile');
        }
});

//pulsante annulla
annulla.addEventListener('click' , function(){
        annulla = document.getElementById('wiew').style.display = 'none'
});
