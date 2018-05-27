# centerOverOrigin
Permite centrar el mapa base, en la Localización geográfica definida al inicio de la ejecución (método [run](/modules/run.html#run)).

De forma __opcional,__ permite establecer un nivel de [zoom](/modules/zoom.html#zoom).

## Lista de Parámetros:
El método __centerOverOrigin__ espera un parametro:
- __options:__ un `objeto` con opciones adicionales (este campo __no__ es requerido).
  - zoom: `number` __default:__ `12`

```js
fn.centerOverOrigin = function(options) {};
```

## Un ejemplo:

```js
Anuket.centerOverOrigin(51.4926659, -0.1583277);
```

## Parámetros adicionales:
```js
Anuket.centerOverOrigin(51.4926659, -0.1583277, {zoom: 14});
```
