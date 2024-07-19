let tenis = [
    {
        nombre: "Tenis Air Max",
        talla: 40,
        precio: 150,
        color: "Rojo",
        marca: "Nike"
    },
    {
        nombre: "Tenis Ultra Boost",
        talla: 42,
        precio: 180,
        color: "Negro",
        marca: "Adidas"
    },
    {
        nombre: "Tenis Gel Lyte",
        talla: 39,
        precio: 120,
        color: "Blanco",
        marca: "Asics"
    },
    {
        nombre: "Tenis ZX 500",
        talla: 41,
        precio: 130,
        color: "Azul",
        marca: "Adidas"
    },
    {
        nombre: "Tenis React",
        talla: 38,
        precio: 160,
        color: "Gris",
        marca: "Nike"
    },
    {
        nombre: "Tenis Classic",
        talla: 43,
        precio: 110,
        color: "Verde",
        marca: "Puma"
    },
    {
        nombre: "Tenis Court Vision",
        talla: 37,
        precio: 90,
        color: "Negro",
        marca: "Nike"
    },
    {
        nombre: "Tenis Speedcross",
        talla: 44,
        precio: 140,
        color: "Amarillo",
        marca: "Salomon"
    },
    {
        nombre: "Tenis Fresh Foam",
        talla: 40,
        precio: 135,
        color: "Azul",
        marca: "New Balance"
    }
];

function addEvent(ele, eve, fun, cap) {
    if (window.attachEvent)
        ele.attachEvent('on' + eve, fun);
    else
        ele.addEventListener(eve, fun, cap);
}

function cargar() {
    let arreglo = document.getElementsByTagName("input");

    for (let i = 0; i < arreglo.length; i++) {
        addEvent(arreglo[i], 'click', function() {
            mostrarConfirmacion(i);
        }, false);
    }
}

function mostrarConfirmacion(index) {
    let tenisInfo = tenis[index];

    Swal.fire({
        title: "¿Estás seguro?",
        html: `
            <p>Seguro que quieres comprar:</p>
            <p><strong>${tenisInfo.nombre}</strong></p>
            <p>Marca: ${tenisInfo.marca}</p>
            <p>Costo: $${tenisInfo.precio}</p>
        `,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, quiero Comprarlos"
    }).then((result) => {
        if (result.isConfirmed) {
            // Llamar a la función para enviar datos al servidor
            conexionServidor(index);
            window.location.href = "compras.html";
        }
    });
}

function conexionServidor(index) {
    let conexion = xmlhttprequest();
    conexion.onreadystatechange = function() {
        if (conexion.readyState == 4) {
            esperaRespuesta(conexion);
        }
    };
    conexion.open("POST", "productos.php", true);
    conexion.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    let tenisInfo = tenis[index];
    let data = `nombre_php=${tenisInfo.nombre}&marca_php=${tenisInfo.marca}&precio_php=${tenisInfo.precio}`;
    conexion.send(data);
}

function esperaRespuesta(conexion) {
    if (conexion.readyState == 4) {
        const respuesta = conexion.responseText;
        console.log(respuesta); // Aquí puedes manejar la respuesta del servidor
    }
}

function xmlhttprequest() {
    return new XMLHttpRequest();
}

// Llama a la función cargar cuando la ventana se cargue
window.onload = cargar;
