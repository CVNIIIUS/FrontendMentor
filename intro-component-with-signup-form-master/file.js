let firstName = document.getElementById("inp1")
let lastName = document.getElementById("inp2")
let email = document.getElementById("inp3")
let password = document.getElementById("inp4")

function clicar() {
    if (firstName.value.length == 0  || lastName.value.length == 0  || email.value.length == 0 || password.value.length == 0 ){
        firstName.style.borderColor = "red"
        lastName.style.borderColor = "red"
        email.style.borderColor = "red"
        email.style.color = "red"
        password.style.borderColor = "red"
    }
}