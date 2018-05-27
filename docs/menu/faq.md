# FAQ

A continuación exponemos una lista de preguntas y respuestas comunes, que pueden serte de ayuda.

- __¿Por qué __Anuket__?__

¿Por qué no?.

- __¿Qué versión de Javascript Utiliza?__

[ECMAScript 5.1](https://www.w3schools.com/js/js_versions.asp) (A.K.A. ES5)

- __¿Por qué utilizar ECMAScript 5, y no TypeScript, CoffeeScript, Flow, etc...?__

Al utilizar ECMAScript 5.1, es [Javascript vanilla](https://plainjs.com), el de toda la vida, puede ejecutarse en cualquier navegador actual, sin necesidad de pasarlo por un transpilador (Ej: Babel) y al estar desarrollado como un modulo [__IIFE__](https://developer.mozilla.org/es/docs/Glossary/IIFE) permite su integración en cualquier sitio web, ó frameworks Javascript actuales (angular, ember, Backbone etc...) sin configuraciones adicionales.

- __¿Donde empezar?__

[Explora la Documentación](/#anuket).

- __¿Cero configuración?__

Si, una vez hecha la [instalación](/guide/installation.html#instalacion) y solventado los [requisitos](/guide/requirements.html#requisitos) es tan sencillo como:

Crear el contenedor del mapa:
```html
<div id="themap"></div>
```

Inicializar __Anuket:__
```js
Anuket.run('#themap');
```

- __¿El mapa no carga, ó no se muestra correctamente, que puede haber pasado?__

Asegurate de que los [requisitos esten cumplidos](/guide/requirements.html#requisitos) y que hayas [iniciado bien Anuket](/modules/run.html#run).
Adicionalmente recuerda proveer [una clave de API para Maps](https://developers.google.com/maps/documentation/javascript/adding-a-google-map?hl=es-419#key)

- __¿La documentación esta actualizada con respecto a la ultima version de Anuket?__

La documentación aquí descrita corresponde con la rama [master](https://github.com/HomeInside/Anuket/tree/master) del proyecto.

- __¿En que esta desarrollada la documentación de este sitio?__

Buscamos buenas alternativas como [Docsify](https://docsify.js.org/#/) y [Docusaurus](https://docusaurus.io), sin embargo preferimos a [VuePress](https://vuepress.vuejs.org)

- __¿Esta documentación abarca las funcionalidades de Google Maps API?__

No, no todas ellas, solo las descritas en los [métodos públicos](/modules/methods.html#metodos-publicos)

- __¿Puedo agregar una funcionalidad nueva (Ej: Plugin) de forma sencilla?__

~~No de momento~~, Sí, Para evitar que __Anuket__ se hinche demasiado para usarla, introduciremos algún tipo de sistema de complementos para habilitar la incorporación de [características adicionales](/docs/menu/extensions.html#extensiones).

- __¿Como puedo contribuir?__

Recomendamos leer la [guía de estilo de Javascript de Airbnb](https://github.com/airbnb/javascript)

Para cualquier duda, comentario, sugerencia ó aporte, dirigete a la sección de [issues.](https://github.com/HomeInside/Anuket/issues)
Antes de abrir un issue nuevo, revisa los ya existentes en busca de una solución (posiblemente ya planteada) para el problema que se te presenta.



## Estar al día
Descubre las novedades de este proyecto.