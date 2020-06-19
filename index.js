let buttonValue = document.getElementById('button-input')

buttonValue.addEventListener('click', function () {
    let regexNumber = /^\d{10,12}$/
    let inputValue = document.getElementById('input').value

    if (inputValue.match(regexNumber)) {
        alert('Nomor yang anda masukan benar')
    } else {
        alert('value harus berisi angka / angka anda kurang dari 10 angka atau lebih dari 12 angka')
    }
})