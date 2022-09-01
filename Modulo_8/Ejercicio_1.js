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
  let i = Math.floor(Math.random() * 100);
  while (i % 2 == 0) {
    yield i;
  }
}
const gen = generaPar();

console.log(gen.next().value);
