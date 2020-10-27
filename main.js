$(document).ready(function() {

    // intercetto il click della freccia di destra
    $('#next .arrow').click(function() {
        // uso una variabile per ricordarmi qual è l'immagine corrente che viene mostrata
        var currentImg = $('img.visible');
        // cambio la classe dell'immagine corrente da "visible" a "hidden"
        currentImg.toggleClass('visible hidden');
        // cambio la classe dell'immagine successiva a quella corrente da "hidden" a "visible"
        currentImg.next().toggleClass('visible hidden');
    });

// fine document.ready
});
