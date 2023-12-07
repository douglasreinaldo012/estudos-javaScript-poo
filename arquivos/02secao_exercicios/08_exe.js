//exercicio usando o destructuring
let caminhao = {
    eixos:2,
    portas:2,
    cambio:"manual",
    carga:"grãos"
};
let {eixos,portas,cambio,carga} = caminhao;
console.log(portas, eixos,cambio,carga);

