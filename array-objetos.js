//1-Percorrer array e printar valor no console
// const arr = [2, 4, 5, 6, 7, 9];

// for (let i = 0; i <= arr.length; i++) {
//     console.log(arr[i])
// }

// //Inverter ordem do for e printar valores
// const arry = [4, 6, 8, 9, 3, 6];
// for (let i = arry.length - 1; i >= 0; i--) {
//     console.log(arry[i])
// }

//Localizar índice de valor da array
// const arrai = [1, 2, 3, "confusa", 5, 6, 7];
// for (let i = 0; i < arrai.length; i++) {

//     if (arrai[i] === 'confusa') {
//         console.log(i)
//     }
// }

// Escreva uma função comprimentoMedioPalavras
// que receba duas strings e devolva o comprimento médio de ambas as strings.
function comprimentoMedioPalavras(str1, str2) {
    let media = (str1.length + str2.length) / 2;
    return media;
}

console.log(comprimentoMedioPalavras("xuxu","beleza"));

// Escreva uma função chamada pegaElemento.
// Dado um array e um inteiro, pegaElemento devolve o valor de acordo com o inteiro dado,
// dentro do array fornecido.
// Se o array tiver um comprimento de 0, ele deve retornar undefined.

// Exemplo de entrada:
// console.log(pegaElemento([1, 3, 5], 1);

function pegaElemento(arr, num){
    //     for (let i =0; i<arr.length; i++ ){
    //        return arr[num];
        
    // }
    // console.log(pegaElemento([1, 3, 5, 7, 3, 9], 5));
    
    // Escreva uma função chamada credencialEhValida.
    // Dado um nome e uma senha, credencialEhValida retorna true se o nome contiver mais do que
    // 3 caracteres e a senha, pelo menos 8 caracteres. Caso contrário, retorna false.
    
    // Exemplo:
    // console.log(credencialEhValida('Xuxu', 'minhasenha'));
    // function credencialEhValida(nome, senha){
    //     if (nome.length >=3 && senha.length>=8){
    //         return true
        
    //     }else {
    //         return false
    //     }
        
    // }
    // console.log(credencialEhValida('abacaxi', 'minhasenha'));