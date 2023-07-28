let marca, modelo, descuento=0;

marca= prompt("marca?","0");
modelo= prompt("modelo?","0");

if (marca== "chevrolet")
    if (modelo == "onix")
    {
        descuento=5;
    }
    else {
        descuento= 10;
    }
    alert (`Su descuento es ${descuento}`);


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