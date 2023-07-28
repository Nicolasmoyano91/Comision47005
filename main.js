let marca="", modelo="", descuento=0;

marca = prompt("Marca?");
modelo = prompt("Modelo?");

if (marca === "chevrolet")
    if (modelo === "onix")
    {
        descuento=5;
    }
    else {
        descuento= 10;
    }
    alert (`Su descuento es ${descuento}`);

    for(let turno=1; turno <= 10; turno ++)
    {
        let nombre = prompt("Ingrese su Nombre");
        alert (`Turno #${turno} Nombre: ${nombre} `)
    }

    function cantidad1(){
    let cantidad1 = prompt("ingresar cantidad a prestar");
    alert("La cantidad es = " + cantidad1)
    return cantidad1;
    }
    
    function cuotas1(){
    let cuotas1 =prompt("En cuantas cuotas quiere pagar, elija de 1 a 12");
    alert("Desea el prestamo en " + cuotas1 + " cuotas?")
    return cuotas1
    }
    
    let cantidad = cantidad1();
    let cuotas = cuotas1();
    
    console.log("La cantidad es: " + cantidad);
    console.log("Las cuotas son:" + cuotas);
    
    function dividir(dato1, dato2){
    let resultado = dato1 / dato2;
    return resultado;
    }
    
    //Capturar cantiddad / cuotas
    let division = dividir(cantidad, cuotas);
    
    //Mostrar resultado
    console.log("Usted debe pagar " + cuotas + " cuotas de " + division);