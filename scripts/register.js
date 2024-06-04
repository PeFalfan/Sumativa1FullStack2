const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if (nombre.value.length < 6) {
        warnings += `El nombre no es valido (Debe tener al menos 6 caracteres) <br>`
        entrar = true
    }
    if (!regexEmail.test(email.value)) {
        warnings += `Se espera un @ y una extención <br>`
        entrar = true
    }
    if (pass.value.length < 8) {
        warnings += `La contraseña no es valida, se espera un largo minimo de 8 caracteres <br>`
        entrar = true
    }

    if (password.value != password1.value) {
        warnings += 'Las contraseñas no coinciden'
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "Enviado"
        alert("Creación de usuario completada!")
    }
})