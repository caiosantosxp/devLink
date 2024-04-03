document.getElementById('buttonVersion').addEventListener('click', function () {
  var element = document.querySelector('html'); // Corrigindo a seleção do elemento HTML
  var htmlClass = element.className;

  if (htmlClass === 'light') {
    element.className = ''; // Removendo a classe 'light'
  } else {
    element.className = 'light'; // Adicionando a classe 'light'
  }
});
