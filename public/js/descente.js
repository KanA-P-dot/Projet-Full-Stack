document.addEventListener('DOMContentLoaded', () => {
    const hauteurInput = document.getElementById('hauteur');
    const largeurInput = document.getElementById('largeur');
    const rectanglePreview = document.getElementById('rectangle-preview');
    const previewButton = document.getElementById('preview-button');

    previewButton.addEventListener('click', () => {
        const hauteur = hauteurInput.value;
        const largeur = largeurInput.value;

        if (hauteur && largeur) {
            rectanglePreview.style.height = `${hauteur}px`;
            rectanglePreview.style.width = `${largeur}px`;
        } else {
            alert('Veuillez entrer des valeurs pour la hauteur et la largeur.');
        }
    });
});
