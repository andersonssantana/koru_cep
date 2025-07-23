function buscarEnderecoPorCEP(cep) {
  
  return fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return {
        logradouro: data.logradouro,
        cidade: data.localidade,
        estado: data.uf
      };
    })
}

// Uso
buscarEnderecoPorCEP('01001000')
  .then(endereco => console.log(endereco));
