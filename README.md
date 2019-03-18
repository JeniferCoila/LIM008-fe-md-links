# Markdown Links

Esta es una librería que te permitirá extraer links de un archivo markdown ( .md | .MD | .Md | .mD )

## Markdown

Markdown es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

## Guía de uso e instalación de la librería

El módulo puede ser instalable via 
```js
npm install JeniferCoila/LIM008-fe-md-links
```
Este módulo incluye tanto un _ejecutable_ que se puede invocar en la línea de
comando como una interfaz que se puede importar con `require` para usarlo
programáticamente.


## Organización 

Antes de comenzar a codear, se pensó en la arquitectura y
boilerplate del proyecto. Se usaron una serie de _issues_ y _milestones_ para priorizar
las tareas y un _project_ para organizar el trabajo.

Dentro de cada _milestone_ se crearon y se asignaron los _issues_.

### Backlog de la librería 

[Link del 
proyecto en GitHub](https://github.com/JeniferCoila/LIM008-fe-md-links/projects/1)

![Backlog](https://i.imgur.com/MWAMUj6.png)

### Diagrama de flujo
![Flowchart](https://i.imgur.com/98108Ym.jpg)

### Pseudocódigo

Se elaboró un cuadro para poder tener mapeados las funciones a usar y poder hacer los tests antes de codear.

![Table](https://i.imgur.com/6QDTOVP.jpg?1)

### JavaScript API

El módulo se puede importar en otros scripts de Node.js y  ofrece la
siguiente interfaz:

#### `mdLinks(path, options)`

##### Argumentos

- `path`: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es
  relativa, se resuelve como relativa al directorio desde donde se invoca
  node - _current working directory_).
- `options`: Un objeto con las siguientes propiedades:
  * `validate`: Booleano que determina si se desea validar los links
    encontrados.

##### Valor de retorno

La función retorna una promesa (`Promise`) que resuelve a un arreglo
(`Array`) de objetos (`Object`), donde cada objeto representa un link y contiene
las siguientes propiedades:

- `href`: URL encontrada.
- `text`: Texto que aparecía dentro del link (`[]`).
- `file`: Ruta del archivo donde se encontró el link.

#### Ejemplo

```js
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
```

### CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de nuestra aplicación se ejecuta de la siguiente
manera a través de la terminal:

`md-links <ruta> [opciones]`

Por ejemplo:

```sh
$ md-links ./some/example.md

File: ./some/example.md 
Links: http://algo.com/2/3/ 
Text: Link a algo

File: ./some/example.md 
Links: https://otra-cosa.net/algun-doc.html 
Text: Google

```

El comportamiento por defecto valida si las URLs responden ok o no,
solo identifica el archivo markdown (a partir de la ruta que recibe como
argumento), analiza el archivo Markdown e imprime los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del link (truncado a 50 caracteres).

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo hace una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces se considera el link como ok.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate

File: ./some/example.md 
Links: http://algo.com/2/3/ 
StatusText: ok
Status: 200
Text: Link a algo

File: ./some/example.md 
Links:  https://otra-cosa.net/algun-doc.html 
StatusText: fail
Status: 404
Text: algún doc

File: ./some/example.md 
Links:  http://google.com/ 
StatusText: ok
Status: 301
Text: Google
```

En caso de encontrar un link inválido se presentará el siguiente mensaje:
```
File: ./some/example.md 
Links:  http://gooooogle.com/ 
StatusText: No es una URL válida
Status: fail
Text: Google
```
##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats

Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate

Total: 3
Unique: 3
Broken: 1
```
##### `Casos de error`

Si ingresamos una ruta inválida, se podrá leer el mensaje:
```sh
 `Ingrese una ruta válida`
 ```
Si se ingresa una ruta en la que no se encuentren archivos con extensión -md se podrá leer el mensaje:
```sh
 `No se encontraron archivos .md` 
 ```


## Checklist

### General

- [x] Puede instalarse via `npm install --global <github-user>/md-links`
- [x] Crear un script en el `package.json` que transforme el codigo ES6+ a ES5.

### `README.md`

- [x] Colocar el *pseudo codigo* o *diagrama de flujo* con el algoritmo que
  soluciona el problema.
- [x] Un board con el backlog para la implementación de la librería.
- [x] Documentación técnica de la librería.
- [x] Guía de uso e instalación de la librería

### API `mdLinks(path, opts)`

- [x] El módulo exporta una función con la interfaz (API) esperada.
- [x] Implementa soporte para archivo individual
- [x] Implementa soporte para directorios
- [x] Implementa `options.validate`

### CLI

- [x] Expone ejecutable `md-links` en el path (configurado en `package.json`)
- [x] Se ejecuta sin errores / output esperado
- [x] Implementa `--validate`
- [x] Implementa `--stats`

### Pruebas / tests

- [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions,
  lines, y branches.
- [x] Pasa tests (y linters) (`npm test`).
