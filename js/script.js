// Attendo che il DOM sia completamente caricato 
document.addEventListener('DOMContentLoaded', () => {
  // Seleziono il contenitore delle colonne (la row di Bootstrap)
  const container = document.getElementById('photo-row');

  // Effettuo una richiesta GET all’API per ottenere le foto
  axios.get('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => {
      // Estraggo l’array di oggetti foto dalla risposta
      const pictures = response.data;

      // Ripulisco il contenitore da eventuali elementi statitici
      container.innerHTML = '';
});
});
