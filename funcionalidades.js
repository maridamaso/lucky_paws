function trocaModo() 
{
    let modoAtual = document.body.classList.contains('modoClaro') ? 'modoClaro' : 'modoEscuro'; 
    let novoModo = modoAtual === 'modoClaro' ? 'modoEscuro' : 'modoClaro';
    /* 
    Utilizando a forma mais compacta de if/else que consiste em (condição ? valorSeVerdadeiro : valorSeFalso)
    */
  
    let elementos = document.querySelectorAll('.' + modoAtual); //Pegando todos os elementos que possuem a classe e alterando
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].classList.remove(modoAtual);
      elementos[i].classList.add(novoModo);
    }
  
    document.body.classList.remove(modoAtual);
    document.body.classList.add(novoModo);
    
    let imagemModo = document.querySelector('#trocaIcone img'); //Pegando o elemento que tem a id trocaIcone
    imagemModo.setAttribute('src', novoModo === 'modoClaro' ? 'Imagens/sun.png' : 'Imagens/moon.png');
    //Mudando o caminho da imagem
  }
function sortear(){
  let quantNum  = parseInt(document.querySelector('#quantNum').value);
  let intervalo01  = parseInt(document.querySelector('#intervalo01').value);
  let intervalo02  = parseInt(document.querySelector('#intervalo02').value);
  let numeroAleatorio;
  let numeroAleatorios = [];
  
  if(quantNum === 1)
  {
    if(intervalo01 > intervalo02)
    {
      numeroAleatorio = Math.floor(Math.random() * (intervalo01 - intervalo02 + 1)) + intervalo02;
		  alert("O numero escolhido foi:" + numeroAleatorio)
    }
    else
    {
      numeroAleatorio = Math.floor(Math.random() * (intervalo02 - intervalo01 + 1)) + intervalo01;
		  alert("O numero escolhido foi:" + numeroAleatorio)
    }
  }
  else
  {
    if(intervalo01 > intervalo02)
    {
      for (let i = 0; i < quantNum; i++) {
        let numero = Math.floor(Math.random() * (intervalo01 - intervalo02 + 1)) + intervalo02;
        numeroAleatorios.push(numero);
      }
      alert('Os números escolhidos foram: ' + numeroAleatorios);
    }
    else
    {
      for (let i = 0; i < quantNum; i++) {
        let numero = Math.floor(Math.random() * (intervalo02 - intervalo01 + 1)) + intervalo01;
        numeroAleatorios.push(numero);
      }
      alert('Os números escolhidos foram: ' + numeroAleatorios);
    }
  }
}
function trocaValor()
{
  let valor = parseInt(document.querySelector('#quantNum').value);
  let texto = document.querySelector("#texto");
  if (valor === 1)
  {
    texto.innerHTML = 'número';
  }
  else 
  {
    texto.innerHTML = 'números';
  }
}