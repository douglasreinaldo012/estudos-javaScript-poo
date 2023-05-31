function ninja(n) {
this.nome = n;
this.atirarShuriken = function() {
    console.log("Atirou o shuriken");
};
}
let naruto = new ninja("Naruto");
console.log(naruto.nome);
naruto.atirarShuriken();
