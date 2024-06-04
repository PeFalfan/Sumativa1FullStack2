
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")



form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""

    if (!regexEmail.test(email.value)) {
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if (password.value.length < 8) {
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warnings
        alert(warnings)
    } else {
        if (email.value == registeredUser.email && password.value == registeredUser.password) {

            alert("Inicio exitoso")
        } else {
            alert("Error al iniciar sesion")
        }
    }
})

var registeredUser = {
    "email": "pete.falfan@gmail.com",
    "password": "12345678"
}