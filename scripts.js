//funcion que muestra el menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "" ;
    }
}

//funcion que aplica el estilo a la opción seleccionada en el menú y quita la previamente seleccionada.
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menú una vez que se ha seleccionado la opcion en el modo responsive.
    var x = document.getElementById("nav");
    x.className = "";
}

//Detecto el scolling para aplicar la animación de las barras de habilidades
window.onscroll = function(){
    efectoHabilidades()
};


//Funcion que aplica la animación de la barra de habilidades
function efectoHabilidades(){
    var skills = document.getElementById('skills');
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("mysql").classList.add("barra-progreso3");
        document.getElementById("Illustrator").classList.add("barra-progreso4");
        document.getElementById("Indesign").classList.add("barra-progreso5");
        document.getElementById("Photoshop").classList.add("barra-progreso6");
    }
}