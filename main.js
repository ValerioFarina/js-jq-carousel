$(document).ready(function() {

    // intercetto il click della freccia di destra
    $('#next .arrow').click(function() {
        // uso una variabile per ricordarmi qual è l'immagine corrente che viene mostrata
        var currentImg = $('img.visible');
        // cambio la classe dell'immagine corrente da "visible" a "hidden"
        currentImg.toggleClass('visible hidden');
        // controllo se dopo l'immagine corrente che viene mostrata c'è un'altra immagine
        if (hasNext(currentImg)) {
            // se c'è un'immagine dopo quella corrente,
            // cambio la classe dell'immagine successiva a quella corrente da "hidden" a "visible"
            currentImg.next().toggleClass('visible hidden');
        } else {
            // altrimenti, se l'immagine corrente è l'ultima,
            // cambio la classe della prima immagine da "hidden" a "visible"
            $('#images img:first-child').toggleClass('visible hidden');
        }

    });

// fine document.ready
});



// ********** LE MIE FUNZIONI **********

// questa funzione prende come parametro un elemento html selezionato facendo $(selector)
// se l'elemento ha un fratello immediatamente successivo, allora ritorna true
// altrimenti ritorna false
function hasNext(element) {
    if (element.next().length) {
        return true;
    } else {
        return false;
    }
}
