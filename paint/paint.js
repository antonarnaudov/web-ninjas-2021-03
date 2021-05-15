let color

document.addEventListener('click', event => {
    if (event.target.classList.contains('pen')) {
        color = event.target.classList[1]

    } else if (event.target.classList.contains('table-col')) {
        event.target.style.backgroundColor = color
    }
})