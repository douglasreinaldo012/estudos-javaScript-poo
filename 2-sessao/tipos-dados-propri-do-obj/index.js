let maquina = {
    modelo:"Consul2000",
    material:"Aço inox",
    equipamentos:['motor','esteira','cilindro','freio'],
    vaiMontada: true,
    qtdMotores: 1,
    mostraInformacoes(){
        console.log('-------Informações técnicas------')
        console.log(`Modelo:${this.modelo}`)
        console.log(`Tipo de Matareial: ${this.material}`)
        console.log(`Equipamentos: ${this.equipamentos}`)
        console.log(`qtd Motores:${this.qtdMotores}`)
        if(this.vaiMontada == false){
            console.log(`vai montada: Não`)
        }else {
            console.log('vai montada: sim')
        }
        console.log('---------------------------------')
    }
};

maquina.mostraInformacoes();