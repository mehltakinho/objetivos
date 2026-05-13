const botoes = document.querySelectorAll(".botao")
console.log(botoes)
const textos = document.querySelectorAll(".aba-conteudo")
console.log(textos)

for(let i = 0; i<botoes.length; i++){
    botoes[i].onclick = function (){
        for(let j=0; j<botoes.length; j++){
            botoes[j].classList.remove("ativo")
            textos[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        textos[i].classList.add("ativo")
    }
}

const contadores = document.querySelectorAll(".contador")
const tempoObjetivol = new Date("2026-10-05T00:00:00")
const tempoObjetivo2 = new Date("2026-11-05T00:00:00")
const tempoObjetivo3 = new Date("2026-12-05T00:00:00")
const tempoObjetivo4 = new Date("2027-01-05T00:00:00")
