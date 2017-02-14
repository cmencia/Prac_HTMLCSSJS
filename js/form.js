
var form = document.getElementById("form"); //Creamos una variable que nos coja el formulario

//Vamos a validar el formulario

var contactKnownSelected = document.getElementById("contact-known");
var containerKnownInput = document.getElementById("container-knowninput");

var knownInput = document.createElement("input");

knownInput.setAttribute("id", "known-input"); // el segundo parámetro es el valor que queremos que tome
knownInput.setAttribute("type", "text");
knownInput.setAttribute("class", " form-item");
knownInput.setAttribute("name", "known-input");
knownInput.setAttribute("placeholder", "¿Cómo me has conocido?");
knownInput.setAttribute("required", "");

contactKnownSelected.addEventListener("change", function (event) {

    if(event.currentTarget.value == 'Otros') {
        containerKnownInput.appendChild(knownInput); //Añadimos al padre el input
    } else { //Por si apretamos varias veces el no, que no salte el error.
        containerKnownInput.removeChild(knownInput);//Eliminamos el campo apellido
    }
});


form.addEventListener("submit", function(event){ //Submit es cada vez que se quiera enviar


    var nameInput = document.getElementById("contact-name");
    var emailInput = document.getElementById("contact-email");
    var phoneInput = document.getElementById("contact-phone");
    var commentInput = document.getElementById("contact-comment");
    var knownInput = document.getElementById("contact-known");
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
        emailInput.classList.add("error");
        emailInput.focus();
        event.preventDefault();
        return false;
    }

    if(phoneInput.checkValidity() == false) {
        alert("Escribe tu teléfono");
        phoneInput.classList.add("error");
        phoneInput.focus();
        event.preventDefault();
        return false;
    }

    if(commentInput.checkValidity() == false) {
        alert("Escribe tu comentario");
        commentInput.classList.add("error");
        commentInput.focus();
        event.preventDefault();
        return false;
    }else{
        var words = commentInput.value.match(/\S+/g).length;
        debugger;
        if (words > 150) {
            alert("Te has pasao, has puesto " + words);
            event.preventDefault();
            return false;
        } else {
            alert ("Menos");

        }
    }

    if (knownInput.value=='Otros'){
        debugger
    }



    submitInput({
        'name': nameInput.value,
        'phone': phoneInput.value,
        'email': emailInput.value,
        'known': knownInput.val(),
        'comment': commentInput.val()
    });

    event.preventDefault();
    return false;


    setTimeout(function(){
        sendNotification("Formulario enviado correctamente");
    })
});


