// Carne - 400 gr por pessoa + de 6 horas = 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml
// Crianças valem por 0,5 pessoa 

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

 let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * (criancas));
    let qtdTotalCerveja = cervejaPorPessoa(duracao) * adultos ;
    let qtdTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * (criancas));

    // console.log(adultos)
    console.log(qtdTotalCarne);


    resultado.innerHTML = `<p>${qtdTotalCarne} Kilos de Carne</p>`
    resultado.innerHTML += `<p>${qtdTotalCerveja} Litros de Cerveja</p>`
    resultado.innerHTML += `<p>${qtdTotalBebidas} Litros de Refrigerante/Agua </p>`

}

function carnePorPessoa(duracao){

    if (duracao >= 6){
        return 3;      
    }else {
        return 1.5;
    }

}

function cervejaPorPessoa(duracao){

    if (duracao >= 6){
        return 4;      
    }else {
        return 2;
    }
}

function bebidasPorPessoa(duracao){

    if (duracao >= 6){
        return 2;      
    }else {
        return 1;
    }
}
