
let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[];:,./<>?\|" //caracteres que formanparte de la contraseña 
let password = ""; //variable donde se almacenan los caracteres

let textoVisible = document.getElementById('texto-generado');
textoVisible.readOnly=true; //el atributo readonly se agrega al elemento textarea para que el usuario no pueda el contenido del campo de texto.

const btnGenerador = document.getElementById('boton-generar')
 

const opcion = document.getElementById('seleccionar-caracteres');   //obtenemos una referencia al elemento select utilizando el método.
let valorSeleccionado;                                              // eclaramos una variable llamada valorSeleccionado donde se depositara el valor de la seleccion.

opcion.addEventListener('change',function(){ //Le agregamos a el elmento select ud addeventlistener que se activa cuando se selecciona un nuevo valor en el menú desplegable con 'change'
    valorSeleccionado = opcion.value         //osea cuando hay un change en el elemento se activa la funcion y la opcion seleccionada pasa a ser el valor de la variable valorSeleccionado.
    textoVisible.value=''; //aqui se limpia el text area si despues de generar seleccionamos otra opcion de valor
})

btnGenerador.addEventListener('click',function(){ //agrego al boton para generar contraseña una funcion que se dispara con el evento click

    let longitud = valorSeleccionado;  //la longitud de la contraseña va a ser igual al valor seleccioado en la card select
    for(let i = 0; i < longitud; i++){
        password += caracteres.charAt(Math.floor(Math.random() * caracteres.length));  //esta funcion recorre el string caracteres segun el largo que tenga el valor seleccionado
    };                                                                                 //selecciona un elemento de el string de forma aleatoria entre 0 y 1, redondeado
                                                                                       //y multiplicado por el largo de la cadena para que el elemento este ahi si o si              
    textoVisible.value = password; //el text area toma el valor del pasword para que se muestre 
    password = "";//se resetea password de lo contrario si generamos nuevamente la contraseña se van a sumar los caracteres anteriores
});

document.getElementById('boton-copiar').addEventListener('click',function(){ //agrega un "escuchador de eventos" al botón de copiar. Cuando se hace clic en el botón, se ejecutará la función.
    textoVisible.select(); //.select() selecciona todo el texto de un input o un text area
    document.execCommand('copy') //el contenido seleccionado se copia al portapapeles del usuario.
});











