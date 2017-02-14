
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
    var knownComment = document.getElementById("known-input");

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
        if (words >= 150) {
            alert("Te has pasado, has puesto más de " + words + " palabras");
            event.preventDefault();
            return false;
        }
    }

    if (knownInput.value=='Otros' && knownComment && knownComment.checkValidity() == false){
        alert("Escribe cómo me conociste");
        knownComment.classList.add("error");
        knownComment.focus();
        event.preventDefault();
        return false;
    }



    sendForm({
        'name': nameInput.value,
        'email': emailInput.value,
        'phone': phoneInput.value,
        'comment': commentInput.value,
        'known-comment': (knownComment) ? knownComment.value : '',
        'known': knownInput.value
    });

    event.preventDefault();
    return false;


    setTimeout(function(){
        sendNotification("Formulario enviado correctamente");
    })
});


