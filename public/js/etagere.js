 // Récupération des paramètres de l'URL
 const params = new URLSearchParams(window.location.search);
 const hauteur = params.get('hauteur');
 const largeur = params.get('largeur');

 // Mise à jour des dimensions du rectangle
 const rectanglePreview = document.getElementById('rectangle-preview');
 rectanglePreview.style.height = hauteur ? `${hauteur}px` : '100px';
 rectanglePreview.style.width = largeur ? `${largeur}px` : '200px';