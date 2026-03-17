function exercicio2() {
    const valor = Number(prompt("Digite o valor que você ganha por horas:"))
    const horas = Number(prompt("Digite suas horas trabalhadas:"))
    const resultado = (valor*horas)
    alert(resultado)
}
const buttonExercicio2 = document.getElementById("exercicio2")
buttonExercicio2.addEventListener('click',() => { exercicio2() })
// pra usar o carinha de escuta - addEventListner