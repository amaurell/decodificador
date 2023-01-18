
      
      const encriptar   = document.querySelector('.botaoEncriptar');
      const copiar      = document.querySelector('.botaoCopiar');
      const decriptar   = document.querySelector('.botaoDecriptar');
      
      texto     = document.getElementById('texto').focus();

      //NAO PERMITE NÚMEROS, LETRAS MAIÚSCULAS E CARACTERES ESPECIAIS
      var input = document.querySelector('#texto');
      input.addEventListener('keypress', function (e) {
        
        if (!checkChar(e)) {
          e.preventDefault();
        };
        function checkChar(e) {
          var char = String.fromCharCode(e.keyCode);
                 
          var pattern = '[a-z\d ]';
          if (char.match(pattern)) {
            return true;
          };
        };
        });

      encriptar.addEventListener('click', RespondClick);
      
      function RespondClick() {
        var decript;
        var primeiroFiltro;
        var segundoFiltro;
        var terceiroFiltro;
        var quartoFiltro;
        var quintoFiltro;
        var temporaria;
        var tempFinal;
        var resultadoFinal;
        var textoModificado;
        var tm01;
        var conteudo = [];
        

                var texto = document.getElementById('texto').value;
            
                
                conteudo = texto.split('');
                console.log(conteudo);
                var contador = conteudo.length;

                // CRIPTOGRAFA O TEXTO DIGITADO
                      for (var i = 0; i < contador; i++) {
                          if (conteudo[i] == ' ') {
                              conteudo[i] = '@';
                          }

                          if (conteudo[i] == 'a') {
                            conteudo[i] = 'ai';
                          }            
                                      
                          if (conteudo[i] == 'e') {
                            conteudo[i] = 'enter';
                          }            
                          if (conteudo[i] == 'i') {
                            conteudo[i] = 'imes';
                          }           
                          if (conteudo[i] == 'o') {
                            conteudo[i] = 'ober';
                          }          
                          if (conteudo[i] == 'u') {
                            conteudo[i] = 'ufat';
                          }       
                      }
                      // IDENTIFICA ESPAÇO ENTRE AS PALAVRAS           
                      textoModificado = String(conteudo);
                      resultadoFinal = textoModificado.replace(/@/g, ' ');
                  
                      temporaria = conteudo.join('');
                
                      tm01 = temporaria.replace(/@/g, ' ');        

                      tempFinal = temporaria.replace(/@/g, ' ');
                      document.querySelector('.saidaTexto').value = tm01;            
                      
                      // CONVERTE A CRIPTOGRAFIA PARA TEXTO NORMAL
                      decriptar.addEventListener('click', decriptaTexto);
 
                      function decriptaTexto() {
                        primeiroFiltro  = tm01.replace(/ai/g, 'a');
                        segundoFiltro   = primeiroFiltro.replace(/enter/g, 'e');
                        terceiroFiltro  = segundoFiltro.replace(/imes/g, 'i');
                        quartoFiltro    = terceiroFiltro.replace(/ober/g, 'o');
                        quintoFiltro    = quartoFiltro.replace(/ufat/g, 'u');
                        document.querySelector('.saidaTexto').value = quintoFiltro;
                        console.log(quintoFiltro);
                      }

                      // COPIA TEXTO PARA A MEMÓRIA DO COMPUTADOR
                      copiar.addEventListener('click', copiarTexto);
                             
};
                      function copiarTexto() {
                        let textoCopiado = document.querySelector('.saidaTexto');
                        textoCopiado.select();
                        textoCopiado.setSelectionRange(0, 99999);
                        document.execCommand('copy');
                        alert('O texto copiado é: ' + textoCopiado.value);
                      }                      
  