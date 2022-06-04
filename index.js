//esempio 1

/*console.log("Io sono la prima scritta");

setTimeout(() => {
    console.log("Io sono il timeout");
});

console.log("Io sono la seconda scritta");*/



//esempio 2

/*console.log("Io sono la prima scritta");

const xhr = new XMLHttpRequest();

xhr.onload = (dati) => {
    if(dati.target.readyState == 4 && dati.target.status == 200){
        console.log(dati.target.responseText);
    }
};

xhr.open("GET", "https://baconipsum.com/api/?type=meat-and-filler")
xhr.send();

console.log("Io sono la seconda scritta");*/



//esempio 3

/*console.log("Io sono la prima scritta");



fetch("https://baconipsum.com/api/?type=meat-and-filler", {
    method: "GET",
})
.then((dati) => {
    return dati.json();
})
.then((risultato) => {
    console.log(risultato);
});

console.log("Io sono la seconda scritta");*/

//esempio 4

console.log("Io sono la prima scritta");



const mia_promessa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Risolto"), 4000);

    setTimeout(() => reject("Errore creato nella promise"), 3000);
}, 
(error) => {
    return "C'è stato un errore" + error;
    
});


mia_promessa
.then(
    (dati) => console.log(dati)
    )
.catch((error) => console.log(error));

console.log("Io sono la seconda scritta");




