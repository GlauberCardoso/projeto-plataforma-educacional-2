

  AOS.init();

  const cep = document.querySelector(#cep);

  fetch(`https://viacep.com.br/ws/${cep}/json`)
  .then (response => response.json())
  .then (dados => {
    console.log(dados)

    document.querySelector("#endereco").value = dados.logradouro;
    document.querySelector("#cidade").value = dados.localidade;
    document.querySelector("#uf").value = dados.uf;

    
  });
  
