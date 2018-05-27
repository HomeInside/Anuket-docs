# streetView
Permite establecer vistas panorámicas a 360 grados usando [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/reference/3.exp/?hl=es-419)


## Lista de Parámetros:
El método __streetView__ espera 1 parámetro:

- __coords__: `object` __default:__ `null`


```js
fn.streetView = function(coords) {};
```

## Un ejemplo:

Creamos el contenedor para el objeto panorama:
```html
<div id="panorama"></div>
```

Ejecutamos el método:
```js
Anuket.streetView({lat: 51.5180094, lng: -0.7637034});
```


::: tip Nota:
Recomendamos leer el apartado de [Panoramas de Street View,](https://developers.google.com/maps/documentation/javascript/streetview?hl=es-419#StreetViewPanoramas) para más información.
:::
