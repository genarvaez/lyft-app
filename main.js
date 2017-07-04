
var Resample = (function (canvas) {

	// (C) WebReflection Mit Style License

  function Resample(img, width, height, onresample) {

    var load = typeof img == "string",
    i = load || img;

    if (load) {
     i = new Image;
     // with propers callbacks
     i.onload = onload;
     i.onerror = onerror;
    }

    i._onresample = onresample;
    i._width = width;
    i._height = height;

    load ? (i.src = img) : onload.call(img);
   }

   function onerror() {
    throw ("not found: " + this.src);
   }

   function onload() {
    var
     img = this,
     width = img._width,
     height = img._height,
     onresample = img._onresample
    ;

    // Altered section - crop prior to resizing
    var imgRatio = img.width / img.height;
    var desiredRatio = width / height;
    var cropWidth, cropHeight;
    if (desiredRatio < imgRatio) {
      cropHeight = img.height;
      cropWidth = img.height * desiredRatio;
    } else {
      cropWidth = img.width;
      cropHeight = img.width / desiredRatio;
    }

    delete img._onresample;
    delete img._width;
    delete img._height;

    canvas.width = width;
    canvas.height = height;

    context.drawImage(
     // original image
     img,
     // starting x point
     0,
     // starting y point
     0,
     // crop width
     cropWidth,
     // crop height
     cropHeight,
     // destination x point
     0,
     // destination y point
     0,
     // destination width
     width,
     // destination height
     height
    );

    onresample(canvas.toDataURL("image/png"));
   }

	var context = canvas.getContext("2d"),
  round = Math.round;

  return Resample;

}(
 this.document.createElement("canvas"))
);

var newCropWidth = 270;
var newCropHeight = 360;

function loadImage(data) {
  document.querySelector('#imgDisplay').src = data;
}
function handleFileSelect(evt) {
  if (evt.target.files.length === 1) {
    var picFile = evt.target.files[0];

    if (picFile.type.match('image.*')) {
      var fileTracker = new FileReader;
      fileTracker.onload = function() {
        Resample(
         this.result,
         newCropWidth,
         newCropHeight,
         loadImage
       );
      }
      fileTracker.readAsDataURL(picFile);
      $("#uploadImage").hide();
    }
  }
}

document.querySelector('#uploadImage').addEventListener('change', handleFileSelect, false);

 /*Side bar*/
  $(".button-collapse").sideNav();
  $(".alert").hide();
/*INDEX SIGN UP*/ 
  var nombre = $(".input1-index3");
  var email = $(".input2-index3");
  var boton = $(".btn-index3");
  var enlace = $(".enlace");
  
  boton.click(function(){

    if(nombre.val() == "" || !(/[a-zA-Z]/).test(nombre.val())){
      $(".alert").show(400);
      enlace.preventDefault();
    }
    else if(!(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(email.val()))){
      $(".alert").show(400);
      enlace.preventDefault();
    }
    else if(!$(".filled-in").prop('checked')){
        $(".alert").show(400);
        enlace.preventDefault();
       }
    else{
      enlace.attr('href', 'index4.html');
      $(".alert").hide()
    }
  })


  /*INDEX SIGNUP TELEFONO*/

$('.submit').click(function(){

    var numero = 100 + Math.floor(Math.random() * 500);
    var codigolab = "LAB-" + numero;

    alert("Tu código de inscripción es: " + codigolab);

    var ingresacod = prompt("Ingresa tu código: ");

    if(codigolab == ingresacod){
        alert("Código correcto");
    }else{
        alert("Reingresa el código");
    };
});

