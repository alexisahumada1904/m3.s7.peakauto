class Auto {
  constructor(marca, modelo, motor) {
    this.marca = marca;
    this.modelo = modelo;
    this.motor = motor;
  }
}

let vehiculo = new Auto("Peakauto", "Goenx", { tipo: "4 CILINDROS EN LINEA", bloque:"ALEACION/ALUMINIO", desplazamiento:"1.99 / 1996", caballos:"155 @ 6500",linearoja:6700,inyeccion:"PUNTOS MULTIPLES"});


document.getElementById("marca").innerText=vehiculo.marca
document.getElementById("modelo").innerText=vehiculo.modelo 

document.getElementById("tipo").innerHTML=vehiculo.motor.tipo
document.getElementById("presion").innerHTML=vehiculo.motor.presion
document.getElementById("bloque").innerHTML=vehiculo.motor.bloque
document.getElementById("desplazamiento").innerHTML=vehiculo.motor.desplazamiento
document.getElementById("caballos").innerHTML=vehiculo.motor.caballos
document.getElementById("linearoja").innerHTML=vehiculo.motor.linearoja
document.getElementById("smart").innerHTML=vehiculo.motor.smart
document.getElementById("inyeccion").innerHTML=vehiculo.motor.inyeccion
document.getElementById("encendido").innerHTML=vehiculo.motor.encendido

$('td:contains("undefined")').text('-');


let marca = vehiculo.marca ??= undefined
let modelo = vehiculo.modelo ??= undefined
let bloquemotor = vehiculo.motor.bloquemotor ??= undefined
let presion = vehiculo.motor.presion ??= undefined
let bloque = vehiculo.motor.bloque ??= undefined
let desplazamiento = vehiculo.motor.desplazamiento ??= undefined
let caballos = vehiculo.motor.caballos ??= undefined
let linearoja = vehiculo.motor.linearoja ??= undefined
let smart = vehiculo.motor.smart ??= undefined
let inyeccion = vehiculo.motor.inyeccion ??= undefined
let encendido = vehiculo.motor.encendido ??= undefined


console.log(marca);
console.log(modelo);
console.log(bloquemotor);
console.log(presion);
console.log(bloque);
console.log(desplazamiento);
console.log(caballos);
console.log(linearoja);
console.log(smart);
console.log(inyeccion);
console.log(encendido);
