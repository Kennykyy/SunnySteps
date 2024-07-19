<?php
// Recuperamos los datos enviados desde el formulario de login
$Cliente = $_POST['nombre_php'];
$correo = $_POST['correo_php'];
$contrasena = $_POST['contraseña_php'];

// Establecemos la conexión con la base de datos
$cn = new mysqli("localhost", "root", "12345678", "SUNNYSTEPS");

if ($cn->connect_errno == 0) { // Si la conexión es exitosa
    // Consultamos si el usuario existe con el correo y la contraseña proporcionados
    $consulta = $cn->query("SELECT * FROM USUARIOS WHERE NOMBRE = '$Cliente' AND CORREO = '$correo' AND CONTRASEÑA = '$contrasena'");

    if ($consulta) {
        if ($consulta->num_rows > 0) { // Si se encontró al usuario
            // Iniciar sesión
            session_start();
            $_SESSION['Cliente'] = $Cliente;
            // Redirigir a la página principal
            echo ("entrar");
            exit;
        } else {
            echo "Credenciales incorrectas. Intenta de nuevo.";
        }
    } else {
        echo "Error en la consulta: " . $cn->error;
    }
} else {
    echo "Error en la conexión.";
}

$cn->close(); // Cerramos la conexión
?>
