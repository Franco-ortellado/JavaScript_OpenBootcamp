const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const papelera = document.querySelector(".img-papelera");

parrafos.forEach((parrafo) => {
  //mostrara en la console cada ves que se inicie un arrastre
  parrafo.addEventListener("dragstart", (event) => {
    console.log("Estoy arrastrando el parrafo: " + parrafo.innerText); //inerter indica el contenido del p
    parrafo.classList.add("dragging"); //este parrafo enn una clase nueva llamada dragging
    event.dataTransfer.setData("id", parrafo.id);

    //const elemento_fantasma = document.querySelector(".imagen-fantasma");
    //event.dataTransfer.setDragImage(elemento_fantasma, 0, 0); //elemento que quiero pasar, offset en 'x' e 'y'
  });

  //mostrara en la console cada ves que se finalice un arrastre
  parrafo.addEventListener("dragend", (event) => {
    //console.log("He terminado de arrastrar");
    parrafo.classList.remove("dragging"); //cuando termina el arrastre lo sacade la clase
  });
});

secciones.forEach((seccion) => {
  //mostrara en la console cuando este en arrastre actualizando en cada renderizado
  seccion.addEventListener("dragover", (event) => {
    //prevenir comportamiento por defecto
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy"; //imagen del raton al mover -> move,copy(por defecto),link
    //console.log("Drag over");
  });

  seccion.addEventListener("drop", (event) => {
    console.log("Drop");
    const id_parrafo = event.dataTransfer.getData("id");
    //console.log("Parrafo id: " + id_parrafo);
    const parrafo = document.getElementById(id_parrafo);
    seccion.appendChild(parrafo);
  });
});

papelera.addEventListener("dragover", (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "copy";
});

papelera.addEventListener("drop", (event) => {
  //elimina el parrafo
  const id_parrafo = event.dataTransfer.getData("id");
  document.getElementById(id_parrafo).remove();
});
