/**
 * Created by carlos on 10/2/17.
 */
var form = document.getElementById("form"); //Creamos una variable que nos coja el formulario

//Vamos a validar el formulario
form.addEventListener("submit", function(event){ //Submit es cada vez que se quiera enviar

debugger;
//Cogemos todos los inputs que compnen mi html



    var nameInput = document.getElementById("contact-name");
    var emailInput = document.getElementById("contact-email");
    var phoneInput = document.getElementById("contact-phone");
    var commentInput = document.getElementById("contact-comment");
    var submitInput = document.getElementById("send-form");

    if(nameInput.checkValidity() == false) {
        alert("Escribe tu nombre");
        nameInput.classList.add("error");
        nameInput.focus();
        event.preventDefault();
        return false;
    }

    if(emailInput.checkValidity() == false) {
        alert("Escribe tu email");
        emailInput.focus();
        event.preventDefault();
        return false;
    }

    if(phoneInput.checkValidity() == false) {
        alert("Escribe tu teléfono");
        phoneInput.focus();
        event.preventDefault();
        return false;
    }

    if(phoneInput.checkValidity() == false) {
        alert("Escribe tu comentario");
        commentInput.focus();
        event.preventDefault();
        return false;
    }


    // if(document.getElementById("apellidos")) {
    //     if(document.getElementById("apellidos").checkValidity() == false){
    //         alert("Escribe tus apellidos");
    //         document.getElementById("apellidos").focus();
    //         event.preventDefault();
    //         return false; //Si no pusieramos el false nos saltarían alarmas de todos los campos que faltan por poner todas las veces. De esta forma saltan de uno en uno
    //     }
    // }
    //

    // if(misionesRadioInput.mision1.checkValidity() == false) {
    //     alert("Introduce el tipo de mision");
    //     event.preventDefault(); //Prevenimos el comportamiento por defecto. Sin esto envía igual el formulario
    //     return false;
    // }

    // //=== comprueba valor y tipo, esta siempre es la recomendada
    // if(phoneInput.style.display === 'block') { //Si está en block es que está visible y hay que validarlo
    //     if(estasSeguroRadioInput.seguro_si.checkValidity() == false){
    //         alert("Confirmanos que estás seguro");
    //         event.preventDefault();
    //         return false;
    //     }
    // }



    event.preventDefault();

    setTimeout(function(){
        sendNotification("Formulario enviado correctamente");
    })
});


