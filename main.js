$(document).ready(function() {
    // intercetto il click delle frecce
    $('.arrow').click(function() {
        // uso una variabile per ricordarmi qual è l'immagine corrente che viene mostrata
        var currentImg = $('img.visible');
        console.log(currentImg);
    });

// fine document.ready
});
