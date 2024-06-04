// Récupération des paramètres de l'URL
const params = new URLSearchParams(window.location.search);
const hauteur = parseInt(params.get('hauteur')) || 100;
const largeur = parseInt(params.get('largeur')) || 200;

// Mise à jour des dimensions du rectangle
const rectanglePreview = document.getElementById('rectangle-preview');
rectanglePreview.style.width = `${largeur}px`;
rectanglePreview.style.height = `${hauteur}px`;

// Mise à jour des dimensions de l'etagere
const etagereContainer = document.getElementById('etagere-container');
etagereContainer.style.width = `${largeur}px`;
etagereContainer.style.height = `${hauteur}px`;

// Événement sur le changement de la valeur de la hauteur
const hauteurEtageInput = document.getElementById('hauteur-etage');
hauteurEtageInput.addEventListener('change', () => {
  ajouterEtagere(parseInt(hauteurEtageInput.value));
});

// Événement sur le clic du bouton "Ajouter étagère"
const addEtagereButton = document.getElementById('add-etagere');
addEtagereButton.addEventListener('click', () => {
  const nouvelleHauteur = parseInt(hauteurEtageInput.value);
  ajouterEtagere(nouvelleHauteur);
  hauteurEtageInput.value = ''; // Vider le champ de la hauteur après l'ajout
});

// Fonction pour ajouter une étagère
function ajouterEtagere(nouvelleHauteur) {
  const etagereContainer = document.getElementById('etagere-container');
  const etagere = document.createElement('div');
  etagere.style.width = `${largeur}px`;
  etagere.style.height = `${nouvelleHauteur}px`;
  etagere.style.backgroundColor = '#ccc';
  etagere.style.borderBottom = 'solid'
  etagereContainer.appendChild(etagere);

  // Optionnel : Gérer l'étagère active
  const activeEtagere = document.querySelector('.etagere.active');
  if (activeEtagere) {
    activeEtagere.classList.remove('active');
  }
  etagere.classList.add('active');
}
