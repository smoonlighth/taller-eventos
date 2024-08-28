document.getElementById("div").addEventListener("click", function() {
    alert("¡Hola! Soy un div.");
});

document.getElementById("button").addEventListener("click", function(event){
    alert("¡Hola! Soy un botón.");
    event.stopPropagation();
});
