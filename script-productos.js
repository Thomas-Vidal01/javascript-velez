let shopContent = document.getElementById("shopContent");
let verCarrito = document.getElementById("verCarrito");
let modalContainer = document.getElementById("modal-container");

let productos = [
    {
        id: 1,
        nombreProducto: "Camiseta Titular",
        descripcion: "Camiseta Titular Blanca 2023",
        precio: 25000 ,
        imagen: "../img/camiseta-blanca-2023.jpg"
    },
    {
        id: 2,
        nombreProducto: "Camiseta Suplente",
        descripcion: "Camiseta Suplente Azul 2023",
        precio: 25000 ,
        imagen: "../img/camiseta-azul-2023.jpg"
    },
    {
        id: 3,
        nombreProducto: "Camiseta Alternativa",
        descripcion: "Camiseta Alternativa Negra 2023",
        precio: 25000 ,
        imagen: "../img/camiseta-negra-2023.jpg"
    },
    {
        id: 4,
        nombreProducto: "Camiseta Italiana",
        descripcion: "Camiseta Edicion Especial Italiana 2023",
        precio: 25000 ,
        imagen: "../img/camiseta-italia.jpg"
    },
    {
        id: 5,
        nombreProducto: "Camiseta Arquero Titular",
        descripcion: "Camiseta Arquero Titular Negra 2023",
        precio: 25000 ,
        imagen: "../img/camiseta-arquero-negra.jpg"
    },
    {
        id: 6,
        nombreProducto: "Camiseta Arquero Suplente",
        descripcion: "Camiseta Arquero Suplente Gris 2023",
        precio: 25000 ,
        imagen: "../img/camiseta-arquero-gris.jpg"
    },
    {
        id: 7,
        nombreProducto: "Camiseta Arquero Alternativa",
        descripcion: "Camiseta Arquero Alternativa Rosa 2023",
        precio: 25000 ,
        imagen: "../img/camiseta-arquero-rosa.jpg"
    },
    {
        id: 8,
        nombreProducto: "Camiseta Conmemorativa",
        descripcion: "Camiseta Conmemorativa Especial 2023",
        precio: 25000 ,
        imagen: "../img/camiseta-conmemorativa.jpg"
    },
    {
        id: 9,
        nombreProducto: "Pantalon Titular",
        descripcion: "Pantalon Titular Azul 2023",
        precio: 12000 ,
        imagen: "../img/pantalon-azul.jpg"
    },
    {
        id: 10,
        nombreProducto: "Pantalon Suplente",
        descripcion: "Pantalon Suplente Blanco 2023",
        precio: 12000 ,
        imagen: "../img/pantalon-blanco.jpg"
    },
    {
        id: 11,
        nombreProducto: "Pantalon Alternativo",
        descripcion: "Pantalon Alternativo Negro 2023",
        precio: 12000 ,
        imagen: "../img/pantalon-negro.jpg"
    },
    {
        id: 12,
        nombreProducto: "Campera polar Azul",
        descripcion: "Campera polar Azul Edicion VS",
        precio: 45000 ,
        imagen: "../img/campera-azul.jpg"
    },
    {
        id: 13,
        nombreProducto: "Campera Azul",
        descripcion: "Campera Azul Edicion VS",
        precio: 35000 ,
        imagen: "../img/campera-azul-comun.jpg"
    },
    {
        id: 14,
        nombreProducto: "Campera Negra",
        descripcion: "Campera Negra Edicion VS",
        precio: 35000 ,
        imagen: "../img/campera-negra.jpg"
    },
    {
        id: 15,
        nombreProducto: "Campera Blanca",
        descripcion: "Campera Blanca Edicion VS",
        precio: 40000 ,
        imagen: "../img/campera-blanca.jpg"
    },
]

let carrito = [];

productos.forEach((product) => {
    let content = document.createElement ("div");
    content.className = "card"
    content.innerHTML = `
    <img src="${product.imagen}">
    <h3>${product.nombreProducto}</h3>
    <p class="precio">${product.precio} $</p>
    <p class="descripcion">${product.descripcion}</p>
    `;
    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        carrito.push({
            id: product.id,
            imagen: product.imagen,
            nombreProducto: product.nombreProducto,
            descripcion: product.descripcion,
            precio: product.precio,
        });
        console.log(carrito);
    });

});

/* Aca comienza la creacion del emoji del carrito, que la idea es que al presionarlo aparezcan los productos que haya seleccionado */

verCarrito.addEventListener("click", () => {
    let modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);
    
    let modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalHeader.append(modalButton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.inner.HTML = `
            <img src="${product.imagen}">
            <h3>${product.nombreProducto}</h3>
            <p>${product.precio}$</p>
        `;

        modalContainer.append(carritoContent);
    });
});









// for (var i = 0; i < productos.length; i++) {
//     var producto = productos[i];

//     var cardHTML = `
//     <div class="col-md-4 mb-4">
//         <div class="card">
//         <img src="${producto.imagen}" class="card-img-top" alt="Imagen del producto">
//         <div class="card-body">
//             <h5 class="card-title">${producto.descripcion}</h5>
//             <p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
//             <input type="number" class="form-control mb-2" placeholder="Cantidad" value="${producto.cantidad}">
//             <button class="btn btn-primary">Agregar al carrito</button>
//         </div>
//         </div>
//     </div>
//     `;

//     productCards.innerHTML += cardHTML;
// }


// let carrito = [];

// function buscarProducto() {
// let seleccion = prompt("Ingrese el nombre del producto que desea seleccionar: (Camisetas o Pantalones titular, suplente o alternativos, o Camperas azul o negra VS)");

// producto = productos.find((p) => p.nombreProducto.toLowerCase() === seleccion.toLowerCase());
// }

// function agregarCarrito() {
// if (producto) {
//     let cantidad = parseInt(prompt("Ingrese la cantidad que desea seleccionar:"));
//     carrito.push({
//     producto: producto.nombreProducto,
//     cantidad: cantidad,
//         subtotal: producto.precio * cantidad
//     });
// } else {
//     alert("El producto seleccionado no existe. Por favor, vuelva a intentarlo.");
// }
// }

// function confirmarCarrito() {
// while (true) {
//     buscarProducto();
//     agregarCarrito();

//     if (!confirm("¿Desea agregar otro producto al carrito?")) {
//     break;
//     }
// }
// }

// function calcularTotal() {
// console.log("Carrito de compras:");
// carrito.forEach((item) => {
//     console.log(`- ${item.cantidad} ${item.producto}: ${item.subtotal}`);
// });

// let total = carrito.reduce((sum, item) => sum + item.subtotal, 0);
// console.log(`Total a pagar: ${total}`);
// }

// function vaciarCarrito() {
// carrito = [];
// console.log("El carrito ha sido vaciado.");
// }

// confirmarCarrito();

// if (carrito.length > 0) {
// if (confirm("¿Desea vaciar el carrito?")) {
//     vaciarCarrito();
// }
// }

// calcularTotal();

