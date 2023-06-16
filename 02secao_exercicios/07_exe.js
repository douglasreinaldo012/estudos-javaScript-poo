let freio1 = "abs";
let qtd1portas = "4";

let celta = {
    modelo:"celta",
    freio1, 
    qtd1portas,
    info_veiculo(){
     console.log("Modelo:"+this.modelo);
     console.log("Freio:"+this.freio1);
     console.log("qtd Portas:"+this.qtd1portas);
    }
};
let corsa = {
    modelo:"corsa",
    freio1,
    qtd1portas:"2",
    info_veiculo(){
        console.log("Modelo:"+this.modelo);
        console.log("Freio:"+this.freio1);
        console.log("qtd Portas:"+this.qtd1portas);
       }
};

corsa.info_veiculo();
celta.info_veiculo();
//resolução do exercicio
let qtd ="qtd_de";

let arvore = {
[qtd+"frutos"]:10
};
let carro ={
[qtd+"portas"]:2
};
let pessoa = {
[qtd+"pernas"]:2
}
console.log(arvore);
console.log(carro);
console.log(pessoa);
