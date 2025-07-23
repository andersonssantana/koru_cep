async function buscarEnderecoPorCEP(cep) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.erro) {
      throw new Error('CEP não encontrado');
    }

    return {
      logradouro: data.logradouro,
      cidade: data.localidade,
      estado: data.uf
    };
  } catch (error) {
    console.error('Erro ao buscar CEP:', error);
    throw error;
  }
}

// Uso (permanece igual)
buscarEnderecoPorCEP('01001000')
  .then(endereco => console.log(endereco))
  .catch(erro => console.error(erro));
