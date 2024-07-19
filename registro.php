<?php
// Recuperamos los datos enviados desde el objeto AJAX
$nombre = $_POST['nombre_php'];
$apellido1 = $_POST['apellido1_php'];
$apellido2 = $_POST['apellido2_php'];
$edad = $_POST['edad_php'];
$correo = $_POST['correo_php'];
$contrasena = $_POST['contraseña_php'];
$numero = $_POST['numero_php'];
$genero = $_POST['genero_php'];

// Establecemos la conexión con la base de datos (ajusta los parámetros según tu configuración)
$cn = new mysqli("localhost", "root", "12345678", "SUNNYSTEPS");

if ($cn->connect_errno == 0) { // Si la conexión es exitosa (devuelve 0)

    // Realizamos la inserción de datos en la tabla DATOS
    $insertar = $cn->query("INSERT INTO USUARIOS VALUES(NULL, '$nombre', '$apellido1', '$apellido2', '$edad', '$contrasena', '$numero', '$genero', '$correo')");

    if ($insertar == 1) { // Si la inserción fue exitosa
        echo "El registro se guardó correctamente.";
    } else {
        echo "No se pudo guardar el registro.";
    }
} else {
    echo "Error en la conexión.";
}


$cn->close(); // Cerramos la conexión

?>
