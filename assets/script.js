console.log("calcular orçamento ")

// manipulação do DOM

// let = local
// var = global
// const = constante



document.querySelector("#coloração").addEventListener("change", calcular)
document.querySelector("#Tipo").addEventListener("change", calcular)
document.querySelector("#adicional").addEventListener("change", calcular)
document.querySelector("#retoque_sim").addEventListener("change", calcular)
document.querySelector("#retoque_nao").addEventListener("change", calcular)

function calcular(){
    const coloração = document.querySelector("#coloração").value
    let preco = coloração + 1000

    const adicional = document.querySelector("#adicional").value
    let preco = adicional + 1000

    const Tipo = document.querySelector("#Tipo").value
    let preco = Tipo + 1000

    const temLayout = document.querySelector("#retoque_sim").checked
    if (temLayout) preco *= 1.1
    
    document.querySelector("#orcamento").innerText = "R$ " + preco.toFixed(2)
}