function alerta(elemento) {
    var ciudad =elemento.innerText;
    alert("Cargado informe metereológico..." + ciudad);

    var elemento_h2 = document.querySelector("h2");
    //id--> #id, clase -->.clase
    elemento_h2.innerText = ciudad;
}

function eliminar_cookies(){
    var elemento_cookie = document.querySelector(".cookies")
    elemento_cookie.remove();
}

function cambiar_temperatura (){
    var selector = document.querySelector("select");
    //console.log(selector.value);

    for(let i=0; i<8; i++){
        var elemento_temperatura = document.querySelector("#temp"+i);
        var temperatura= elemento_temperatura.innerText;
        temperatura = parseInt(temperatura); //transforma el texto en un número entero
        
        console.log(temperatura);
        var nueva_temperatura=0;
        if(selector.value == "C"){
            nueva_temperatura = (temperatura - 32) * 5/9;

        } else {
            nueva_temperatura = (temperatura *9/5) + 32;

        }

        
        nueva_temperatura = Math.round(nueva_temperatura);
        elemento_temperatura.innerText = nueva_temperatura;

    }

}