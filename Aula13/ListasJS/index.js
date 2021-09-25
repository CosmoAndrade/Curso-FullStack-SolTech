var brinquedo1 = {
    nome: 'Veículo Controle Remoto Batman Vigilante',
    valor: 59.00
}

var brinquedo2 = {
    nome: 'Carrinho De Controle Remoto Candide Spider Man',
    valor: 59.00
}

var brinquedo3 = {
    nome: 'Veículo de Controle Remoto DC Batman Blecaute ',
    valor: 79.00
}

var carrinhoDeCompras = [brinquedo1,brinquedo2,brinquedo3]
var total = 0

function somar(carrinho) {
    total += carrinho.valor;
}

carrinhoDeCompras.forEach(carrinho  => {
    console.log(carrinho)
   
 
})

carrinhoDeCompras.forEach(somar)
console.log('Total',total)