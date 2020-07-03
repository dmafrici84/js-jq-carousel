
$(document).ready(function(){

  var bottonePrecedente = $(".precedente");

  var bottoneSuccessivo = $(".successivo");

  bottonePrecedente.click(function(){

    cambiaImgPrecedente();

  });

  bottoneSuccessivo.click(function(){

    cambiaImgSuccessiva();

  });

  $(document).keydown(function(){
    var tasto = event.which;
    if (tasto == 37) {
      cambiaImgPrecedente();
    } else if (tasto == 39) {
      cambiaImgSuccessiva();
    }
  });


});

function cambiaImgPrecedente(){

  var imgVisibile = $(".carousel .immagini img.visibile");
  imgVisibile.removeClass("visibile");

  var pallinoNavVisibile = $(".nav > i.visibile");
  pallinoNavVisibile.removeClass("visibile");

  if (imgVisibile.hasClass("prima") == true) {

    $(".carousel .immagini img.ultima").addClass("visibile");
    $(".carousel .nav > i.ultima").addClass("visibile");

  } else {

    imgVisibile.prev().addClass("visibile");
    pallinoNavVisibile.prev().addClass("visibile");

  }

}

function cambiaImgSuccessiva(){

  var imgVisibile = $(".carousel .immagini img.visibile");
  imgVisibile.removeClass("visibile");

  var pallinoNavVisibile = $(".nav > i.visibile");
  pallinoNavVisibile.removeClass("visibile");

  if (imgVisibile.hasClass("ultima") == true) {

    $(".carousel .immagini img.prima").addClass("visibile");
    $(".carousel .nav > i.prima").addClass("visibile");

  } else {

    imgVisibile.next().addClass("visibile");
    pallinoNavVisibile.next().addClass("visibile");

  }

}
