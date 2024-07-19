<?php
// Recuperamos los datos enviados desde el formulario

$correo = $_POST['correo_php'];

// Establecemos la conexión con la base de datos
$cn = new mysqli("localhost", "root", "12345678", "SUNNYSTEPS");

if ($cn->connect_errno == 0) { // Si la conexión es exitosa
    // Consultamos si el usuario existe con el nombre y el correo proporcionados
    $consulta = $cn->query("SELECT * FROM USUARIOS WHERE CORREO = '$correo'");

    if ($consulta) {
        if ($consulta->num_rows > 0) { // Si se encontró al usuario
            // Actualizamos la contraseña
            echo("actualizar");
            
        } else {
            echo "Usuario no encontrado. Verifica tus datos.";
        }
    } else {
        echo "Error en la consulta: " . $cn->error;
    }
} else {
    echo "Error en la conexión.";
}

$cn->close(); // Cerramos la conexión
?>
