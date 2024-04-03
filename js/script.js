// creo array per la lista della spesa
const shoppingList = ["latte", "pasta", "cereali", "carne", "frutta"];

// prendo elemento ul dal dom
const listElem = document.querySelector(".shopping-list");
console.log(listElem);

// prendo elemento button aggiungi
const addButtonElem = document.getElementById("add");

// prendo elemento button cancella
const deleteButtonElem = document.getElementById("delete");

// prendo elemento input
const inputElem = document.getElementById("new-element");


// creo contatore per ciclo
let i = 0;

while (i < shoppingList.length) {

    // creo elemento li
    const liElem = document.createElement("li");
    console.log(liElem);

    // aggiungo a li il contenuto dell'array 
    liElem.innerHTML = shoppingList[i];

    // aggiungo eventListner a li
    liElem.addEventListener("click", function () {
        liElem.classList.toggle("done");
    });

    // inserisco li dentro ul
    listElem.append(liElem);

    // incremento contatore
    i++;
}

// aggiungo eventListner al button aggiungi
addButtonElem.addEventListener("click", function () {

    // controllo che input non sia vuoto
    if (inputElem.value !== "") {

        // creo elemento li
        const liElem = document.createElement("li");

        // inserisco dento li il contenuto dell'input
        liElem.innerHTML = inputElem.value;

        // azzero contenuto di input
        inputElem.value = "";

        // aggiungo eventListner a li
        liElem.addEventListener("click", function () {
            liElem.classList.toggle("done");
        });

        // // inserisco li dentro ul
        listElem.append(liElem);
    }
});

// aggiungo eventListner al button aggiungi
deleteButtonElem.addEventListener("click", function () {

    // azzero ul
    listElem.innerHTML = "";

});