
$(document).ready(function(){

  var bottonePrecedente = $(".precedente");

  var bottoneSuccessivo = $(".successivo");

  var pallinoNav = $(".nav > i");

  bottonePrecedente.click(function(){

    cambiaImgPrecedente();

  });

  bottoneSuccessivo.click(function(){

    cambiaImgSuccessiva();

  });

  $(document).keydown(function(){
    var tasto = event.which;
    var tasto1 = event.keyCode;
    if (tasto == 37 || tasto1 == 37) {
      cambiaImgPrecedente();
    } else if (tasto == 39 || tasto1 == 37) {
      cambiaImgSuccessiva();
    }
  });

  pallinoNav.click(function(){

    pallinoNav.removeClass("visibile");

    $(this).addClass("visibile");

    var pallinoNavCorrente = $(this).index();

    console.log(pallinoNavCorrente);

    $("img.visibile").removeClass("visibile");

    $("img").eq(pallinoNavCorrente).addClass("visibile");

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
