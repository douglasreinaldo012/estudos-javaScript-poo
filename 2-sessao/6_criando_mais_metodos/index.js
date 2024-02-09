let pessoa = {
    nome: "Rafael",
    getNome : function(){
        console.log(`Meu nome é ${this.nome}`);
    },
    setNome: function(novoNome){
        this.nome = novoNome;
    }
}

pessoa.getNome();
pessoa.setNome("Rafael Reinaldo");
pessoa.getNome();