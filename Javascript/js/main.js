alert("Bienvenido a Station Gamer X")


class Clientes {
    constructor(nombre, apellido, dni, email , credito) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.email = email;
        this.credito = credito
    }

    sumarsaldo(credito) {
        this.credito = this.credito + credito;
    }
}
const clientes = [];


class Hardware {
    constructor(nombre, id, precio, cant) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.cant = cant;
    }
}

const prod1 = new Hardware("RTX 3090", 1, 1500, 10);
const prod2 = new Hardware("Intel i7 10800k", 2, 399, 50);
const prod3 = new Hardware("Mouse Noganet", 3, 20, 200); 
const prod4 = new Hardware("teclado HyperX Origins", 4, 100, 200); 
const prod5 = new Hardware("Monitor MSI 144hz", 5, 500, 70); 

const ArrayHardware = [prod1, prod2, prod3, prod4, prod5];

function menu(){
    let option = 1;
    while (option !== 0 ) {
        option = parseInt(prompt("Ingrese una opción:\n \n1- ALTA DE USUARIO   \n2- BUSCAR POR DNI   \n3- BUSCAR PRODUCTO  \n4- SUMAR CREDITO EN TIENDA \n\n 5- SALIR "));
    
        switch (option) {
            case 1:
                altaCliente();
                option=1;
                break;
            case 2:
                buscardni();
                option=1;
                break;
            case 3:
                buscarproducto();
                option=1;
                break;
            case 4:
                sumarsaldo();
                option=1;
                break;
            case 5:
                salir();
                option = 0;
                break;
     }
    }
}

menu();

function altaCliente(){

    let nombre = prompt("Ingrese el nombre del nuevo cliente");
    let apellido = prompt("Ingrese apellido del nuevo cliente");
    let dni = prompt("Ingrese su dni del nuevo cliente");
    let email = prompt("Ingrese el email del nuevo cliente")
    let credito = 0;
    const cliente = new Clientes(nombre, apellido, dni, email, credito);
    clientes.push(cliente);  
    menu();
}

function buscardni() {
    let cliente =  ingresardni();
    
    if(cliente == null){
        console.log("Cliente no encontrado");
    }else{
        alert("El cliente encontrado es: " + cliente.nombre +"  "+ cliente.apellido + "\nCredito disponible para utilizar:  "+cliente.credito+" dolares");
        
    }
    menu();
}

function ingresardni(){

    let dni = prompt("Ingrese el DNI del cliente a buscar: ");
    let cliente = clientes.find(cliente => cliente.dni === dni);
    return cliente;
}


function sumarsaldo() {
    let cliente =  ingresardni();
    let nuevosaldo = parseInt(prompt("Ingrese nuevo saldo"));
    for (let Clientes of clientes) {
        if(Clientes.dni == cliente.dni) {
            Clientes.sumarsaldo(nuevosaldo);
        }
    }
    console.log(cliente)
    menu();
}


function buscarproducto(){
    let buscarid = prompt("Ingrese el id del producto");
    const producto = ArrayHardware.find(Hardware => Hardware.id == buscarid); 
    alert("El producto seleccionado es: "+ producto.nombre + "\nQuedan disponibles: "+producto.cant + "  unidades" + "\nEl producto seleccionado cuesta: " +producto.precio + " dolares");
    menu();
}


function salir() {
    alert("Gracias vuelva prontos");
}