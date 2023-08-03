let shopContent = document.getElementById("shopContent");
let verCarrito = document.getElementById("verCarrito");
let modalContainer = document.getElementById("modal-container");
let cantidadCarrito = document.getElementById("cantidadCarrito");

let productos = [
    {
        id: 1,
        nombreProducto: "Camiseta Titular",
        descripcion: "Camiseta Titular Blanca 2023",
        precio: 25000 ,
        imagen: "../img/camiseta-blanca-2023.jpg",
        cantidad: 1
    },
    {
        id: 2,
        nombreProducto: "Camiseta Suplente",
        descripcion: "Camiseta Suplente Azul 2023",
        precio: 25000 ,
        imagen: "../img/camiseta-azul-2023.jpg",
        cantidad: 1
    },
    {
        id: 3,
        nombreProducto: "Camiseta Alternativa",
        descripcion: "Camiseta Alternativa Negra 2023",
        precio: 25000 ,
        imagen: "../img/camiseta-negra-2023.jpg",
        cantidad: 1
    },
    {
        id: 4,
        nombreProducto: "Camiseta Italiana",
        descripcion: "Camiseta Edicion Especial Italiana 2023",
        precio: 25000 ,
        imagen: "../img/camiseta-italia.jpg",
        cantidad: 1
    },
    {
        id: 5,
        nombreProducto: "Camiseta Arquero Titular",
        descripcion: "Camiseta Arquero Titular Negra 2023",
        precio: 25000 ,
        imagen: "../img/camiseta-arquero-negra.jpg",
        cantidad: 1
    },
    {
        id: 6,
        nombreProducto: "Camiseta Arquero Suplente",
        descripcion: "Camiseta Arquero Suplente Gris 2023",
        precio: 25000 ,
        imagen: "../img/camiseta-arquero-gris.jpg",
        cantidad: 1
    },
    {
        id: 7,
        nombreProducto: "Camiseta Arquero Alternativa",
        descripcion: "Camiseta Arquero Alternativa Rosa 2023",
        precio: 25000 ,
        imagen: "../img/camiseta-arquero-rosa.jpg",
        cantidad: 1
    },
    {
        id: 8,
        nombreProducto: "Camiseta Conmemorativa",
        descripcion: "Camiseta Conmemorativa Especial 2023",
        precio: 25000 ,
        imagen: "../img/camiseta-conmemorativa.jpg",
        cantidad: 1
    },
    {
        id: 9,
        nombreProducto: "Pantalon Titular",
        descripcion: "Pantalon Titular Azul 2023",
        precio: 12000 ,
        imagen: "../img/pantalon-azul.jpg",
        cantidad: 1
    },
    {
        id: 10,
        nombreProducto: "Pantalon Suplente",
        descripcion: "Pantalon Suplente Blanco 2023",
        precio: 12000 ,
        imagen: "../img/pantalon-blanco.jpg",
        cantidad: 1
    },
    {
        id: 11,
        nombreProducto: "Pantalon Alternativo",
        descripcion: "Pantalon Alternativo Negro 2023",
        precio: 12000 ,
        imagen: "../img/pantalon-negro.jpg",
        cantidad: 1
    },
    {
        id: 12,
        nombreProducto: "Campera polar Azul",
        descripcion: "Campera polar Azul Edicion VS",
        precio: 45000 ,
        imagen: "../img/campera-azul.jpg",
        cantidad: 1
    },
    {
        id: 13,
        nombreProducto: "Campera Azul",
        descripcion: "Campera Azul Edicion VS",
        precio: 35000 ,
        imagen: "../img/campera-azul-comun.jpg",
        cantidad: 1
    },
    {
        id: 14,
        nombreProducto: "Campera Negra",
        descripcion: "Campera Negra Edicion VS",
        precio: 35000 ,
        imagen: "../img/campera-negra.jpg",
        cantidad: 1
    },
    {
        id: 15,
        nombreProducto: "Campera Blanca",
        descripcion: "Campera Blanca Edicion VS",
        precio: 40000 ,
        imagen: "../img/campera-blanca.jpg",
        cantidad: 1
    },
]

/*Aca comienza todo lo que seria parte del carrito*/

let carrito = JSON.parse(localStorage.getItem("carrito")) || [] ;

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

        let repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        if (repeat){
            carrito.map((prod) => {
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
        } else {
        carrito.push({
            id: product.id,
            imagen: product.imagen,
            nombreProducto: product.nombreProducto,
            descripcion: product.descripcion,
            precio: product.precio,
            cantidad: product.cantidad,
            });
        console.log(carrito);
        console.log(carrito.length);
        carritoCounter();
        saveLocal();
        }
    });
});

/* Aca comienza la creacion del emoji del carrito, que la idea es que al presionarlo aparezcan los productos que haya seleccionado */

let pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    let modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);
    
    let modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () =>{
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <img src="${product.imagen}">
            <h3>${product.nombreProducto}</h3>
            <p>${product.precio}$</p>
            <p>Cantidad: ${product.cantidad}</p>
        `;

        modalContainer.append(carritoContent);
        console.log(carrito.length);
        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    });

    let total = carrito.reduce((acc, el) => acc + el.precio, 0);

    let totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `total a pagar: ${total} $`;
    modalContainer.append(totalBuying);
};

/*Aca comienza la parte en la que creo la forma de como eliminar productos que hayan sido seleccionados anteriormente */

verCarrito.addEventListener("click", pintarCarrito);

let eliminarProducto = () => {
    let foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCounter();
    saveLocal();
    pintarCarrito();
};

/*Le agrego una funcion que hace que al seleccionar determinada cantidad de productos, aparezca el numero de productos seleccionados encima del emoji del Carrito*/ 

let carritoCounter = () => {
    cantidadCarrito.style.display = "block";

    let carritolength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritolength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

/* Local Storage */
let saveLocal = () =>{
localStorage.setItem("carrito", JSON.stringify(carrito));
};

JSON.parse(localStorage.getItem("carrito"));

carritoCounter();