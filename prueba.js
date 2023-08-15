let numero= parseInt(prompt("ingrese un numero"));
for(let i=1;i<10;i++){
alert(numero *i);
}


let entrada = prompt("Ingresar un nombre");

while (entrada != "ESC") {
    switch (entrada) {
        case "ANA":
            alert("Hola ANA");
            break;

    case "JUAN":
        alert("Hola JUAN");
        break;

    default:
        alert("Quién eres?");
        break;
}
    entrada = prompt("Ingresar un nombre");
}


 //Funcion para ingresar cantidad a prestar
    function cantidad1(){
    let cantidad1 = parseInt(prompt("ingresar cantidad a prestar"));
    alert("La cantidad es = " + cantidad1)
    return cantidad1
    }
    
    //Funcion para ingresar cuotas a pagar
    function cuotas1(){
    let cuotas1 = parseInt(prompt("En cuantas cuotas quiere pagar, elija de 1 a 12"));
    alert("Desea el prestamo en " + cuotas1 + " cuotas?")
    return cuotas1
    }
    
    let cantidad = cantidad1()
    let cuotas = cuotas1()
    
    console.log("La cantidad es: " + cantidad)
    console.log("Las cuotas son:" + cuotas)
    
    function dividir(dato1, dato2){
    let resultado = dato1 / dato2;
    return resultado
    }
    
    //Capturar cantiddad / cuotas
    let division = dividir(cantidad, cuotas)
    
    //Mostrar resultado
    console.log("Usted debe pagar " + cuotas + " cuotas de " + division)


    const productos = [
        { id: 1, nombre: "camisa", precio: 1000 },
        { id: 2, nombre: "zapato", precio: 700 },
        { id: 3, nombre: "gorra", precio: 350 },
        { id: 4, nombre: "media", precio: 100 },
    ];

    let precio = parseInt(prompt("Ingrese el precio minimo"));
    let filtrados = productos.filter((item) => item.precio > precio);