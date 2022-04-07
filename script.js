document.addEventListener('DOMContentLoaded', function () {
  const tuno = document.querySelector("#t1");
  const tdos = document.querySelector("#t2");
  const ttres = document.querySelector("#t3");

  tuno.addEventListener('click', () => {
    console.log("Titoooo");
  });
  tdos.addEventListener('click', redirectionDos);
  ttres.addEventListener('click', redirectionTres);


  function redirectionDos() {}
  function redirectionTres() {}

}, false);
