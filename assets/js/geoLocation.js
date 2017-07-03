
 /*Side bar*/

 $(".button-collapse").sideNav();

//Funcion de geolocalizacion y trazado de ruta
function initMap(){
  var mapa = document.getElementById("map");
  navigator.geolocation.getCurrentPosition(fun_ok, fun_error);
  function fun_error (){
    alert("No pudimos ubicarte")
  }

  function fun_ok(respuesta){
    var lat = respuesta.coords.latitude;
    var lng = respuesta.coords.longitude;
    var gLatLng = new google.maps.LatLng(lat, lng);
      var objConfig = {
      zoom: 17,
      center: gLatLng
    }
  
    var gMapa = new google.maps.Map(mapa, objConfig);

    var icon = {
    url: "assets/image/icono.png",
    scaledSize: new google.maps.Size(50, 50),
    };


    var marcador = {
      position: gLatLng,
      animation: google.maps.Animation.DROP, 
      map: gMapa,
      title: "You are here",
      draggable: true, 
      icon: icon
    }
    var gMarker = new google.maps.Marker(marcador);
    var iDestino = document.getElementById("destino");
    var autocomplete = new google.maps.places.Autocomplete(iDestino)
    var geocoder = new google.maps.Geocoder();

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;


      function calcularRuta(directionsService, directionsDisplay) {
        directionsService.route({
          origin: gLatLng,
          destination: document.getElementById('destino').value,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);

          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }

   directionsDisplay.setMap(gMapa);

   var trazar = function(){
    calcularRuta(directionsService, directionsDisplay)
   };
   document.getElementById("found").addEventListener("click",trazar)
  }

}