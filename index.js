//ar nome = prompt("Qual seu nome?")
//var nome = " Alex "


//lert("Seja Bem Vindo " + nome)


//var numero1 = prompt("Digite o primeiro numero")
///var numero2 = prompt("Digite o segundo numero")
//alert("Resultado" + numero1 * numero2)  




//var numero1 = Number(prompt("Digite o Primeiro numero"))
//var numero2 = Number(prompt("Digite o Segundo numero"))

//alert("Resultado da Multiplicação " + numero1 * numero2)
//alert("Resultado Da Divisão " + numero1 / numero2)
//alert("Resultado da Soma " + (numero1 + numero2))
//alert("Resultado da Subtração " + (numero1 - numero2))

//var numero = prompt("Digite um numero")
//alert("O dobro sera " + numero * 2)
//alert("O triplo sera " + numero * 3) 
 


/*var nome = prompt("Qual o nome do Aluno?" )
var nota1 = Number (prompt("Qual a primeira nota do" + nome))
var nota2 = Number (prompt("Qual a segunda nota do"  + nome))
var media = ((nota1 + nota2) / 2)
alert("A media final sera" + media) 

if (media >=6){
 alert("Aluno APROVADO") 
}

else{
alert("Aluno REPROVADO")
}   */



/*var idade =prompt("Qual a sua Idade?")
if (idade >=18){
    alert("MAIOR DE IDADE")


}
else{

    alert("MENOR DE IDADE")
}

*/

/*var nota =prompt("QUAL A SUA NOTA?")
if (nota >=60) {
    alert ("APROVADO")
}

else{

    alert("REPROVADO")


} */

/*var peso =(prompt("Qaul seu peso? "))
var altura =(prompt("Qaul sua altura? "))
var IMC =(peso / (altura * altura)).toFixed(2)


alert("SEU IMC É "  + IMC)

if(IMC <= 16.9){

    alert("Muito abaixo do peso")
}

if(IMC >= 17 && IMC <= 18.4 ){

    alert("Abixo do peso")
}

if (IMC >= 18.5 && IMC <= 24.9 ){

    alert("Peso Normal"+ IMC)

}

if(IMC >=25 && IMC <= 29.9){
    alert("Acima do Peso" +IMC )
}
1


if(IMC >=30 && IMC <=34.9){
    alert("Obesidade grau |"+IMC) 
}


if(IMC >=35 && IMC<=40){
    alert("Obesidade grau ||"+IMC)
} 

if(IMC >=40){
    alert("Obesidade grau |||"+IMC)
} */




    //var listaDeCursos= [  "Programação", "Enfermagem", "Estetica","Administração", "Segurança", "informatica", "Farmacia"]
    /* alert(listaDeCursos [0])
    alert(listaDeCursos [1])
    alert(listaDeCursos [2])
    alert(listaDeCursos [3])
    alert(listaDeCursos [4])
    alert(listaDeCursos [5])
    alert(listaDeCursos [6]) */
    //listaDeCursos.forEach(curso =>alert(curso))   

    //for(var i=0; i<=6; i++){    
        
        //alert(listaDeCursos [i])
        
          //}                         
          


          /*var   qtdenota= prompt("Quantas notas serão avaliadas?")   
        
        var acumuladordeNotas =0;
        
         for(var i=1; i<=qtdenota; i++){
         var nota = prompt("qual o valor da nota?" +i)
         acumuladordeNotas = acumuladordeNotas + Number (nota)
          }
alert("A media sera" + (acumuladordeNotas / Number  (qtdenota))) */

//var ListadeAlunos = ["Maylon", "Arthur", "Ryan", "Raphael", "Maria", "Gabriel", "Dalton", "Patrick"]
//ListadeAlunos.forEach(nome => alert(nome + "Faz curso de Programação"))

//var numero =prompt("Digite o numero do indice do aluno")
//alert("O indice do aluno e" + numero + "é" ListadeAlunos + numero)
//var indiceProcurado =prompt("Qual o idice do aluno")
//alert(ListadeAlunos[indiceProcurado])

//var numero = prompt("Digite um número")
//for(var i=0; i<=9; i++){

    //alert( i + "x" + numero + " = " +(numero * [i]))
//} 


// var lisatadeJogos = ["fifa", "COD", "Red Dead", "CS"]
/*var novojogo = prompt("Digite um jogo para adicionar")
lisatadeJogos.push (novojogo)'
alert(lisatadeJogos[4]) 

lisatadeJogos.pop 
lisatadeJogos.shift
lisatadeJogos.splice */


/*var qtdeJogosNovos = prompt("Quantos jogos vc quer adicionar?")
for(var i=0; i<qtdeJogosNovos; i++){

    var jogo = prompt ("Digite o nome do jogo")
    lisatadeJogos.push(jogo)
}
alert(lisatadeJogos) */
//while(operacao != 3)


/* var ListadeAlunos = ["Maylon", "Arthur", "Ryan", "Raphael", "Maria", "Gabriel", "Dalton", "Patrick"]

var curso = {
nomeDocurso: "Logica de Programação",
alunos: ListadeAlunos,
cargaHoraria: "3hrs",
sala: "10",
professor: "Daniel"
}
alert(curso.nomeDocurso + alunos + cargaHoraria + sala + pro) 
*/


/*alert("Seja Bem Vindo ao Sistema")
var operacao = prompt("Oque deseja Consultar? \n1- Ver Produtos Disponiveis \n2- Cadastrar Produto \n3- Consultar Produto \n4- Finalizar Pesquisa")

if(operaca) ==1{ 
    alert("Toalha, Papel, Copo, Faca")
}
else if(operacao==2){
 var produto =prompt("Digite um Produto que queira")
alert("Produto" + var + "Cadastrado com Suceso")
}
*/

var nome = prompt ("Qual seu nome?")
alert("Seja Bem vindo ao banco BRASIL "+ nome)
var i=0
var saldo = 10500

while(operacao !=4 ) {
 var operacao= prompt("Oque vc deseja Fazer? \n1- Consultar Saldo Disponivel \n2- Depositar Dinheiro \n3- Sacar Dinheiro \n4- Sair")

if (operacao==1){
alert(saldo)
}
if (operacao==2){
var deposito= Number(prompt("Qual valor deseja depositar?"))
saldo = saldo + deposito
alert("Seu saldo agr é " + saldo)
}
if (operacao==3){
var sacar= Number(prompt("Qual valor deseja sacar?"))
saldo = saldo - sacar
alert("Seu saldo agr é " + saldo)
}
if (operacao==4){
alert 
}


}




