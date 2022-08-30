const datos_personales = {
  nombre: "Franco",
  apellido: "Ortellado",
  edad: 25,
  altura: 1.75,
  eresDesarrollador: false,
};

const edad = datos_personales.edad;

const mas_datos = [
  datos_personales,
  {
    nombre: "Ezequiel",
    apellido: "Figueroa",
    edad: 27,
    altura: 1.72,
    eresDesarrollador: false,
  },
  {
    nombre: "Henry",
    apellido: "Lopez",
    edad: 25,
    altura: 1.8,
    eresDesarrollador: false,
  },
];

const lista_ordenada = mas_datos.sort((a, b) => a.edad - b.edad);
