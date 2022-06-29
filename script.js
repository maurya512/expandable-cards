// ! grab all the panels/cards from html
const panels = document.querySelectorAll('.panel')

// ! method to click and expand the cards 
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

// ! remove or switch between active classes
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}