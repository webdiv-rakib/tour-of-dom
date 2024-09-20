// append procedure
// 1. where to add
const placesList = document.getElementById('places-list');
// console.log(placesList);
// 2. what to be added
const li = document.createElement("li");
li.innerText = "pahartoli bon";
// 3. add the child
placesList.appendChild(li);