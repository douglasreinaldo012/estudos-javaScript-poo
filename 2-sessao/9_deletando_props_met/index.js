let pessoa = {
    
}
pessoa.nome = 'EtêProgramador';
pessoa.saudar = function(){
    console.log('Olá')
}
pessoa.falar_nome = function(){
    console.log(`Sou ${pessoa.nome}`)
}



delete pessoa.nome;
delete pessoa.saudar();
pessoa.saudar();
pessoa.falar_nome();