# centerMap
Permite centrar el mapa base, en una Localización geográfica diferente a la establecida actualmente.

## Lista de Parámetros:
El método __centerMap__ espera dos parametros:

- lat: `float` __default:__ `null`
- lng: `float` __default:__ `null`

```js
fn.centerMap = function(lat, lng) {};
```

## Un ejemplo:

```js
Anuket.centerMap(51.4926659, -0.1583277);
```
