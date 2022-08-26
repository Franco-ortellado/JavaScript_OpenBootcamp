let lista_compra = ["leche", "pan", "carne", "azucar", "harina"];

lista_compra.push("Aceite de Girasol");

lista_compra.pop();

let favs_pelis = [
  { titulo: "Prestige", director: "Christopher Nolan", año: 2006 },
  { titulo: "the dark knight", director: "Christopher Nolan", año: 2008 },
  { titulo: "The Shawshank Redemption", director: "Frank Darabont", año: 1994 },
];

let pelis_filter = favs_pelis.filter((anio) => anio.año >= 2010);

let directors = favs_pelis.map((direction) => direction.director);

let pelis = favs_pelis.map((movie) => movie.titulo);

let pelis_direc_conca = directors.concat(pelis);

let pelis_direc_propagacion = [...directors, ...pelis];
