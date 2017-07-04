$(document).ready(function() {
  $("#uploadImage").hide();
  $("#btnEdit").click(function() {
    $("#uploadImage").show();
  });
  
  $(".button-collapse").sideNav();

});
$('select').material_select();

/*DATA DE USUARIOS

function Perfil (user, email, foto) 
{
  this.userId = user;
  this.email = email;
  this.foto = foto;
}
var usuarios = [];
function crearUsuario (){
  var nombre = $(".input1-index3").val();
  var email = $(".input2-index3").val();
  usuarios.push(new Perfil(nombre, email, "assets/image/user.jpg"));
  console.log(usuarios)
  return usuarios

}*/

/***************************************SIGN UP TELÉFONO********************************************/
var siguiente = $(".siguiente");
;

$(".select").change(function(){
  var select = $(".select option:selected").val()
  if(select == "1"){
    $(".pais").html("+56");
  }
  else if(select == "2"){
    $(".pais").html("+52");
  }
   else if(select == "3"){
    $(".pais").html("+51");
  }
})


    siguiente.attr('disabled','disabled');
    $('#input-numero').change(function(){
        if($(this).val != ''|| !(/^\d{9}$/.test(numero.val()))){
            siguiente.addClass("pink");
            siguiente.removeAttr('disabled');
            var numero = 100 + Math.floor(Math.random() * 500);
            var codigolab = "LAB-" + numero;
            alert("Tu código de inscripción es: " + codigolab);
            var ingresacod = prompt("Ingresa tu código: ");
            while(codigolab!=ingresacod){
              var ingresacod = prompt("Ingresa tu código: "); 
            }
        }
        else{
            siguiente.click(function(event){
              event.preventDefault();
            })
        }
    });
/********************************************SIGN UP SECTION****************************************/
  var boton = $(".btn-index3");
  var sign = $(".sign");
  var enlace = $(".enlace").hide();
  $(".alert").hide();

  if($(".filled-in").change(function(){
      if ($(this).prop("checked")){
        boton.addClass("pink");
      }
      else{
        boton.removeClass("pink");
      } 
  }))

  boton.click(function(event){
    var nombre = $(".input1-index3");
    var email = $(".input2-index3");
    if(nombre.val() == "" || !(/[a-zA-Z]/).test(nombre.val())){
      $(".alert").show(400);
      event.preventDefault();      
    }
    else if(!(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(email.val()))){
      $(".alert").show(400);
      event.preventDefault();     
    }
    else if(!$(".filled-in").prop('checked')){
        $(".alert").show(400);
        event.preventDefault();
        $(".input1-index3").val("");
        $(".input2-index3").val("");   
    }
    else{      
      $(".alert").hide();
      crearUsuario();
    }
  })
  
/******************************************SECCION PROFILE*******************************************/
var date = new Date();

$(".fecha-user").html("JOINED " + date.getDate() + '/' + (date.getMonth() +1) + '/' + date.getFullYear());
$(".changes").hide();
$(".edit-user").hide();

$(".info").click(function(){
  $(".edit-user").show();
  $(".info-user").hide();
  $(".changes").show();
})

$(".changes").click(function(){
    var city = $(".city").val();
    var music= $(".music").val();
    var places= $(".places").val();
    $(".city-user").html(city);
    $(".music-user").html(music);
    $(".places-user").html(places);
    $(".edit-user").hide();
    $(".info-user").show()
    $(this).hide();
})

/*cambio de foto*/
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
    }
  }
}

$('#uploadImage').on('change', handleFileSelect);
 
