  function expandirConteudo(button) {
    var content = button.nextElementSibling;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  }