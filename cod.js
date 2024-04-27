class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get_datos() {
        return `Nombre: ${this.nombre} - Precio: $${this.precio} - Stock: ${this.stock}`;
    }

    update_stock(cantidad) {
        this.stock -= cantidad;
    }
}

const lista_productos = [
    new Producto("Producto 1", 10, 5),
    new Producto("Producto 2", 20, 10),
    new Producto("Producto 3", 15, 3)
];

function mostrarProductos() {
    const productsContainer = document.getElementById("products-container");
    lista_productos.forEach(producto => {
        const productInfo = document.createElement("p");
        productInfo.textContent = producto.get_datos();
        productsContainer.appendChild(productInfo);
    });
}

function buscarProductoPorNombre(nombre) {
    return lista_productos.find(producto => producto.nombre === nombre);
}

function filtrarProductosPorPrecio(precioMinimo, precioMaximo) {
    return lista_productos.filter(producto => producto.precio >= precioMinimo && producto.precio <= precioMaximo);
}

// Mostrar informacion de los productos en la web
mostrarProductos();

// Busqueda por nombre y filtrado por precio
const productoBuscado = buscarProductoPorNombre("Producto 2");
console.log("Producto buscado:", productoBuscado);

const productosFiltrados = filtrarProductosPorPrecio(10, 20);
console.log("Productos filtrados por precio:", productosFiltrados);