let carro = {nome:"celta",portas:4,freio:'abs',ano:2008}
console.log("informações do veículo   ")
console.log("--------------------------")
console.log(`Modelo:${carro.nome}`)
console.log(`Nº de portas:${carro.portas}`)
console.log(`Freios:${carro.freio}`)
console.log(`Ano:${carro.ano}`)
console.log("----------------")

anoaceito = 2010
if(carro.ano < anoaceito){
    console.log("veículo não aceito para a aprovação do empréstimo!")
}else{
console.log("veiculo aceito!")
}