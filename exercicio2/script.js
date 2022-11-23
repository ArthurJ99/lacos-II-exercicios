let numUsuario= Number(prompt('insira um número:'))

let tabuada=[1,2,3,4,5,6,7,8,9,10]

for(let i in tabuada){
    console.log(`${numUsuario} x ${tabuada[i]} = ${numUsuario*tabuada[i]}`);
}
