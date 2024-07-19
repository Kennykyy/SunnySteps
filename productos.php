<?php
// Establecemos la conexión con la base de datos
$cn = new mysqli("localhost", "root", "12345678", "SUNNYSTEPS");

// Verificamos la conexión
if ($cn->connect_errno) {
    echo "Falló la conexión a la base de datos: " . $cn->connect_error;
    exit();
}
// Verificamos si es una solicitud POST y procesamos los datos recibido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre_php'] ?? null;
    $marca = $_POST['marca_php'] ?? null;
    $precio = $_POST['precio_php'] ?? null;

    // Verificamos que todas las variables necesarias estén presentes
    if ($nombre && $marca && $precio) {
        // Consultamos si el registro existe en la tabla USUARIOS
        $consulta = $cn->prepare("SELECT * FROM productos WHERE NOMBRE = ? AND MARCA = ? AND PRECIO = ?");
        $consulta->bind_param("sss", $nombre, $marca, $precio);
        $consulta->execute();
        $resultado = $consulta->get_result();

        if ($resultado->num_rows > 0) {
            // Si el registro existe, iniciar sesión y pasar los datos a otro archivo
            session_start();
            $_SESSION['nombre'] = $nombre;
            $_SESSION['marca'] = $marca;
            $_SESSION['precio'] = $precio;

            // Redirigir a otro archivo (puedes cambiar "otro_archivo.php" por el nombre del archivo destino)
            header("Location:compra.php");
            exit();
        } else {
            echo "El registro no existe en la base de datos.";
        }
    } else {
        echo "Faltan una o más variables.";
    }
}
?>

