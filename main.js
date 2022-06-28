//SIMULADOR DE COMPRAS

class Libro {
  constructor(nombre, autor, ID, precio, stock) {
    this.nombre = nombre;
    this.autor = autor;
    this.ID = ID;
    this.precio = precio;
    this.stock = stock;
  }

  hayStock() {
    if (this.stock != 0) {
      this.stock--;
      console.log(`Quedan en stock ${this.stock}`);
      return true; 
    }
    if (this.stock == 0) {
      console.log("No hay mas en stock");
      return false; 
    }
  }
}

class NuevoUsuario {
  constructor(nombre, email, contraseña, descuento) {
    this.nombre = nombre;
    this.email = email;
    this.contraseña = contraseña;
    this.descuento = descuento;
    this.carrito = []
  }

  agregarProdCarrito (producto){
    if(producto.hayStock()){
      this.carrito.push(producto);
      return true;
    }
    else{
      return false;
    }
  }


  //OFREZCO DESCUENTO SI SE SUSCRIBIO
  registro(respuesta) {
    if (respuesta == "True") {
      this.descuento += 0.7;
    }
  }
  promo(respuesta) {

    while (respuesta != "False") {
      //DESCUENTO DEL 50%
      if (respuesta == "BUENOSPRECIOS") {
        this.descuento += 0.5;
        respuesta = "False";
      }
      //DESCUENTO DEL 30%
      else if (respuesta == "CLARIN365") {
        this.descuento += 0.7;
        respuesta = "False";
      }
    }
  }
}

// USUARIOS REGISTRADOS
const user01 = new NuevoUsuario("Florencia", "florencia@mail.com", "12345", 0); //FLORENCIA TIENE DESCUENTO POR SUSCRIBIRSE Y POR CUPON = 70 OFF
const user02 = new NuevoUsuario("Kevin", "kevin@mail.com", "abcde", 0); // KEVIN TIENE DESCUENTO POR CUPON PERO NO POR SUSCRIBIRSE = 50 OFF
const user03 = new NuevoUsuario("Nicole", "nicole@mail.com", "00000", 0); // NICOLE NO SE SUSCRIBE NI TIENE CUPON = NO HAY DESCUENTO

//SIMULO PREGUNTAR SI DESEEA SUSCRIBIRSE
user01.registro("True");
user02.registro("False");
user03.registro("False");

//IGUALMENTE SIMULO PREGUNTAR SI TIENE CUPON
user01.promo("BUENOSPRECIOS");
user02.promo("CLARIN365");
user03.promo("False");

//LIBROS EN COLECCION
const libro01 = new Libro("Vermeer:La Obra Completa","Karl Shütz",01,5000,3);
const libro02 = new Libro("Eso no estaba en mi libros de matemáticas","Vicente Meavilla",02,1500,25);
const libro03 = new Libro("Bajo La Misma Estrella","John Green",03,2500,10);

//USUARIO 1 AGREGA 4 LIBROS AL CARRITO PERO EL STOCK ES DE 3,  HAYSTOCK() RETORNA FALSE
console.log("Usuario 1 agrega libro 1");
user01.agregarProdCarrito(libro01);
console.log("Usuario 1 agrega libro 1");
user01.agregarProdCarrito(libro01);
console.log("Usuario 1 agrega libro 1");
user01.agregarProdCarrito(libro01);
console.log("Usuario 1 agrega libro 1. No hay mas, no se agrega y muestra msj en consola.");
user01.agregarProdCarrito(libro01);



let total = 0;

for(let i = 0; i < user01.carrito.length; i++){
  total += user01.carrito[i].precio;
}


  let envio = 1000; 
  const iva = (x) => x * 0.21;
  const conDescuento = (x) => Math.abs(x-(x * user01.descuento));

  let precioFinal = total + iva(total) + envio - conDescuento(total);

  //MUESTRO POR CONSOLA TOTAL Y TOTAL CON MODIFICACIONES CORRESPONDIENTES
  console.log("Total " + total);
  console.log("Total con envio + IVA c/descuento = " + precioFinal);

