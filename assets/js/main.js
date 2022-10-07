// Il numero di chilometri da percorrere
// Età del passeggero Sulla base di queste informazioni dovrà 
// calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:


// il prezzo del biglietto è definito in base ai km (0.21 € al km)


let nome = document.getElementById('nome')

let button = document.getElementById('genera')

let anni = document.getElementById('anni')

let km = document.getElementById('km')

let prezzo = 0.21

button.addEventListener('click' , function(){

    let biglietto = km.value * prezzo 

    let nomePasseggero = document.getElementById('nome_passeggero').innerHTML =(nome.value)
    //console.log(nome.value);
    //console.log(km.value);
    //console.log(anni.value);
    document.getElementById('costo_biglietto').innerHTML =(biglietto).toFixed(2) + (' €')
    //console.log(biglietto);
    document.getElementById('random').innerHTML = Math.floor((Math.random() * 100000) + 1)

    document.getElementById('carrozza').innerHTML = Math.floor((Math.random() * 10) + 1)


    if (anni.value < 18){
        let discount = (biglietto - biglietto * 0.2)
        let scontoMinore = document.getElementById('sconto').innerHTML =('Sconto Minorenne')
        console.log(discount.toFixed(2))

} else if (anni.value > 65){
        let discount = (biglietto - biglietto * 0.4)
        let scontoAnziano = document.getElementById('sconto').innerHTML =('Sconto Anziano')
        console.log(discount.toFixed(2))
} 
})


// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.