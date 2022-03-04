const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggles => {
    toggles.addEventListener('click', () => {
        toggles.parentNode.classList.toggle('active')
    })
})