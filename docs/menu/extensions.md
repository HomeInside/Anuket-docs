# Extensiones

__Anuket__ cuenta con muchas funcionalidades incluidas por defecto, para el manejo de Google Maps, pero... ¿y si quisiéramos ampliar __Anuket__ e incluir mas funcionalidades?

Al [principio](/docs/guide/getting-started.html#extensible) de esta guía, comentabamos la necesidad de introducir algún tipo de sistema de complementos para extender dichas funcionalidades, debido a que no se encuentran disponibles de momento, ó las existentes, no cubren por completo, alguna necesidad puntual de tu proyecto.


## Intro

__Anuket__ es por diseño un modulo [__IIFE__](https://developer.mozilla.org/es/docs/Glossary/IIFE), así que decidimos mantenerlo lo mas compacto y sencillo posible, dicho esto, muchas funciones para el manejo de Google Maps, quedarían por fuera al no incluirlas en el núcleo de nuestra aplicación, Sin embargo tú puedes incluirlas como un módulo independiente, creando una extensión.


## Registro
La forma más sencilla, de agregar nuevas funcionalidades a __Anuket__, es mediante la creación de un modulo __IIFE__ que se extienda del modulo original:

```js
//creating a custom extension for Anuket
var awesomePlugin = (function (plugin) {
    
    plugin.welcome = function () {
        console.log('Welcome to Anuket extension');
    };
    
    return plugin;
    
})(Anuket || {});
```

## Prueba

Eso es todo!, un nuevo método ya está disponible con el nombre __`welcome`__, podemos revisar su funcionamiento, ejecutandolo directamente desde __Anuket__.

```js
Anuket.welcome();
//Welcome to Anuket extension
```

## Más información

Notarás que se ha pasado a la extensión lo siguiente:

```js
Anuket || {}
```
Esto es en caso de que __Anuket__ no esté definida/cargada, y por supuesto no queremos causar errores al momento de ejecución de la extensión; Lo que hacemos es crear una instancia de un nuevo Objeto, y enlazar nuestro método a él, y devolverlo.

Te recomendamos pasar por el apartado de [Referencias](/docs/menu/references.html), en especial el artículo de `Mastering the Module Pattern`, de [Todd Motto](https://toddmotto.com/mastering-the-module-pattern/)
