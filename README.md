# frontendProyectBeta
This is a project to apply knowledge in CSS and JavaScript for web development



Este proyecto consiste en 2 secciones princiales

La primera es la seccion de los `.targets` del HTML:ç

```
<div class="targets" id="t1">
  <h2>Templates</h2>
</div>

<div class="targets" id="t2">
  <h2>Elements</h2>
</div>

<div class="targets" id="t3">
  <h2>Layouts</h2>
</div>
```

Esta seccion actualmente se está utilizando para probar el .addEventListener con JavaScript con el siguiente codigo:
```
const tuno = document.querySelector("#t1");
const tdos = document.querySelector("#t2");
const ttres = document.querySelector("#t3");

tuno.addEventListener('click', () => {
console.log("entrando");
});
tdos.addEventListener('click', redirectionDos);
ttres.addEventListener('click', redirectionTres);`
```

La otra sección tiene como proyección redireccionar a un futuro div del archivo HTML utilizando JavaScript
