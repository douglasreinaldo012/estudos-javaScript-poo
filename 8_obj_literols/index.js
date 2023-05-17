let portas1 = 4;
let modelo1 = "celta";
let freio = "ABS";

let carro = {
    portas1,
    modelo1,
    freio,
    freiar(){
        console.log("freiando...parou!");
    }
}
carro.freiar();
let tipo = 'tipo_de_';
let caminhao = {
    [tipo+"caminhao"]:"volvo"
}
let barco= {
    [tipo+"barco"]:"motor"
}
console.log(caminhao.tipo_de_caminhao);
console.log(barco.tipo_de_barco);
