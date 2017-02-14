
function sendForm(data) {
    debugger;
    $.ajax({
        type: "GET",
        data: data,
        url: "/js/server.js"
    })
        .done(function(message) {
            alert("Tu formulario ha sido recibido correctamente")
        })
        .fail(function (error) {
            console.error("No se ha podido enviar el formulario");
        });
}