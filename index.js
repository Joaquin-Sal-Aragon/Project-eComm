/* PARA HABLAR POR PANTALLA */
/* 
let nombre = prompt("Hola! Quién esta visitando mi página?");

alert("Bienvenido " + nombre) */

/* ASIGNACION DE VALORES CONCATENACION */
/* 
saludo = "¡Hola pedro!";
pregunta = " ¿Como estas?"

frase = saludo + pregunta;

document.write(frase) */

/* CADENA DE TEXTO CON NUMEROS */
/* 
numero1 = 53;
numero2 = 8;

frase = "" + numero1 + numero2

document.write(frase) */



/* CONCATENACION
numero1 = "53";
numero2 = 8;

frase = + numero1.concat(numero2)

document.write(frase) */

/* ejemplo boludo:
nombre = "joako hudson"
frase = "soy " + nombre + " y estoy caminando"

document.write(frase) */


/* ESCAPE DE COMILLAS SIMPLES Y COMILLAS DOBLES */

/* nombre = "soy joako hudson";

frase = "mi nombre es 'joako' y soy crack"

document.write(frase)

nombre = "soy joako hudson";

frase = ' mi nombre es "joako" y soy crack'

document.write(frase) */

/* OPERADOR DE COMPARACIONES */

/* FALSE */
/* let numero = 23;
let numero2 = 13;

document.write(numero == numero2) */

/* TRUE */
/* let numero = 23;
let numero2 = 23;

document.write(numero == numero2) */


/* let numero = 23;
let numero2 = 13;
let texto = "texto 1"
let texto2 = "texto 2"

document.write(texto != texto2) */

/*
== IGUAL
!= INIGUAL
=== ESTRICTAMENTE IGUAL
!== NO ES ESTRICTAMENTE IGUAL
A > B MAYOR QUE
A >= B MAYOR O IGUAL QUE
A < B MENOR QUE
A <= B MENOR O IGUAL QUE
 */


/* num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

document.write(op) */

/* holaComoEstas
estoSeEscribeDeEstaForma
paraPoderHacer
lasCosasBien
porEjemplo:

document.getElementById() */

/* nombre = "joaquin";
si es joaquin, se ejecuta bien 
if (nombre == "joaquin") {
    alert("tu nombre es buenardo " + nombre);
}
/* si no es joaquin, es dalto 
else if (nombre == "dalto") {
    alert("tu nombre es malardo " + nombr'Cofla'. e);
}
/* si no es ninguno de esos es solo else
else {
    alert("tu nombre es otro");
} */





/* dineroCofla = prompt("Cuánto dinero tienes, Cofla? ");
dineroRoberto = prompt("Cuánto dinero tienes, Roberto? ");
dineroPedro = prompt("Cuánto dinero tienes, Pedro? ");

dineroCofla = parseInt(dineroCofla);
if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("'Cofla', compra el helado de agua con un valor de $0.6. ");
    alert(" y te sobran " + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6){
    alert("'Cofla', compra el helado de crema del cielo con un valor de $1. ");
    alert(" y te sobran " + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("'Cofla', compra el helado marca Faricci con un valor de $1.6. ");
    alert(" y te sobran " + (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("'Cofla', compra el helado marca Cremolati con un valor de $1.7.");
    alert(" y te sobran " + (dineroCofla - 1.7));
}

else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("'Cofla', compra el helado marca Block con un valor de $1.8. ");
    alert(" y te sobran " + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9) {
    alert("'Cofla', puedes comprar el helado con confites o el pote de 1/4kg! :) ");
    alert(" y te sobran " + (dineroCofla - 2.9))
} 
    else {
    alert("Lo siento 'Cofla', no te alcanza. ");
}



dineroRoberto = parseInt(dineroPedro)
if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("'Roberto', compra el helado de agua con un valor de $0.6. ");
    alert(" y te sobran " + (dineroRoberto - 0.6));
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert("'Roberto', compra el helado de crema del cielo con un valor de $1. ");
    alert(" y te sobran " (+ dineroRoberto - 1));
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert("'RobertodineroRoberto', compra el helado marca Faricci con un valor de $1.6. ");
    alert(" y te sobran " + (dineroRoberto - 1.6));
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert("'Roberto', compra el helado marca Cremolati con un valor de $1.7.");
    alert(" y te sobran " + (dineroRoberto - 1.7));
}

else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert("'Roberto', compra el helado marca Block con un valor de $1.8. ");
    alert(" y te sobran " + (dineroRoberto - 1.8));
}

else if (dineroRoberto >= 2.9) {
    alert("'Roberto', puedes comprar el helado con confites o el pote de 1/4kg! :) ");
    alert(" y te sobran " + (dineroRoberto - 2.9));
} 
    else {
    alert("Lo siento 'Roberto', no te alcanza. ");
}



dineroPedro = parseInt(dineroPedro)
if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("'Pedro', compra el helado de agua con un valor de $0.6. ");
    alert(" y te sobran " + (dineroPedro - 0.6));
}

else if (dineroPedro >= 1 && dineroPedro < 1.6){
    alert("'Pedro', compra el helado de crema del cielo con un valor de $1. ");
    alert(" y te sobran " + (dineroPedro - 1));
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("'Pedro', compra el helado marca Faricci con un valor de $1.6. ");
    alert(" y te sobran " + (dineroPedro - 1.7));
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("'Pedro', compra el helado marca Cremolati con un valor de $1.7.");
    alert(" y te sobran " + (dineroPedro - 1.7));
}

else if (dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert("'Pedro', compra el helado marca Block con un valor de $1.8. ");
    alert(" y te sobran " + (dineroPedro - 1.8));
}

else if (dineroPedro >= 2.9) {
    alert("'Pedro', puedes comprar el helado con confites o el pote de 1/4kg! :) ");
    alert(" y te sobran " + (dineroPedro - 2.9));
} 
    else {
    alert("Lo siento 'Pedro', no te alcanza. ");
    } */ 




/*     "use strict";
    const definirCompra = (n)=>{
        let din = prompt('Dinero de Cofla');
        if (din >= 0.6 && din < 1) return ('${n}: Helado de agua');
        if (din >= 1 && din < 1.6) return ('${n}: Helado de crema');
        if (din >= 1.6 && din < 1.6) return ('${n}: Helado de Heladix');
        if (din >= 1.7 && din < 1.7) return ('${n}: Helado de Heladovich');
        if (din >= 1.8 && din < 2.8) return ('${n}: Helado de Helardo');
        if (din >= 2.9) return ('${n}: Helado de de confites o pote de 1/4ks');
        else return ('${n}: No te alcanza para ningun helado.');
    }

    console.log(definirCompra("Cofla"));
    console.log(definirCompra("Pedro"));
    console.log(definirCompra("Roberto")); */

    window.onload = function() {
        var imagenes = document.querySelectorAll('.imagen-carrusel');
        var index = 0;
    
        function mostrarImagen(index) {
            imagenes.forEach(function(imagen) {
                imagen.style.display = 'none';
            });
            imagenes[index].style.display = 'block';
        }
    
        function siguienteImagen() {
            index++;
            if (index >= imagenes.length) {
                index = 0;
            }
            mostrarImagen(index);
        }
    
        function anteriorImagen() {
            index--;
            if (index < 0) {
                index = imagenes.length - 1;
            }
            mostrarImagen(index);
        }
    
        mostrarImagen(index);
    
        // Eventos para cambiar de imagen al hacer clic en botones
        document.getElementById('anterior').addEventListener('click', anteriorImagen);
        document.getElementById('siguiente').addEventListener('click', siguienteImagen);
    }
    