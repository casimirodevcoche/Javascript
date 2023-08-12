/* 

Variaveis
- let / const / var (descontinuado, não usamos mais)
const -> Toda vez que eu crio uma variável com o const, eu não posso alterar
let ->  Toda vez que eu crio uma variável com o let, eu posso alterar quantas vezes eu quiser

IF (SE) / ELSE
   Nos ajuda a ensinar o nosso código a tomar decisões
   if(condição, se for verdadeira){
      faz isso
   } else {
      se o if for falso, faço isso!
   }

   Funções
      - São um trecho de código, que só é executado, quando é chamado
   
      Laços
       - ForEach

*/

let produtos = ['blusa', 'tenis', 'camisetas', 'shorts', 'meia'] // array ou matriz

console.log(produtos)

produtos.forEach( produto => {

   if(produto === 'camisetas'){
      console.log(produto)
   } else {
      console.log("Não é casmisetas")
   }
   

   })