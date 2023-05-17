// Função que troca entre modo claro e modo escuro
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


// Função de sorteio de números 
function sortearNumero(){
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
      resultado(numeroAleatorio);

    }
    else
    {
      numeroAleatorio = Math.floor(Math.random() * (intervalo02 - intervalo01 + 1)) + intervalo01;
      resultado(numeroAleatorio);
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
      resultado(numeroAleatorios);
    }
    else
    {
      for (let i = 0; i < quantNum; i++) {
        let numero = Math.floor(Math.random() * (intervalo02 - intervalo01 + 1)) + intervalo01;
        numeroAleatorios.push(numero);
      }
      resultado(numeroAleatorios);
    }
  }
}

// Função que sorteia nomes

function sortearNomes()
{
  let listaNome = document.querySelector('#campoNome').value;
  let nomes = listaNome.split(',');
  let sorteioNome = Math.floor(Math.random() * nomes.length);
  let resultadoSorteioNome = nomes[sorteioNome];

  resultadoNome(resultadoSorteioNome);
}

// Função que mostr o resultado do sorteio de nomes
function resultadoNome(valor){
  let conteudoNome = document.querySelector('.conteudoSorteioNomes');
  let resultadoNome = document.querySelector('.resultadoSorteioNome');
  let resultadoMostrado = document.querySelector('#resultadoNome');
  resultadoMostrado.textContent = valor;

  conteudoNome.style.display = 'none';
  resultadoNome.style.display = 'block';
}
// Função que volta a visualização para a tela de sorteio de biscoito da sorte
function voltarNome(){
  let conteudoNome = document.querySelector('.conteudoSorteioNomes');
  let resultadoNome = document.querySelector('.resultadoSorteioNome');

  conteudoNome.style.display = 'block';
  resultadoNome.style.display = 'none';
}

// Função que sorteia um string aletoria
function sortearBiscoito()
{
  let biscoitos = ['A vida trará coisas boas se tiver paciência.', 'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.', 'A maior de todas as torres começa no solo.',
  'Não há que ser forte. Há que ser flexível.', 'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.', 'A juventude não é uma época da vida, é um estado de espírito.',
  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.', 'Siga os bons e aprenda com eles.', 'Não importa o tamanho da montanha, ela não pode tapar o sol.', 
  'O bom-senso vale mais do que muito conhecimento.', 'Quem quer colher rosas tem de estar preparado para suportar os espinhos.', 'São os nossos amigos que nos ensinam as mais valiosas lições', 'Aquele que se importa com o sentimento dos outros, não é um tolo.', 
  'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.', 'Uma bela flor é incompleta sem as suas folhas.', 'Sem o fogo do entusiasmo, não há o calor da vitória.', 'O riso é a menor distância entre duas pessoas.', 
  'Amizade e Amor são coisas que se unem num piscar de olhos.', 'Surpreender e ser surpreendido é o segredo do amor.', 'Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.', 'A sorte favorece a mente bem preparada.', 
  'As pessoas esquecerão o que você disse e o que você fez… mas nunca esquecerão como se sentiram.', 'Espere pelo mais sábio dos conselhos: o tempo.', 'Você é do tamanho do seu sonho.', 'Pare de procurar eternamente; a felicidade está mesmo aqui ao seu lado.', 'O conhecimento é a única virtude e a ignorância é o único vício.', 
  'O nosso primeiro e último amor é… o amor-próprio.', 'Deixe de lado as preocupações e seja feliz.', 'Nós somos o que pensamos.', 'A maior barreira para o sucesso é o medo do fracasso.', 'A falha é apenas uma oportunidade para recomeçar de novo com mais experiência.', 'A inspiração vem dos outros. A motivação vem de dentro de nós.'];
  let sorteioString = Math.floor(Math.random() * biscoitos.length);
  let resultadoSorteioString = biscoitos[sorteioString];
  resultadoBiscoito(resultadoSorteioString);
}

//Função que troca a visualização da página de Conteudo para Resposta BISCOITO
function resultadoBiscoito(valor){
  let conteudoBiscoito = document.querySelector('.conteudoSorteioBiscoito');
  let resultadoBiscoito = document.querySelector('.resultadoSorteioBiscoito');
  let valorResultado = document.querySelector('#resultadoBiscoito');

  conteudoBiscoito.style.display = 'none';
  resultadoBiscoito.style.display = 'block';

  valorResultado.textContent = valor;
}

// Função que volta a visualização para a tela de sorteio de biscoito da sorte
function voltarBiscoito(){
  let conteudoBiscoito = document.querySelector('.conteudoSorteioBiscoito');
  let resultadoBiscoito = document.querySelector('.resultadoSorteioBiscoito');

  conteudoBiscoito.style.display = 'block';
  resultadoBiscoito.style.display = 'none';
}

// Função que troca o valor para números ou número de acordo com a quant que a pessoa digitar
function trocaValor()
{
  let valor = parseInt(document.querySelector('#quantNum').value);
  let texto = document.querySelector("#texto");
  let trocaNome = document.querySelector('#singular');
  if (valor === 1)
  {
    texto.innerHTML = 'número';
    trocaNome.innerHTML = 'O NÚMERO SORTEADO FOI';
  }
  else 
  {
    texto.innerHTML = 'números';
    trocaNome.innerHTML = 'OS NÚMEROS SORTEADOS FORAM';
  }
}


//Função que troca a visualização da página de Conteudo para Resposta
function resultado(valor){
  let conteudoNumeros = document.querySelector('.conteudoSorteioNumeros');
  let resultadoNumeros = document.querySelector('.resultadoSorteioNumeros');
  let valorResultado = document.querySelector('#resultado');

  conteudoNumeros.style.display = 'none';
  resultadoNumeros.style.display = 'block';

  valorResultado.textContent = valor;
}

// Função que volta a visualização para a tela de sorteio dde numeros
function voltarNumero(){
  let conteudoNumeros = document.querySelector('.conteudoSorteioNumeros');
  let resultadoNumeros = document.querySelector('.resultadoSorteioNumeros');

  conteudoNumeros.style.display = 'block';
  resultadoNumeros.style.display = 'none';
}

function sorteioNumeroON()
{
  let conteudoNumeros = document.querySelector('.conteudoSorteioNumeros');
  let conteudoBiscoito = document.querySelector('.conteudoSorteioBiscoito');
  let conteudoNome = document.querySelector('.conteudoSorteioNomes');

  conteudoNumeros.style.display = 'block';
  conteudoBiscoito.style.display = 'none';
  conteudoNome.style.display = 'none';

  let resultadoBiscoito = document.querySelector('.resultadoSorteioBiscoito');
  let resultadoNome = document.querySelector('.resultadoSorteioNome');
  let resultadoNumeros = document.querySelector('.resultadoSorteioNumeros');

  resultadoNumeros.style.display = 'none';
  resultadoBiscoito.style.display = 'none';
  resultadoNome.style.display = 'none';
}

function sorteioNomeON()
{
  let conteudoNumeros = document.querySelector('.conteudoSorteioNumeros');
  let conteudoBiscoito = document.querySelector('.conteudoSorteioBiscoito');
  let conteudoNome = document.querySelector('.conteudoSorteioNomes');

  conteudoNumeros.style.display = 'none';
  conteudoBiscoito.style.display = 'none';
  conteudoNome.style.display = 'block';

  let resultadoBiscoito = document.querySelector('.resultadoSorteioBiscoito');
  let resultadoNome = document.querySelector('.resultadoSorteioNome');
  let resultadoNumeros = document.querySelector('.resultadoSorteioNumeros');

  resultadoNumeros.style.display = 'none';
  resultadoBiscoito.style.display = 'none';
  resultadoNome.style.display = 'none';
}

function sorteioBiscoitoON()
{
  let conteudoNumeros = document.querySelector('.conteudoSorteioNumeros');
  let conteudoBiscoito = document.querySelector('.conteudoSorteioBiscoito');
  let conteudoNome = document.querySelector('.conteudoSorteioNomes');

  conteudoNumeros.style.display = 'none';
  conteudoBiscoito.style.display = 'block';
  conteudoNome.style.display = 'none';

  let resultadoBiscoito = document.querySelector('.resultadoSorteioBiscoito');
  let resultadoNome = document.querySelector('.resultadoSorteioNome');
  let resultadoNumeros = document.querySelector('.resultadoSorteioNumeros');

  resultadoNumeros.style.display = 'none';
  resultadoBiscoito.style.display = 'none';
  resultadoNome.style.display = 'none';
}