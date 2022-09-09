let nombre = "Franco";
let apellido = "Ortellado";

const datosPersonales = {
  nombre,
  apellido,
};

//sessionStorage.setItem("persona", JSON.stringify(datosPersonales));

//localStorage.setItem("Persona", JSON.stringify(datosPersonales));

document.cookie = `datosPersonales=${JSON.stringify(
  datosPersonales
)};experis= =${new Date(now.getTime() + 2 * 60000)}`;
