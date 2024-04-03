const shoppingList = ["latte", "pasta", "cereali", "carne", "frutta"];

const listElem = document.querySelector(".shopping-list");
console.log(listElem);

const addButtonElem = document.getElementById("add");

const deleteButtonElem = document.getElementById("delete");

const inputElem = document.getElementById("new-element");

let i = 0;

while (i < shoppingList.length) {

    const liElem = document.createElement("li");
    console.log(liElem);

    liElem.innerHTML = shoppingList[i]; 

    liElem.addEventListener("click", function() {
        liElem.classList.toggle("done")
    });
    listElem.append(liElem);
    i++;
}

addButtonElem.addEventListener("click", function () {

    const liElem = document.createElement("li");
    liElem.innerHTML = inputElem.value; 
    inputElem.value = "";
    liElem.addEventListener("click", function() {
        liElem.classList.toggle("done")
    });
    listElem.append(liElem);
});

deleteButtonElem.addEventListener("click", function() {
    listElem.innerHTML = "";
});