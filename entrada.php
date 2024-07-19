<?php
// Iniciar la sesión
session_start();

// Verificar si la sesión está iniciada
if ( $_SESSION['inicio'] == 1) {
    // Redirigir a otra página después de verificar
    echo ("Hola");
} else {
    echo "No has iniciado sesión.";
    // Redirigir al usuario a la página de login si no está autenticado
    header("Location: login.html");
    exit;
}
?>
