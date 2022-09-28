
//Plugin de JS

  AOS.init();



 
  //API para consultar endereço a partir do CEP
 
  let input = document.querySelector("#cep");

  input.addEventListener('keyup', (event) => {

      let cep = document.querySelector("#cep");
      let search = cep.value;
        //console.log(search);

      fetch(`https://viacep.com.br/ws/${search}/json`)
    .then (response => response.json())
    .then (dados => {
      //console.log(dados)

      document.querySelector("#endereco").value = dados.logradouro;
      document.querySelector("#bairro").value = dados.bairro;
      document.querySelector("#cidade").value = dados.localidade;
      document.querySelector("#uf").value = dados.uf;


    });
    });


     