let color

document.addEventListener('click', event => {
    if (event.target.classList.contains('pen')) {
        color = event.target.style.backgroundColor

    } else if (event.target.classList.contains('table-col')) {
        if (color) {
            event.target.style.backgroundColor = color
        }
    }

})