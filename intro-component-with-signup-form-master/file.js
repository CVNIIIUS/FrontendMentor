const firstName = document.getElementById("inp1")
const lastName = document.getElementById("inp2")
const email = document.getElementById("inp3")
const password = document.getElementById("inp4")
let valores = [firstName, lastName, email, password]

function clicar() {
    if (valores.values.length == 0){
        firstName.style.borderColor = "red"
        lastName.style.borderColor = "red"
        email.style.borderColor = "red"
        password.style.borderColor = "red"

        firstName.innerHTML += "<img src='estilos/images/icon-error.svg'></img>"
    }
}