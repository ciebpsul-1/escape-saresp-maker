const irPraSenhaBotao = document.getElementById("seta-ir-pra-senha")
const popUpInicial = document.getElementById("pop-up-1")
const popUpSenha = document.getElementById("pop-up-senha")
const senha = document.getElementById("senha")
const fecharSenhaBtn = document.getElementById("fechar-senha")
const telaAcertoSenha = document.getElementById("pop-up-correto")
const voltarRespostaBotao = document.getElementById("resposta-correta")
const telaErroSenha = document.getElementById("pop-up-incorreta")
const voltarRespostaIncorretaBotao = document.getElementById("resposta-incorreta")
const telaFinal = document.getElementById("pop-up-final")

let senhaAtual = 1
let senhaTentativa = ""
let senhaFormatada = ""
let senhas = ["construtor", "casinha", "materiais", "rapido", "sua"]

irPraSenhaBotao.addEventListener("click", () => {
    popUpInicial.classList.toggle("desabilitar")
    mostrarPopUpSenha()
})

voltarRespostaBotao.addEventListener("click", () => {
    telaAcertoSenha.classList.toggle("desabilitar")
    mostrarPopUpSenha()
})

voltarRespostaIncorretaBotao.addEventListener("click", () => {
    telaErroSenha.classList.toggle("desabilitar")
    mostrarPopUpSenha()
})

fecharSenhaBtn.addEventListener("click", () => {
    popUpInicial.classList.toggle("desabilitar")
    popUpSenha.classList.toggle("desabilitar")
})


document.addEventListener("keydown", (e) => {
    if (e.key == "Backspace") {
        senha.innerHTML = ""
        senhaFormatada = ""
        senhaTentativa = ""
    } else if (e.key == "Enter") {
        if (popUpSenha.classList.contains("desabilitar")) { return }

        if (senhaTentativa.toLowerCase() == senhas[senhaAtual - 1]) {
            senhaAtual++
            if (senhaAtual > 5) {
                popUpSenha.classList.toggle("desabilitar")
                telaFinal.classList.toggle("desabilitar")
            } else {
                popUpSenha.classList.toggle("desabilitar")
                telaAcertoSenha.classList.toggle("desabilitar")
            }
        } else {
            popUpSenha.classList.toggle("desabilitar")
            telaErroSenha.classList.toggle("desabilitar")
        }

        senhaTentativa = ""
        senhaFormatada = ""
    }
    else if (e.key == "+") {
        if (senhaAtual < 5) {
            senhaAtual++
        }
    }
    else if (e.code.substring(0, 3) == "Key") {
        if (senhaTentativa.length > 12) { return }
        senhaTentativa += e.key.toUpperCase()
        senhaFormatada += e.key.toUpperCase() + " "
        senha.innerHTML = senhaFormatada
        console.log(senhaTentativa)
    }
})

function mostrarPopUpSenha() {
    popUpSenha.classList.toggle("desabilitar")
    popUpSenha.children[0].textContent = `SENHA ${senhaAtual}/5`
    senha.innerHTML = ""
    for (let _ in senhas[senhaAtual - 1]) {
        senha.innerHTML += "* "
    }
}
