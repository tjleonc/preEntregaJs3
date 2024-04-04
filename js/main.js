// PRODUCTOS
const productos = [
    // Llantas
    {
        id: "Llanta-01",
        titulo: "Llanta 01",
        imagen: "./img/llantas/25.jpg",
        categoria: {
            nombre: "Llantas",
            id: "llantas"
        },
        precio: 300000
    },
    {
        id: "Llanta-02",
        titulo: "Llanta 02",
        imagen: "./img/llantas/ENKEI-17X7-5X114-ET32-BRONCE.jpg",
        categoria: {
            nombre: "Llantas",
            id: "llantas"
        },
        precio: 250000
    },
    //neumaticos
    {
        id: "Neumatico-01",
        titulo: "Neumatico 01",
        imagen: "./img/neumaticos/neumatico1.png",
        categoria: {
            nombre: "Neumaticos",
            id: "neumaticos"
        },
        precio: 100000
    },
    {
        id: "Neumatico-02",
        titulo: "Neumatico 02",
        imagen: "./img/neumaticos/neumatico2.png",
        categoria: {
            nombre: "Neumaticos",
            id: "neumaticos"
        },
        precio: 250000
    },
    {
        id: "Neumatico-03",
        titulo: "Neumatico 03",
        imagen: "./img/neumaticos/green-max-eco-touring.jpg",
        categoria: {
            nombre: "Neumaticos",
            id: "neumaticos"
        },
        precio: 400000
    },
];


/* Acá declaramos los elementos del DOM */
const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")

function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = ""
    
    productosElegidos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("productos")
        div.innerHTML = `                    
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>`

        contenedorProductos.append(div);
    })
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {

    boton.addEventListener("click", (e) =>{
        
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){
            const productoCategroia = productos.find(producto => producto.categoria.id === e.currentTarget.id);

            tituloPrincipal.innerText = productoCategroia.categoria.nombre;
            const productosBoton = productos.filter(producto =>
                producto.categoria.id === e.currentTarget.id); /* nos trae el elemento html que esta viendo */
            cargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }


    })


})