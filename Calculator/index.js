let form = document.querySelector('form')


form.addEventListener('submit', function(event) {
    event.preventDefault()
    let firstNum = document.getElementById('first-num')
    let secondNum = document.getElementById('second-num')

    let result = document.getElementById('result')

    result.value = Number(firstNum.value) + Number(secondNum.value)
})