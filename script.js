var range = document.querySelector('#lengthPassword');
var val = document.querySelector('#cont');
var output = document.querySelector('#outputPassword');


range.addEventListener('input', function () {
    val.textContent = this.value
});

function getPassword() {

    var itens = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";

    var password = "";

    for (var i = 0; i < range.value; i++) {

        var randomNumber = Math.floor(Math.random() * itens.length);
        password += itens.substring(randomNumber, randomNumber + 1);

    }
    document.getElementById('outputPassword').value = password
};
