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
      // Per ogni oggetto 'picture' creo dinamicamente una colonna + card
      pictures.forEach(picture => {
        // Creo l’elemento div che conterrà la singola colonna
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-md-4'; 
        col.innerHTML = `
          <div class="card-wrapper">
            <img src="./img/pin.svg" class="pin" alt="puntina">
            <div class="card"; position: relative;">
              <img 
                src="${picture.url}" 
                class="photo" 
                alt="${picture.title || 'Foto'}"
              >
              <div class="caption">
                <p>${picture.title}</p>
                <time>${picture.date}</time>
              </div>
            </div>
          </div>
        `;
        // Inserisco la colonna appena creata dentro la row
        container.appendChild(col);
      });
    })
});
