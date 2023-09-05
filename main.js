const containeritems = document.getElementById(id = "containeritems");
const iconcart = document.getElementById(id="iconcart");
const modalcontainer= document.getElementById(id="modalcontainer");

let carrito = [];

const productos = [
    { id: 1, nombre: "Chevrolet Onix", precio: 5270000, img:"./assets/onix.jpg",cantidad:1},
    { id: 2, nombre: "Chevrolet Prisma", precio: 5400000,img:"./assets/prisma.jpg",cantidad:1},
    { id: 3, nombre: "Chevrolet Cruze", precio: 7690000,img:"./assets/cruze.jpg", cantidad:1},
    { id: 4, nombre: "Ford Fiesta", precio: 5770000,img:"./assets/fiesta.jpg",cantidad:1},
    { id: 5, nombre: "Ford Mondeo", precio: 12350000,img:"./assets/mondeo.jpg", cantidad:1},
    { id: 6, nombre: "Ford Ranger", precio: 15530000, img:"./assets/ranger.jpg", cantidad:1},
];

productos.forEach((item) => { 
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
    <img class "img" src="${item.img}"/> 
    <p class"info-product" >${item.nombre}</p>
    <b class "price">${item.precio} $</b>
`;
containeritems.append (div);

let agregar = document.createElement ("button");
agregar.innerText= "Agregar";
agregar.classname= "button";

div.append(agregar);

agregar.addEventListener("click", () => {
    const repeat = carrito.some((repeatProduct)=> repeatProduct.id === item.id);
    if(repeat) {
        carrito.map((prod)=>{
            if(prod.id === productos.id){
            prod.cantidad++;
                }
        });
        } else {
            carrito.push({
                id:item.id,
                img:item.img,
                nombre: item.nombre,
                precio: item.precio,
                cantidad: item.cantidad,
            });
            console.log(carrito);
            savelocal();
            }
        });
    });   
    const vercarrito =()=>{
    modalcontainer.innerHTML= "";  
    modalcontainer.style.display= "flex";
    const modalHeader =document.createElement("div");
    modalHeader.className= "modal-header";
    modalHeader.innerHTML= `
    <h1 class"modal-header-title">Carrito.</h1>
    `;
    modalcontainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText ="x";
    modalbutton.className="modal-header-boton";

    modalbutton.addEventListener("click", () => {
        modalcontainer.style.display ="none";
    });

    modalHeader.append(modalbutton);

carrito.forEach((item) => {
        let carritoContent= document.createElement("div")
        carrito.className="modal-content";
        carritoContent.innerHTML = `
        <img src="${item.img}">
        <h3>${item.nombre}</h3>
        <p> ${item.precio} $</p>
        <p> ${item.cantidad}</p>
    `;
    modalcontainer.append(carritoContent)

    let eliminar =document.createElement("span");
    eliminar.innerText="X";
    eliminar.className="Delete";
    carritoContent.append(eliminar);
    });

const total = carrito.reduce((acc,el) => acc + el.precio,0);

const totalComprado = document.createElement("div");
totalComprado.className ="totalcomprado";
totalComprado.innerHTML = `total a pagar: ${total}$`
;
modalcontainer.append(totalComprado);
};

iconcart.addEventListener("click",vercarrito );

const eliminarProducto= ()=>{
}

const savelocal = ()=>{
localStorage.setItem("carrito",JSON.stringify (carrito));
};