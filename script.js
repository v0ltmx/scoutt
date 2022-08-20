function Clicar(){
    var texto = window.document.querySelector('input#txt');
    var resultado = window.document.querySelector('div#resultado');
    var conteudo = String(txt.value);
    resultado.innerHTML = `Você digitou: ${conteudo}`
}