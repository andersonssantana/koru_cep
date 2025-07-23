function buscarEnderecoPorCEP(cep) {
  
  return fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.erro) {
        throw new Error('CEP não encontrado');
      }
      
      return {
        logradouro: data.logradouro,
        cidade: data.localidade,
        estado: data.uf
      };
    })
    .catch(error => {
      console.error('Erro ao buscar CEP:', error);
      throw error;
    });
}

// Uso
buscarEnderecoPorCEP('01001000')
  .then(endereco => console.log(endereco))
  .catch(erro => console.error(erro));
