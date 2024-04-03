const shoppingList = ["latte", "pasta", "cereali", "carne", "frutta"];

const listElem = document.querySelector(".shopping-list");
console.log(listElem);

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

