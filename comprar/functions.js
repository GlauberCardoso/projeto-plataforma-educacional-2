/*const cep = document.querySelector('#cep');

cep.addEventListener("blur", (e) => {
  let search = cep.value.replace("-", "");
  console.log(search);
 
  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
  .then(response => {
      response.json()
      .then(data => {
          console.log(data)
          showData(data)
      })
  })
  .catch(e => {
      console.log("ERRO: "+e)
  })
})

const showData = (result) => {
  for (const campo in result){
      if(document.querySelector("#endereco"+campo)){
          document.querySelector("#endereco"+campo).value = result[campo];
      }
  }
}*/

/*const options = {
   method: 'GET',
   mode: 'no-cors',
   cache: 'default'
}*/




/*function buscaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json`, options)
      .then (response => response.json())
      .then (dados => {
        console.log(dados)
  
        document.querySelector("#endereco").value = dados.logradouro;
        document.querySelector("#cidade").value = dados.localidade;
        document.querySelector("#uf").value = dados.uf;
  
        document.querySelector("#txtNumero").focus();
      });
  }

  buscaCep ();*/

  AOS.init();

function validaEmail (email){

   email = document.querySelector("#email").value;

    if(email.length < 3 || email.length > 18 ){
      document.querySelector("#invalid-feedback").innerHTML = "Seu email não é válido";
    }
}




  validaEmail();
  



