
class Pilcha {
    constructor(id, name, price, img) {
        this.id = id;
        this.name = name; 
        this.price = price;
        this.img = img;
        this.stock = 1; 
    }
}

const gorra = new Pilcha(1, "Gorra", 50, "img/gorra.png");
const remera = new Pilcha(2, "Remera", 100, "img/remera.png");
const pantalon = new Pilcha(3, "Pantalon", 150, "img/pantalon.png");
const buzo = new Pilcha(4, "Buzo", 170, "img/buzo.png");
const campera = new Pilcha(5, "Campera", 250, "img/campera.png");
const zapatillas = new Pilcha(6, "Zapatillas", 600, "img/zapatillas.png");
const medias = new Pilcha(7,"Medias", 10, "./img/medias.png");

const products = [gorra, remera, pantalon, buzo, campera, zapatillas, medias];

let cart = [];

if(localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

const productContainer = document.getElementById("productContainer");

const showProducts = () => {
    products.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
        <div class="card">
            <img src="${product.img}" class="card-img-top imgProductos" alt="${product.name}">
            <div class="card-body">
            <h5 class="card-title"> ${product.name} </h5>
            <p class="card-text"> US$${product.price} </p>
            <button class="btn colorBoton" id="boton${product.id}"> Agregar al Carrito </button>
            </div>
        </div>
    `
        productContainer.appendChild(card);
        const boton = document.getElementById(`boton${product.id}`);
        boton.addEventListener("click", () => {
            addToCart(product.id)
        })
    })
}

const addToCart = (id) => {
    const product = products.find((product) => product.id === id);
    const productInCart = cart.find((product) => product.id === id);
    if(productInCart){
        productInCart.stock++;
    }else {
        cart.push(product);
        localStorage.setItem("cart",JSON.stringify(cart));
    }
    totalCalculate();
}

showProducts();

const cartContainer = document.getElementById("cartContainer");

const cartView = document.getElementById("cartView");

cartView.addEventListener("click", () => {
    showCart();
});

const showCart = () => {
    cartContainer.innerHTML="";
    cart.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${product.img}" class="card-img-top imgProductos" alt="${product.name}">
                <div class="card-body">
                <h5 class="card-title"> ${product.name} </h5>
                <p class="card-text"> US$${product.price} </p>
                <p class="card-text"> Cant: ${product.stock} </p>
                <button class="btn colorBoton" id="eliminar${product.id}"> Eliminar Producto </button>
                </div>
            </div>
        `
        cartContainer.appendChild(card);
        const boton = document.getElementById(`eliminar${product.id}`);
        boton.addEventListener("click", () => {
            deleteOnCart(product.id);
        })
    })
    totalCalculate();
}

const deleteOnCart = (id) => {
    const product = cart.find((product) => product.id === id);
    const indexx = cart.indexOf(product);
    cart.splice(indexx, 1);
    showCart();
    localStorage.setItem("cart", JSON.stringify(cart));
}

const cartEmpty = document.getElementById("cartEmpty");

cartEmpty.addEventListener("click", () => {
    totalCartEmpty();
})

const totalCartEmpty = () => {
    cart = [];
    showCart();
    localStorage.clear();
}

const total = document.getElementById("total");

const totalCalculate = () => {
    let totalPurchase = 0; 
    cart.forEach((product) => {
        totalPurchase += product.price * product.stock;
    })
    total.innerHTML = `: US$${totalPurchase}`;
}