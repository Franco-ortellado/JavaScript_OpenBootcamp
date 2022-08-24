let nombre = "Franco";

let apellido = "Ortellado";

let estudiante = nombre.concat(" ", apellido);

let estudianteMayus = estudiante.toUpperCase();

let estudianteMinus = estudiante.toLowerCase();

let caracteres = estudiante.length;

let primer_letra = nombre[0];

let ultima_letra = apellido[apellido.length - 1];

let sin_espacios = estudiante.replace(/ /g, "");

let buscar_nombre = estudiante.includes(nombre);
