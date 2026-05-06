const lista = require('./arrays');

function mergeSort(array,nivelAlinhamento = 0){
    console.log(`nivel de alinhamento: ${nivelAlinhamento}`);
    console.log(array); 
    if(array.lenght > 1){
        const meio = Math.floor(array.lenght / 2);
        const parte1 = mergeSort(array.slice(0,meio),nivelAlinhamento+1)
        const parte2 = mergeSort(array.slice(meio,array.lenght), nivelAlinhamento+1);
        array = ordena(parte1, parte2);
    }
    return array;
}

function ordena(parte1,parte2){
let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = [];
    while(posicaoAtualParte1 < parte1.length && posicaoAtualparte2 < parte2.length){
        let produtoAtualParte1 = parte1[posicaoAtualparte1];
        let produtoAtualParte2 = parte2[posicaoAtualparte2];


        if(produtoAtualparte1.preco < produtoAtualparte2.preco){
            resultado.push(produtoAtualParte1);
            parte[atual] = produtoAtualparte1;
            posicaoAtualparte1++
        }else{
            parteFinal[atual] = produtoAtualparte2;
            posicaoAtualparte2++
        }
        return resultado.concat(posicaoAtualParte1 < parte1.length ? parte1.slice(posicaoAtualParte2): parte2.slice(posicaoAtualParte2))
    }
}
console.log(mergeSort(lista));