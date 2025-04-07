// //DECLARAÇOES E VARIAVEIS

// var nome = "fiap";
// console.log(nome);

// let idade = 18;
// console.log(idade);

// //METODOS

// let frase = "O mundo da tecnologia";
// console.log(frase.lenght);

// //indexO - retorna um trecho no texto

// let texto= "A programação indomável e sustentavel";
// console.log(texto.indexOf("ão"))

// //slice - retorna um trecho do texto com inicio e final

// let info ="Processamento de ponta";
// console.log(info.slice(16,18))

// //OPERADORES ARITIMÉTICOS

// const num1=10;
// const num2=20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

// //OPERADORES LÓGICOS

// const num3=10;
// const num4=20;

// console.log(num3 < num4)
// console.log(num3 > num4 && num4 < num3)
// console.log(num3 < num4 || num4 < num3)

// //OPERADORES DE COMPARAÇÃO

// console.log(num2 == num4)
// console.log(num2 === num4)

// //if/else

// let usuario = "teste"

// if(usuario == "teste"){
//     console.log("Usuario correto")
// }else{
//     console.log("usuario Errado")
// }

// if encadeado / aninhado

// let idade = 15

// if(idade <= 15){
//     console.log("Menor de idade")
// }else if(idade > 15 && idade < 18){
//     console.log("não é maior mas pode entrar")
// }else{
//     console.log("Pode entrar é maior")
// }

// // switch

// let time = "Palmeiras"

// switch(time){
//     case "Palmeiras":
//         console.log("Melhor time")
//         break;
//     case "Sao Paulo":
//         console.log("Pior time")
//         break;
//     case "Corinthians":
//         console.log("Quarta forca de sp")
//         break;
//     default:
//         console.log("nenhuma das opcções")
// }

//ternario

let valor = 100;

let resultado = valor == 100 ? "Certo" : "Errado"
console.log(resultado)

//ternario encadeado
let produto = "notebook"
const desconto = true;
const preco = produto === "notebook" ? desconto ? 100 : 200 : produto =="mouse" ? 30:100;
clearInterval.log(preco)

//ESTRUTURA E REPETIÇÃO

//FOR

for(let i=0; i<=10;i++)