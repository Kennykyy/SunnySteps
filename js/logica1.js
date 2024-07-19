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

    addEvent(arreglo[0],'keypress',filtraLetras,false);
    addEvent(arreglo[1],'keypress',filtraLetras,false);
    addEvent(arreglo[2],'keypress',filtraLetras,false);
    addEvent(arreglo[3],'keypress',filtraEdad,false);
    addEvent(arreglo[6],'keypress',filtraNumeros,false);
    addEvent(arreglo[8],'click',validar1,false);
    addEvent(arreglo[9],'click',validar,false);
}
function filtraLetras(event){
    if(event.keyCode >=65 && event.keyCode <=90){
event.returnValue=true;
    }else if(event.keyCode >=97 && event.keyCode <=122){
        event.returnValue=true;
    }else if(event.keyCode ==32){
        event.returnValue=true;
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Solo se pueden agregar letras!",
            
          });
        event.returnValue=false;
    }
}

function filtraEdad(){
    if(event.keyCode>= 48 && event.keyCode<= 57){
        if (arreglo[3].value.length<2) {
            event.returnValue=true;
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Solo se pueden agargar 2 numeros!",
                
              });
            event.returnValue=false;
        }
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Solo se puede agregar numeros!",
            
          });
        event.returnValue=false;
    }
}

function filtraNumeros(){
    if(event.keyCode>= 48 && event.keyCode<= 57){
        if (arreglo[6].value.length<10) {
            event.returnValue=true;
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Deven de der 10 numeros",
                
              });
            event.returnValue=false;
        }
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Solo se pueden agregar numeros!",
            
          });
        event.returnValue=false;
    }
}
function validar1() {
    Swal.fire({
        title: "Usted acepto los \n Terminos y Condiciones",
        confirmButtonText:"Confirmar"
    });
}
function validar(){
    if (arreglo[0].value != "" && 
        arreglo[1].value != "" &&
        arreglo[2].value != "" &&
        arreglo[3].value != "" &&
        arreglo[4].value != "" &&
        arreglo[5].value != "" &&
        arreglo[6].value != "" &&
        arreglo[7].value != "" &&
        arreglo[8].checked
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
      conexion.open("POST","registro.php",true);   
    conexion.setRequestHeader("Content-type","application/x-www-form-urlencoded");  
    conexion.send("nombre_php="+arreglo[0].value+
        "&apellido1_php="+arreglo[1].value+
        "&apellido2_php="+arreglo[2].value+
             "&edad_php="+arreglo[3].value+
           "&correo_php="+arreglo[4].value+
       "&contraseña_php="+arreglo[5].value+
           "&numero_php="+arreglo[6].value+
        "   &genero_php="+arreglo[7].value
    );
}
function esperaRespuesta(){
    if (conexion.readyState == 4) {
        const respuesta = conexion.responseText;    // Redirigir a otra página después de cerrar la alerta  
        if(respuesta == "El registro se guardó correctamente."){
            Swal.fire({
                title: "Good job!",
                text: "El registro se guardó correctamente.",
                icon: "success"
              });
              setTimeout(function() {
                window.location.href = "inicio.html";
            }, 1500);
        }else{
          alert("NO se que fallo XD");
        }
  }
    
}  

function xmlhttprequest(){
    return new XMLHttpRequest();
}
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona ambos formularios
    const formulario1 = document.querySelector(".formulario1");
    const formulario2 = document.querySelector(".formulario2");

    // Añade una clase para la animación después de un pequeño retraso
    setTimeout(() => {
        formulario1.style.opacity = "1";
        formulario1.style.transform = "translateY(0)";
        formulario2.style.opacity = "1";
        formulario2.style.transform = "translateY(0)";
    }, 500); // 0.5 segundos de retraso
});
