function sin_parametros() {
  return true;
}

console.log(sin_parametros());

////////////////////////////////

const promesa = new Promise((resolve) => {
  setTimeout(function () {
    resolve();
  }, 5000);
});

promesa.then(() => console.log("Hola soy una promesa"));

///////////////////////////////

function* generaPar() {
  let id = 0;
  while (true) {
    yield (id += 2);
  }
}
const gen = generaPar();

console.log(gen.next().value);
