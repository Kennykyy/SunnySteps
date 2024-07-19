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
    addEvent(arreglo[3],'click',validar,false);
}

function validar(){
    if (arreglo[0].value != "" && 
        arreglo[1].value != "" &&
        arreglo[2].value != "" 
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
      conexion.open("POST","inicio.php",true);   
    conexion.setRequestHeader("Content-type","application/x-www-form-urlencoded");  
    conexion.send("nombre_php="+arreglo[0].value+
        "&correo_php="+arreglo[1].value+
        "&contraseña_php="+arreglo[2].value
    );
}
function esperaRespuesta() {
    if (conexion.readyState == 4) {
          const respuesta = conexion.responseText;    // Redirigir a otra página después de cerrar la alerta  
          if(respuesta == "entrar"){
            Swal.fire({
                title: "Good job!",
                text: "Bienvenido.",
                icon: "success"
              });
              setTimeout(function() {
                window.location.href = "inicio.html";
            }, 1500);
          }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Datos Incorrectos \n buelve a intentarlo!",
              });
          }
    }
}


function xmlhttprequest(){
    return new XMLHttpRequest();
}