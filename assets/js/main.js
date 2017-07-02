
var inputHasta = document.getElementById('fin');

function initMap(){
	 var geocoder = new google.maps.Geocoder();
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom:12,
		center: {lat: -33.4488897, lng: -70.6692655},
		mapTypeControl: false,
		zoomControl: true,
		streetViewControl: false,
	});

 

	function buscar(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(funcionExito, funcionError)
		}
	}

  google.maps.event.addDomListener(window, "resize", function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
    });
  
	var longitud, latitud;

	var funcionExito = function(posicion){
		latitud = posicion.coords.latitude;
		longitud = posicion.coords.longitude;

	var miUbicacion = new google.maps.Marker({
		position: {lat: latitud, lng: longitud},
		animation: google.maps.Animation.DROP, 
		map: map,
		draggable: true
	});

	map.setZoom(17);
	map.setCenter({lat: latitud, lng:longitud})
	}
	var funcionError = function(error){
		alert("Tenemos problemas para encontrar tu ubicacion")
	}
	
	

	var autocomplete = new google.maps.places.Autocomplete(inputHasta);

	var directionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer;


      function calcularRuta(directionsService, directionsDisplay) {
        directionsService.route({
          origin: document.getElementById('inicio').value,
          destination: document.getElementById('fin').value,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);

          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }

	 directionsDisplay.setMap(map);

	 var trazar = function(){
	 	calcularRuta(directionsService, directionsDisplay)
	 };
	 $(".found").click(trazar);
	 window.addEventListener("load", buscar);
}
