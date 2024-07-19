<?php
session_start();
$matricula = $_POST['nombre_php'];
if ($matricula) {

// Inicia la sesión para poder acceder a las variables de sesión


// Verifica si las variables de sesión están establecidas y no son nulas
if (isset($_SESSION['nombre']) && isset($_SESSION['marca']) && isset($_SESSION['precio'])) {
    $nombre = $_SESSION['nombre'];
    $marca = $_SESSION['marca'];
    $precio = $_SESSION['precio'];
    $Cliente = $_SESSION['Cliente'];

    $datos='[{"Cliente":"'.$Cliente.'", "nombre":"' .$nombre. '","marca":"'.$marca.'","precio":"'.$precio.'"}]';
    echo($datos);
} else {
    echo "No se encontraron variables de sesión establecidas.";
}
}else{
    echo("No es el correcto la matricula");
}
?>
