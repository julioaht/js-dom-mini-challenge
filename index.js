/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

// its important to check in index.html to be defered so all HTML can first load and
// after the index.js. so the JS code loads correctly... also we could move 
// " <script src="index.js" defer></script>" to the end of body


/***** Deliverable 2 *****/

header.style.color = "blue"

// since the const header wass already defined, i can call it and change color very easy

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const img = document.querySelector(".traveler img")
const h2 = document.querySelector(".traveler h2")
const em = document.querySelector(".traveler em")

img.src = traveler.photo
img.alt = traveler.name
h2.textContent = traveler.name
em.textContent = traveler.nickname



/***** Deliverable 4 *****/

function addAnimal(animal) {
    const animalsUl = document.querySelector('#animals')

    const li = document.createElement("li")
    li.dataset.id = animal.id
    li.innerHTML = `
<p>${animal.description}</p>
  <img src="${animal.photo}" alt="${animal.species}"/>
  <a href="${animal.link}" target="_blank">Here's a video about the ${traveler.animalSightings[0].species} species!</a>`



    animalsUl.append(li)
}
function addAllAnimals(){
    traveler.animals.forEach(addAnimal)
}
addAllAnimals()

// first i find the element were i want to put (append) there animalSightings
// then i create all the elements the a animalSightings has, then i would try to get it in the DOM (append)
// afetr making sure the code is working for one animal im going to create a function for all animalSightings
/***** Deliverable 5 *****/
