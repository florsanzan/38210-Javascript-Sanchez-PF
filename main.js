//SIMULADOR DE COMPRAS

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

let codProd;
let carrito = 0;
//IDENTIFICO POR ID EL PRODUCTO, EN ESTE CASO COMO SON SOLO 3 PUEDO RESOLVERLO CON UN IF
function add(idClickeada) {
  console.log(idClickeada);
  codProd = idClickeada;
  if (codProd == 01) {
    carrito = carrito + 5000;
  } else if (codProd == 02) {
    carrito = carrito + 1500;
  } else {
    carrito = carrito + 2500;
  }

  const iva = (x) => x * 0.21;
  const conDescuento = (x) => x * descuento;

  const envio = 1000;

  let precioFinal = carrito + iva(carrito) + envio - conDescuento(carrito);

  //MUESTRO POR CONSOLA TOTAL Y TOTAL CON MODIFICACIONES CORRESPONDIENTES
  console.log("Total " + carrito);
  console.log("Total con envio + IVA c/descuento = " + precioFinal);
}
