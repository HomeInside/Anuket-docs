# Zoom
Permite ajustar el nivel de zoom del mapa base.


## getZoom
Obtiene el valor de zoom actual.

### Lista de Parámetros:
`Ninguno`

```js
fn.getZoom = function() {};
```

### Un ejemplo:

```js
Anuket.getZoom();
//12
```


## setZoom
Fija un nuevo valor de zoom.

### Lista de Parámetros:
El método __setZoom__ espera un parametro:
  - zoom: `number` __default:__ `12`

```js
fn.setZoom = function(zoom) {};
```

### Un ejemplo:

```js
Anuket.setZoom(16);
```
