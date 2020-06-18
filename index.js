let buttonValue = document.getElementById('button-input')

buttonValue.addEventListener('click', function () {
    let regexNumber = /^\d{10,12}$/
    let inputValue = document.getElementById('input').value

    if (inputValue.match(regexNumber)) {
        alert('value anda benar')
    } else {
        alert('value anda salah')
    }
})