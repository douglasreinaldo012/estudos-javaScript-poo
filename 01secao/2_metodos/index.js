let pessoa={nome:"Douglas",idade:27,formacao:"Programação",filhos:"Rafael",getSaudacao(){
    console.log(`Olá, Sou ${this.nome},tenho ${this.idade} anos e tenho um filho que se chama ${this.filhos}.`)
}, setSaudacao(){
    this.nome = "Reinaldo";
}
}
pessoa.getSaudacao();
pessoa.setSaudacao();
pessoa.getSaudacao();
