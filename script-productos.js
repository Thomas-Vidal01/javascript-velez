let productos = [
    {
        id: 1,
        nombreProducto: "Camiseta Titular",
        descripcion: "Camiseta Titular 2023",
        precio: 25000 ,
        imagen: "../img/camiseta-blanca-2023.jpg"
    },
    {
        id: 2,
        nombreProducto: "Camiseta Suplente",
        descripcion: "Camiseta Suplente 2023",
        precio: 25000 ,
        imagen: "../img/camiseta-azul-2023.jpg"
    },
    {
        id: 3,
        nombreProducto: "Camiseta Alternativa",
        descripcion: "Camiseta Alternativa 2023",
        precio: 25000 ,
        imagen: "../img/camiseta-negra-2023.jpg"
    },
    {
        id: 4,
        nombreProducto: "Camiseta Arquero Titular",
        descripcion: "Camiseta Arquero Titular 2023",
        precio: 25000 ,
        imagen: "../img/camiseta-arquero-negra.jpg"
    },
    {
        id: 5,
        nombreProducto: "Camiseta Arquero Suplente",
        descripcion: "Camiseta Arquero Suplente 2023",
        precio: 25000 ,
        imagen: "../img/camiseta-arquero-gris.jpg"
    },
    {
        id: 6,
        nombreProducto: "Camiseta Arquero Alternativa",
        descripcion: "Camiseta Arquero Alternativa 2023",
        precio: 25000 ,
        imagen: "../img/camiseta-arquero-rosa.jpg"
    },
    {
        id: 7,
        nombreProducto: "Pantalon Titular",
        descripcion: "Pantalon Titular 2023",
        precio: 12000 ,
        imagen: "../img/pantalon-azul.jpg"
    },
    {
        id: 8,
        nombreProducto: "Pantalon Suplente",
        descripcion: "Pantalon Suplente 2023",
        precio: 12000 ,
        imagen: "../img/pantalon-blanco.jpg"
    },
    {
        id: 9,
        nombreProducto: "Pantalon Alternativo",
        descripcion: "Pantalon Alternativo 2023",
        precio: 12000 ,
        imagen: "../img/pantalon-negro.jpg"
    },
    {
        id: 10,
        nombreProducto: "Campera polar Azul",
        descripcion: "Campera polar Azul VS",
        precio: 45000 ,
        imagen: "../img/campera-azul.jpg"
    },
    {
        id: 11,
        nombreProducto: "Campera Azul",
        descripcion: "Campera Azul VS",
        precio: 35000 ,
        imagen: "../img/campera-azul-comun.jpg"
    },
    {
        id: 12,
        nombreProducto: "Campera Negra",
        descripcion: "Campera Negra VS",
        precio: 35000 ,
        imagen: "../img/campera-negra.jpg"
    }
]

let productCards = document.getElementById("product-cards");

for (var i = 0; i < productos.length; i++) {
    var producto = productos[i];

    var cardHTML = `
    <div class="col-md-4 mb-4">
        <div class="card">
        <img src="${producto.imagen}" class="card-img-top" alt="Imagen del producto">
        <div class="card-body">
            <h5 class="card-title">${producto.descripcion}</h5>
            <p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
            <input type="number" class="form-control mb-2" placeholder="Cantidad" value="${producto.cantidad}">
            <button class="btn btn-primary">Agregar al carrito</button>
        </div>
        </div>
    </div>
    `;

    productCards.innerHTML += cardHTML;
}

let carrito = [];

function buscarProducto() {
let seleccion = prompt("Ingrese el nombre del producto que desea seleccionar: (Camisetas o Pantalones titular, suplente o alternativos, o Camperas azul o negra VS)");

producto = productos.find((p) => p.nombreProducto.toLowerCase() === seleccion.toLowerCase());
}

function agregarCarrito() {
if (producto) {
    let cantidad = parseInt(prompt("Ingrese la cantidad que desea seleccionar:"));
    carrito.push({
    producto: producto.nombreProducto,
    cantidad: cantidad,
        subtotal: producto.precio * cantidad
    });
} else {
    alert("El producto seleccionado no existe. Por favor, vuelva a intentarlo.");
}
}

function confirmarCarrito() {
while (true) {
    buscarProducto();
    agregarCarrito();

    if (!confirm("¿Desea agregar otro producto al carrito?")) {
    break;
    }
}
}

function calcularTotal() {
console.log("Carrito de compras:");
carrito.forEach((item) => {
    console.log(`- ${item.cantidad} ${item.producto}: ${item.subtotal}`);
});

let total = carrito.reduce((sum, item) => sum + item.subtotal, 0);
console.log(`Total a pagar: ${total}`);
}

function vaciarCarrito() {
carrito = [];
console.log("El carrito ha sido vaciado.");
}

confirmarCarrito();

if (carrito.length > 0) {
if (confirm("¿Desea vaciar el carrito?")) {
    vaciarCarrito();
}
}

calcularTotal();

