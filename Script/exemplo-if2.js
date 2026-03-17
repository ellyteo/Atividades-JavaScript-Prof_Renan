const nota1 = Number(prompt("Digite a primeira nota:"))
const nota2 = Number(prompt("Digite a segunda nota:"))
const nota3 = Number(prompt("Digite a terceira nota:"))

const media = (nota1 + nota2 + nota3) / 3
console.log(media) // aparecerá na aba f12 em "console"

if (media < 3) {
    alert("Horrível.")
} else if (media < 7) {
    alert("Pode melhorar!")
} else if (media <= 10) {
    alert("Exelente!")
} else {
    alert("Essa nota não existe!")
}