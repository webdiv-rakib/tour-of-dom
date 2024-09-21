// append procedure
// 1. where to add
const placesList = document.getElementById('places-list');
// console.log(placesList);
// 2. what to be added
const li = document.createElement("li");
li.innerText = "pahartoli bon";
// 3. add the child
placesList.appendChild(li);

// 1. where to add
const mainContainer = document.getElementById("main-container");
// console.log(mainContainer);
// 2. what to be added
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My Food List";
section.appendChild(h1);

// creating list item
const ul = document.createElement('ul');
const li1 = document.createElement("li");
li1.innerText = "biriyani";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "kacchi";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "borhani";
ul.appendChild(li3);

section.appendChild(ul);
mainContainer.appendChild(section);

// practice
// 1.where to add.
const mainContainer2 = document.getElementById("main-container");
// 2.what to added
const section2 = document.createElement("section");
const h2 = document.createElement("h1");
h2.innerText = "My Dress Section";
section2.appendChild(h2);

const ul2 = document.createElement("ul");
const li4 = document.createElement("li");
li4.innerText = "Pant";
ul2.appendChild(li4);

const li5 = document.createElement("li");
li5.innerText = "Shirt";
ul2.appendChild(li5);

const li6 = document.createElement("li");
li6.innerText = "Shoe";
ul2.appendChild(li6);
section2.appendChild(ul2);
mainContainer2.appendChild(section2);