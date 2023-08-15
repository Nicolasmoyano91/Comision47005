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

    const productos = [
        { id: 1, nombre: "Chevrolet Onix", precio: 5270000 },
        { id: 2, nombre: "Chevrolet Prisma", precio: 5400000 },
        { id: 3, nombre: "Chevrolet Cruze", precio: 7690000 },
        { id: 4, nombre: "Ford Fiesta", precio: 5770000 },
        { id: 5, nombre: "Ford Mondeo", precio: 12350000 },
        { id: 6, nombre: "Ford Ranger", precio: 15530000 },
    ];
    
    const precio = parseInt(prompt("Ingrese el precio minimo para su compra"));    
    const result = productos.filter((productos) => productos.precio > precio);
    const ListadoFiltro = result.reduce((acc,el)=> acc += `${el.nombre} - ${el.precio} \n`, "")
    alert(ListadoFiltro);

    let nombre = prompt("Ingrese el nombre del producto a consultar");
    let producto;

    for (const item of productos) {
        if (item.nombre === nombre) {
            producto = item;
        }
    } 
    if (producto) {
        let mensaje = `
        ID: ${producto.id}
        Nombre: ${producto.nombre}
        $${producto.precio}
        `;
    alert(mensaje);
} else {
        alert("El producto no se ha encontrado en la lista");
    }


