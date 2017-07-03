
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
