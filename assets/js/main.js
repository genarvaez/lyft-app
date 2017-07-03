
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