let pessoa = {
    
}

pessoa.nome = 'EtêProgramador';
pessoa.saudar = function(){
    console.log('Olá')
}
pessoa.falar_nome = function(){
    console.log(`Sou ${pessoa.nome}`)
}

pessoa.saudar()
pessoa.falar_nome()
