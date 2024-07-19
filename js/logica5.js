addEvent(window,'load',cargar, false);//Aqui se llama a lla funcion cargar
		  function addEvent(ele,eve,fun,cap){
  		  if(window.attachEvent)
	  		  addAttachEvent('on'+eve,fun);
		  	else
          ele.addEventListener(eve,fun,cap);
        }
var suma;
var iva;
 var arreglo;
function cargar(){    
    arreglo = document.getElementsByTagName("input");

    addEvent(arreglo[0],'keypress',filtraLetras,false);
    addEvent(arreglo[4],'keypress',Numeros,false);
    addEvent(arreglo[5],'click',validar,false);
    addEvent(arreglo[10],'click',compra,false);
    for(i=1;i<=3;i++){
        addEvent(arreglo[i],'keypress',bloquea,false);
    }
    for(i=6;i<=9;i++){
        addEvent(arreglo[i],'keypress',bloquea,false);
    }
}

function bloquea(){
    event.returnValue=false;
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
function Numeros(event){
    if(event.keyCode >=48 && event.keyCode <=57){
event.returnValue=true;
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Solo se pueden agregar Numeros!",
            
          });
        event.returnValue=false;
    }
}


function validar(){
    if (arreglo[0].value != "") {
        conexionServidor(); 
    }else{
        Swal.fire({
            
            title: "Falta algun dato",
            confirmButtonText:"Confirmar"
        });
    }
}
function compra(event) {
    if (arreglo[3].value != 0) {
        Swal.fire({
            title: "Good job!",
            text: "Actualizando compra",
            icon: "success"
          });
    var cantidad = parseFloat(arreglo[4].value); 
    var precioUnitario = parseFloat(arreglo[3].value)
     suma = cantidad * precioUnitario;
    iva = suma * 0.10;
    var total = suma + iva;
    var texto = "Total : ";
    var texto1 = " $";

    arreglo[9].value = texto+total.toFixed(2)+texto1;
    
    }else{
        Swal.fire({
            
            title: "Falta ingresar una cantidad",
            confirmButtonText:"Confirmar"
        });
    }
}
function conexionServidor(){
    conexion = xmlhttprequest();
    conexion.onreadystatechange = esperaRespuesta;
      conexion.open("POST","compra.php",true);   
    conexion.setRequestHeader("Content-type","application/x-www-form-urlencoded");  
    conexion.send("nombre_php="+arreglo[0].value);
}
function esperaRespuesta(){
    if (conexion.readyState == 4) {
        var dato = eval(conexion.responseText);
        
        for (const clave in dato) {
            
            arreglo[1].value = dato[clave].nombre;
            arreglo[2].value = dato[clave].marca;
            arreglo[3].value = dato[clave].precio;
            Swal.fire({
                title: "Good job!",
                text: "Actualizado.",
                icon: "success"
              });
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
