$(document).ready(function() {

    // intercetto il click della freccia di destra
    $('#next .arrow').click(function() {
        // uso una variabile per ricordarmi qual è l'immagine corrente che viene mostrata
        var currentImg = $('img.visible');
        // uso una variabile per ricordarmi qual è il current bullet
        var currentBullet = $('.bullet.current');
        // cambio la classe dell'immagine corrente da "visible" a "hidden"
        currentImg.toggleClass('visible hidden');
        // tolgo al current bullet la classe "current"
        currentBullet.removeClass('current');
        // controllo se dopo l'immagine corrente che viene mostrata c'è un'altra immagine
        if (hasNext(currentImg)) {
            // se c'è un'immagine dopo quella corrente,
            // cambio la classe dell'immagine successiva a quella corrente da "hidden" a "visible"
            currentImg.next().toggleClass('visible hidden');
            // inoltre, aggiungo al bullet che viene dopo quello corrente la classe "current"
            currentBullet.next().addClass('current');
        } else {
            // altrimenti, se l'immagine corrente è l'ultima,
            // cambio la classe della prima immagine da "hidden" a "visible"
            $('#images img:first-child').toggleClass('visible hidden');
            // inoltre, aggiungo al primo bullet la classe "current"
            $('.bullet:first-child').addClass('current');
        }
    });

    // intercetto il click della freccia di sinistra
    $('#prev .arrow').click(function() {
        // uso una variabile per ricordarmi qual è l'immagine corrente che viene mostrata
        var currentImg = $('img.visible');
        // uso una variabile per ricordarmi qual è il current bullet
        var currentBullet = $('.bullet.current');
        // cambio la classe dell'immagine corrente da "visible" a "hidden"
        currentImg.toggleClass('visible hidden');
        // tolgo al current bullet la classe "current"
        currentBullet.removeClass('current');
        // controllo se prima dell'immagine corrente che viene mostrata c'è un'altra immagine
        if (hasPrev(currentImg)) {
            // se c'è un'immagine prima di quella corrente,
            // cambio la classe dell'immagine precedente a quella corrente da "hidden" a "visible"
            currentImg.prev().toggleClass('visible hidden');
            // inoltre, aggiungo al bullet che viene prima di quello corrente la classe "current"
            currentBullet.prev().addClass('current');
        } else {
            // altrimenti, se l'immagine corrente è la prima,
            // cambio la classe dell'ultima immagine da "hidden" a "visible"
            $('#images img:last-child').toggleClass('visible hidden');
            // inoltre, aggiungo all'ultimo bullet la classe "current"
            $('.bullet:last-child').addClass('current');
        }
    });

    // intercetto il click dei bullets
    $('.bullet').click(function() {
        // tolgo al current bullet la classe "current"
        $('.bullet.current').removeClass('current');
        // aggiungo al bullet che viene cliccato la classe "current"
        $(this).addClass('current');
        // salvo in una variabile la posizione che il bullet che ho cliccato occupa
        // all'interno della collezione dei bullet (cioè, all'interno della collezione degli elementi html aventi la classe "bullet")
        var thisPosition = $('.bullet').index($(this));
        // cambio la classe dell'immagine corrente da "visible" a "hidden"
        $('img.visible').toggleClass('visible hidden');
        // cambio da "hidden" a "visible" la classe dell'immagine che occupa (all'interno della collezione delle immagini) una posizione pari a thisPosition
        // in questo modo, cliccando l'n-esimo bullet compare l'n-esima immagine
        $('#images img').eq(thisPosition).toggleClass('visible hidden');
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

// questa funzione prende come parametro un elemento html selezionato facendo $(selector)
// se l'elemento ha un fratello immediatamente precedente, allora ritorna true
// altrimenti ritorna false
function hasPrev(element) {
    if (element.prev().length) {
        return true;
    } else {
        return false;
    }
}
