addEvent(window,'load',cargar, false);//Aqui se llama a lla funcion cargar
		  function addEvent(ele,eve,fun,cap){
  		  if(window.attachEvent)
	  		  addAttachEvent('on'+eve,fun);
		  	else
          ele.addEventListener(eve,fun,cap);
        }

 var arreglo;
 
function cargar(){
    Swal.fire("!Bienvenido  a \n Sunny Steps!");
    arreglo = document.getElementsByTagName("input");
    addEvent(arreglo[1],'click',validar,false);
}

function validar(){
    if (arreglo[0].value != ""
    ) {
        conexionServidor(); 
    }else{
        Swal.fire({
            title: "Falta algun dato",
            confirmButtonText:"Confirmar"
        });
    }
}
function conexionServidor(){
    conexion = xmlhttprequest();
    conexion.onreadystatechange = esperaRespuesta;
      conexion.open("POST","recuperacion.php",true);   
    conexion.setRequestHeader("Content-type","application/x-www-form-urlencoded");  
    conexion.send("correo_php="+arreglo[0].value);
}
function esperaRespuesta() {
    if (conexion.readyState == 4) {
          const respuesta = conexion.responseText;    // Redirigir a otra página después de cerrar la alerta  
          if(respuesta == "actualizar"){
            Swal.fire({
                title: "Good job!",
                text: "Correo Valido",
                icon: "success"
              });
              setTimeout(function() {
                window.location.href = "contraseña.html";
            }, 1500);
          }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Correo Invalido o correo inesixtente!",
              });
          }
    }
}


function xmlhttprequest(){
    return new XMLHttpRequest();
}