/**
 * Variáveis como declaralas
 * 
 * São uma forma de salvar valores em um espaço determinado da memória
 * 
 * No JavaScript e Possivel Declaralas de 3 formas:
 * 
 * let
 * 
 * var
 * 
 * const
 * 
 * Sendo o (var) o mais antigo e menos recomendado por sua compatibilidade.
 * 
 * os mais utilizados hoje principalmente por suas frameworks são o:
 * 
 * let e const
 * 
 * sendo (const) contendo uma propiedade especial de que seu valor depois de declarado
 * não pode ser alterado (Cont deriva de Constant(constante)).
 * 
 * Exemplos:
 * 
 */

let name = "rafael";

console.log(name);

const nome = 1;

console.log(nome);

var Nome = true;

console.log(Nome);

/*************************************************************************************/
console.log("---------------------------------------------------------------");
/*************************************************************************************/

//let name = 1;

//console.log(name == name && "1" == 1);

var Nome = true;

console.log(!(Nome));

//const nome = 2;
 
//console.log(nome);

/*************************************************************************************/
console.log("---------------------------------------------------------------");
/*************************************************************************************/

/** Alertas 
 * 
 * Alertas no JavaScript pode sem feitos de varias formas, apresentada a seguir 2 delas
 * 
 * Exemplos:
 * 
 */

const completo = prompt("Qual o seu nome completo:");

alert("Ola " + completo);
console.log(completo);

const teste = prompt("quanto é 2 + 2 ?");

if (teste == 4) {
  alert("Acesso permitido.")
} else {
  alert("Acesso Negado.")
}

