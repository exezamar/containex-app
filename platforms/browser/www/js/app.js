latitud = -31.42008329999999;
longitud = -64.18877609999998;
xslidesto = 0;

$(document).ready(function() 
{
   var pageactive = getUrlParameter('page')
   var width_body = window.innerWidth;

   $('.link_white div').remove('page_active')
   $("#page_"+pageactive).append('<div class="page_active">  </div>')
    if (pageactive== 'contactos') {
        xtipo = getUrlParameter('ubic')
        ActiveOption(xtipo);
    }
    //slick(pageactive,width_body)
});

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

// MAPS

function initMap(latitud,longitud, ubicacion) {
  var myLatLng = {lat: latitud, lng: longitud};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 8
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: ubicacion
  });
}

$("ul.map").find('li').mouseover(function() {

    xidlis = $(this).attr('id')
      mostrarmapa(xidlis)
      $("ul.map").mouseenter(function(event) {
          mostrarmapa(xidlis)
      });
    $(this).css('background', 'url(img/icon_footer_map_hover.png) no-repeat top left');
})
$("ul.map").find('li').mouseout(function() {
  $(this).css('background', 'url(img/icon_footer_map.png) no-repeat top left');
});
$(".contain_map").mouseleave(function() { 
  ocultarmapa('hide')
});

$('.dont_map').mouseenter(function(event) {
  ocultarmapa('hide')
});


// LOGISTICA
$("#logis_ubicaciones").find('a').hover(function() {
    mostrarimagen($(this).attr('id'))
    $(this).css('background', 'url(img/icon_check_active.png) no-repeat top center');
}, function() {
    ocultarimagen()
    $(this).css('background', 'url(img/icon_check.png) no-repeat top center');
});




function mostrarmapa (ubicacion) {
    $('#container_map').animate({'opacity': 1}, 200)
    $(".body_map").css('z-index', 3);
    switch (ubicacion)
    {
        case 'buenos_aires' :
            latitud = -34.66363;
            longitud = -58.34256;
        break;
        case 'ciudad_de_cordoba' :
            latitud = -31.46467;
            longitud = -64.19314;
        break;
        case 'ciudad_de_mendoza' :
            latitud = -33.03910;
            longitud = -68.87986;
        break;
        case 'valparaiso_chile' :
            latitud = -33.05081;
            longitud = -71.40893;
        break;
        case 'asuncion_paraguay' :
            latitud = -25.23269;
            longitud = -57.56743;
        break;
    }
    initMap(latitud, longitud, ubicacion)
}

function ocultarmapa(ubicacion)
{
    $('#container_map').animate({'opacity': 0}, 200)
    $(".body_map").css('z-index', -2);
}

function mostrarimagen(id_name) 
{
   $('#logis_container').animate({'opacity': 1}, 200) 
   $(".body_logistica").css('z-index', 2);
   $("#logis_box").html('<img class="img-responsive" src="img/'+id_name+'.jpg">')
}

function ocultarimagen() 
{
  $('#logis_container').animate({'opacity': 0}, 200)
  $(".body_logistica").css('z-index', -1);
}

function ActiveOption(tipo)
{
    switch(tipo){
      case 'dry' :
        $("input#"+tipo).attr('checked', true);
      break; 
      case 'refeers' :
        $("input#"+tipo).attr('checked', true);
      break; 
      case 'habitables' :
        $("input#"+tipo).attr('checked', true);
      break; 
      case 'genset' :
        $("input#"+tipo).attr('checked', true);
      break; 
      case 'logistica' :
        $("input#"+tipo).attr('checked', true);
      break; 
      case 'contactos' :
        $("input#"+tipo).attr('checked', true);
      break; 
    }
}
