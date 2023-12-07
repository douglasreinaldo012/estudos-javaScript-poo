let carro = {
    modelo: 'celta',
    ano: 2006,
    portas:2
} 
let isencao = 2023 - carro.ano 

console.log('------Informações do veiculo-----------')
console.log(`Modelo:${carro.modelo}`)
console.log(`Portas:${carro.portas}`)
console.log(`ano:${carro.ano}`)
    if(isencao > 10){
        console.log('insento de ipva')
    }
console.log('---------------------------------------')

let pessoa = {
    nome:'Rafael'
}

console.log(pessoa['nome'])

let nomePessoa = pessoa['nome']

console.log(nomePessoa.length)