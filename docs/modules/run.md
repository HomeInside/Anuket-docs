# Run

Permite la inicialización de __Anuket__, por lo que debe ser el primer método, en ser llamado al ejecutar su aplicación, ya que este configura la forma en que funcionará el mapa base.


## Lista de Parámetros:

El método __run__ espera dos parametros:

- ___divMap:__ El contenedor del mapa.
- ___opts:__ Un `objeto` con opciones adicionales.
  - zoom: `number` __default:__ `12`
  - latlng: Un `objeto` con las siguientes opciones:
    - lat: `float` __default:__ `null`
    - lng: `float` __default:__ `null`
  - initMarker: `boolean` __default:__ `false`
  - markerClick: `function` __retorna:__ `(e, coords)`
  - geolocation: `boolean` __default:__ `false`

```js
fn.run = function(_divMap, _opts) {};
```

## Un ejemplo:

Creamos el contenedor del mapa:
```html
<div id="themap"></div>
```

Inicializamos __Anuket:__
```js
Anuket.run('#themap', {
  'zoom': 12,
  'latlng': {
      'lat':  51.5180094,
      'lng': -0.7637034
  },
  'initMarker': true,
  'markerClick': function(e, coords){
    console.info('clik on marker', coords); 
  }
});
```