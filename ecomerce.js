let listaProdutos = []

let camiseta = {
    tamanho:'unico',
    cor:'preta',
    modelo:'babylook',
    descricao:'Camiseta reprograma estilo diva function',
    preco:'35',
    descrevaMe: function(){alert(`${this.descricao} - Preco R$ ${this.preco}`)},
    descrevaMe2(){alert(this.descricao + '- Preco R$ '+ this.preco.toFixed(2))}
}
let calca = {
    tamanho: ['P', 'M', 'G', 'GG'],
    cor: 'preta',
    modelo:'jeans',
    descricao:'Calca Moleton',
    preco:'30',
    descrevaMe: function(){alert(`${this.descricao} - Preco R$ ${this.preco}`)}
}

let adesivo = {
    cor:'branco',
    descricao:'Adesivo reprograme seu mundo',
    preco:'5', 
}
listaProdutos.push(camiseta, calca, adesivo)


//console.log(camiseta.descricao)
//console.log(calca.modelo)