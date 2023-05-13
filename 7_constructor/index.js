function heroi(nome,poder){
    this.nome=nome;
    this.poder=poder;
}
let superman = new heroi("superman","voar")
console.log(superman.constructor)