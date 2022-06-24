//SIMULADOR DE COMPRAS

class Libros {
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
    }
    if (this.stock == 0) {
      console.log("No hay mas en stock");
    }
  }
}
class NuevoUsuario {
  constructor(nombre, email, contraseña, descuento) {
    this.nombre = nombre;
    this.email = email;
    this.contraseña = contraseña;
    this.descuento = descuento;
  }

  //OFREZCO DESCUENTO SI SE SUSCRIBIO
  registro(respuesta) {
    if (respuesta == "Si") {
      this.descuento += 0.2;
    }
  }
  promo(respuesta) {

    while (respuesta != "No") {
      //DESCUENTO DEL 50%
      if (respuesta == "BUENOSPRECIOS") {
        this.descuento += 0.5;
        respuesta = "No";
      }
      //DESCUENTO DEL 30%
      else if (respuesta == "CLARIN365") {
        this.descuento += 0.7;
        respuesta = "No";
      }
    }
  }
}

// USUARIOS REGISTRADOS
const user01 = new NuevoUsuario("Florencia", "florencia@mail.com", "12345", 0); //FLORENCIA TIENE DESCUENTO POR SUSCRIBIRSE Y POR CUPON = 70 OFF
const user02 = new NuevoUsuario("Kevin", "kevin@mail.com", "abcde", 0); // KEVIN TIENE DESCUENTO POR CUPON PERO NO POR SUSCRIBIRSE = 50 OFF
const user03 = new NuevoUsuario("Nicole", "nicole@mail.com", "00000", 0); // NICOLE NO SE SUSCRIBE NI TIENE CUPON = NO HAY DESCUENTO

//SIMULO PREGUNTAR SI DESEEA SUSCRIBIRSE
user01.registro("Si");
user02.registro("No");
user03.registro("No");

//IGUALMENTE SIMULO PREGUNTAR SI TIENE CUPON
user01.promo("BUENOSPRECIOS");
user02.promo("CLARIN365");
user03.promo("No");

//LIBROS EN COLECCION
const libro01 = new Libros("Vermeer:La Obra Completa","Karl Shütz",01,5000,3);
const libro02 = new Libros("Eso no estaba en mi libros de matemáticas","Vicente Meavilla",02,1500,25);
const libro03 = new Libros("Bajo La Misma Estrella","John Green",03,2500,10);

//SOLO PERMITO UN CUPON
let cupon = prompt("Ingrese, si tiene, un cupon. Si NO tiene, presione 0");
let descuento = 0;
while (cupon != 0) {
  //DESCUENTO DEL 50%
  if (cupon == "BUENOSPRECIOS") {
    descuento = 0.5;
    cupon = 0;
  }
  //DESCUENTO DEL 30%
  else if (cupon == "CLARIN365") {
    descuento = 0.7;
    cupon = 0;
  }
}

//ESTO NO
/* function registrarse() {
  const user = prompt("Ingrese nombre de usuario");
  const mail = prompt("Ingrese email");
  const pass = prompt("Ingrese contraseña");
  const subs = prompt("Desea suscribirse? Escriba 1 si su respuesta es SI, 0 si su respuesta es NO");

  if (subs == "1") {
    subs = true;
    }

    const nuevoUser = new NuevoUsuario(user, mail, pass, subs);
} */
//ESTO NO

console.log(
  "Haga click en las imagenes de los libros que quiera añadir al carrito"
);
let carrito = 0;
//IDENTIFICO POR ID EL PRODUCTO, EN ESTE CASO COMO SON SOLO 3 PUEDO RESOLVERLO CON UN IF
function add(idClickeada) {
  if (idClickeada == 01 && libro01.stock > 0) {
    carrito = carrito + 5000;
    libro01.hayStock();
  } else if (idClickeada == 02 && libro02.stock > 0) {
    carrito = carrito + 1500;
    libro02.hayStock();
  } else if (idClickeada == 03 && libro03.stock > 0) {
    carrito = carrito + 2500;
    libro03.hayStock();
  }
  let envio = 1000; 
  const iva = (x) => x * 0.21;
  const conDescuento = (x) => x * descuento;

  let precioFinal = carrito + iva(carrito) + envio - conDescuento(carrito);

  //MUESTRO POR CONSOLA TOTAL Y TOTAL CON MODIFICACIONES CORRESPONDIENTES
  console.log("Total " + carrito);
  console.log("Total con envio + IVA c/descuento = " + precioFinal);
}
