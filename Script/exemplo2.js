const footer = document.getElementById("rodape")
//footer.style.color = "red"

const NovoTitulo = document.createElement("h2")
NovoTitulo.textContent = "um novo título"
//console.log(NovoTitulo)
footer.appendChild(NovoTitulo)

const header = document.getElementById("exemplo")
header.appendChild(NovoTitulo)

//createElement- cria um elemento e para aparecer é necessário usar o appendChild para ligar a um "filho"
// getElementById- puxa um elemendo do HTML/DOM

header.addEventListener("click", () => {
    alert("batata")
})
