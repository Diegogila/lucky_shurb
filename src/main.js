
const serviceCards = document.querySelectorAll(".services__card");
console.log(serviceCards)

serviceCards.forEach(card => {
    card.addEventListener('mouseover', () => console.log('Hello there'))
})