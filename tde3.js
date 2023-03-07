//documente.write('1. Faça um programa usando switch que leia dois valores do usuário e a operação que ele deseja executar (Operações: soma, subtração, divisão, multiplicação). Execute a operação desejada e imprima na tela.')

// operacao = prompt('Entre com os numeros de 1 a 4')
// switch(operacao){
//   case '1':
//     function somar(a,b){
//       document.write(`A soma de a e b: ${a + b}`)
//     }
//     a = Number(prompt('Digite a: '))
//     b = Number(prompt('Digite b: '))
//     somar(a,b)
//   break
//   case '2':
//     function subtrair(a,b){
//       document.write(`Subtrair a de b: ${a - b}`)
//     }
//     a = Number(prompt('Digite no teclado a: '))
//     b = Number(prompt('Digite no teclado b:'))
//     subtrair(a,b)
//   break
//   case '3':
//     function pularLinha(){
// 	     document.write('<br>')
//     }
//     function multiplicar(a,b){
// 	     document.write(`A multiplicação dos valores é ${a * b}`)
//     }
//       a = Number(prompt('Digite a valor de a'))
//       b = Number(prompt('Digite a valor de b'))
//       multiplicar(a,b)
//   break
//   case '4':
//     function dividir(a,b){
//         document.write(`À divisão de a e b: ${a / b}`)
//     }
//         a = Number(prompt('Digite a:'))
//         b = Number(prompt('Digite b:'))
//         dividir(a,b)
//   break  
// }
// document.write('<br><br>2. Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips. Faça um programa usando switch que calcule o valor total a ser pago por uma pessoa. O programa deverá ler o valor total da compra efetuada e um código que identifique se o comprador é um cliente comum (1), funcionário (2) ou vip (3).')

// sale = prompt('Digite 1 - Cliente comum, 2 - funcionário - 10%, 3 - cliente VIP - 5%')
// switch(sale){
//   case '1':
//     compra = +(prompt(`Valor da compra do Cliente comum: `))
//     desconto = compra
//     document.write(`<br>Compra do Cliente comum R$ ${desconto.toFixed(2)}`)//Se desejar incluir desconto.
//   break
//   case '2':
//     compra = +(prompt(`<br>Digite o valor da compra do Funcionário: `))
//     desconto = compra * 0.9
//       document.write(`Compra do Funcionário com o desconto R$ ${desconto.toFixed(2)}`)
    
//   break
//   case '3':
//     compra = +(prompt(`<br>Digite o valor da Compra do Cliente VIP`))
//     desconto = compra * 0.95
//     document.write(`<br>A compra do Cliente VIP com desconto custa R$ ${desconto.toFixed(2)}`)
//   break
// }

// document.write('3. Dado o valor do produto e a forma de pagamento.
// 1= à vista;
// 2= à prazo.
// Se o produto for pago à vista aplique um desconto de 10% antes de mostrar o valor final, senão informe o mesmo valor do produto.(usando switch)')

//   payment = prompt('Dado o valor do pagamento: 1 - À vista, 2 À prazo')
//   switch(payment){
//     case '1':
//       value = +(prompt(`Digite o valor do produto: `))
//       document.write(`<br>O produto custa R$ ${value.toFixed(2)}`)
//       discount = value * 0.9
//       document.write(`<br>O Preço à vista R$ ${discount.toFixed(2)}`)
//     break
//     case '2':
//       value = +(prompt(`Digite o valor do produto: `)) 
//       document.write(`<br>O produto custa R$ ${value.toFixed(2)}`)
//       discount = value
//       document.write(`<br>O preço do produto à prazo R$ ${discount.toFixed(2)}`)
//     break
//   }

// document.write('<br>4. Crie um programa usando switch que leia o conceito de um aluno na disciplina Desenv Web 2 e imprima seu significado, de acordo com a tabela abaixo. Caso seja informado um conceito inexistente, deve ser exibida uma mensagem de erro. Conceito Significado A Excelente B Ótimo C Bom D Regular E Ruim F Nos vemos de novo ano que vem...')

//   concept = prompt(`<br>Conceito Significado: 1 - A Excelente, 2 - B Ótimo, 3 - C Bom, 4 - D Regular, 5 - E Ruim, 6 - F Nos vemos de novo ano que vem...<br>`)
// switch (concept){
//   case '1':
//     document.write(`<br>A - Execelente`)
//   break
//   case '2':
//     document.write(`<br>B - Ótimo`)
//   break
//   case '3':
//     document.write(`<br>C - Bom`)
//   break
//   case '4':
//     document.write(`<br>D - Regular`)
//   break
//   case '5':
//     document.write(`<br>E - Ruim`)
//   break
//   case '6':
//     document.write(`<br>F - Nos vemos no ano que vem`)
//   break
//   default: 
//     alert(`Número Inválido`)
//     document.write(`<br>* [Número Inválido]`)
// }

document.write(`<br>5. Dada uma letra, usando switch ,escreva na tela se essa letra é uma vogal ou consoante (considerar apenas letras minúsculas).`)

letter = prompt(`<br>Dada a letra escreva se é Vogal ou Consoante`)
switch(letter){
  case 'b':
  case 'c':
  case 'd':
  case 'f':
  case 'g':
  case 'h':
  case 'j':
  case 'k':
  case 'l':
  case 'm':
  case 'n':
  case 'p':
  case 'q':
  case 'r':
  case 's':
  case 't':
  case 'w':
  case 'v':
  case 'x':
  case 'y':
  case 'z':
    document.write(`<br>Consoante`)
  break
  case 'a':
  case 'e':
  case 'i':
  case '0':
  case 'u':
    document.write(`<br>Vogal`)
  break
}