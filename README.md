[![CORE-LIB](https://img.shields.io/badge/core--lib-0.2.1-blue)](http://repo.impuestos.gob.bo:8081/service/rest/repository/browse/npm-sin-local/core-lib/)
[![angular version](https://img.shields.io/badge/angular-13.2.6-red)](https://angular.io/)
[![node version](https://img.shields.io/badge/node-v16.14.2-green)](https://nodejs.org/es/)

# Siat *core-lib*
---

## Tabla de Contenido

* [Requerimientos](#requerimientos)
* [Configuración](#configuración)
* [Instalación](#instalación)
* [Historial de cambios](#historial-de-cambios)
* [Modo de uso](#modo-de-uso)

Este proyecto esta generado con [Angular CLI](https://github.com/angular/angular-cli) versión 13.2.6.
### Requerimientos:
Para editar el proyecto necesita tener instalado las librerias:

* Angular: [13.2.6](https://angular.io/)
* NodeJs LTS: [16.14.2](https://nodejs.org/es/)
* NPM: [8.5.0](https://angular.io/)

### Compilar y publicar libreria

**1) Compilar la libreria**

```shell
$ ng build core-lib
```
> Para que los componentes se agreguen a la libreria se debe añadir tambien en el archivo: `public-api.ts` ej: 
>```javascript
>export * from './lib/components/persona/persona.component';
>```

**2) Login en NPM**

En la carpeta `/dist/core-lib` loguear con el usuario de NEXUS:
```shell
$ npm login --registry http://repo.impuestos.gob.bo:8081/repository/npm-sin-local/
```

**3) Publicar la libreria en el servidor de registro**
```shell
$ npm publish --registry http://repo.impuestos.gob.bo:8081/repository/npm-sin-local/
```

### Instalar libreria
1) **Configuración NPM**
En el *proyecto angular*, se debe agregar un archivo con el nombre: `.npmrc` con la siguiente configuración:
    ```
    registry=http://repo.impuestos.gob.bo:8081/repository/SIAT-npm-group/
    _auth=c2lhdC11c2VyOnNpbi4yMDE5
    email = myemail@email.com
    always-auth = true
    ```
    > [Nota.] Para configurar un usuario Nexus en la variable `_auth`, se debe generar el *Hash* con el siguiente comando en una terminal:
    >```shell
    >$ echo -n 'nombre_usuario:password_usuario' | openssl base64
    >```

2) **Instalar libreria**
    Puede instalar la libreria en su proyecto mediante el comando: 
    ```shell
    $ npm install core-lib
    ```
    o añadiendo la dependencia en su archivo `package.json` en la sección de dependencias: 
    ```javascript
    "dependencies": {
        ...
        "core-lib": "0.0.9",
        ...
    },

    ```

3)  **Instalar Estilos y Fuentes**
Si su proyecto no esta configurado con `Angular Material`, debe añadir las siguientes configuraciones:

-   En el archivo `index.html` se debe añadir:
    ```html
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    ```
-   Para cargar los estilos predefinidos de la libreria, agregar la siguiente linea en el archivo  `styles.scss`:

```javascript
@import "~core-lib/theming";
```


<!-- #### Dependencias adicionales
Adicionalmente se deben instalar las dependencias:
## Modo de uso -->
-   En el archivo `app.module.ts` se debe añadir `CoreLibModule` en la sección `imports` ej:
```javascript
import { CoreLibModule } from 'core-lib';
...
imports: [
    ...
    CoreLibModule <----- aqui
],
...
```
---


## Modo de uso

### Componentes de Aplicación
Los componentes basicos para la creacion de una aplicacion su implementacion es unica y debera estar en el archivo app.component.html:
|Etiqueta|Descripción|
|---|---|
|`<siat-app>` | Contenedor principal de una aplicacion con menu de opciones y datos de usuario embebido. |
|`<siat-expansion-panel>`| Permite establece datos específicos de contexto de aplicación en el drawer de usuario. |
|`<siat-footer>`| Contiene redes sociales, datos de contacto y enlaces relacionados  |
|`<siat-network>`| Define un enlace a la red social asociada a la aplicacion (youtube, facebook, whatsapp, u otros).  |
|`<siat-contact>`| Define un mencanismo de comunicacion con el soporte de aplicacion (telefono, email u otro).  |
|`<siat-link>`| Define enlaces externo relacionados con la aplicacion.  |

### Componentes de Página
Estos componentes permitiran crear una página y establecer la disposición de los componentes que contendra.
|Etiqueta|Descripción|
|---|---|
|`<siat-page>`| Pagina con una cabecera (head) donde prodra definir un toolbar y su contenido en una columna dividida en secciones contraibles |
|`<siat-root-toolbar>`| Barra de tareas de una pagina padre puede contener: titulo, subtitulo, menu y acciones frecuentes. |
|`<siat-child-toolbar>`| Barra de tareas de una pagina hija que podra contener: titulo,  opcion de retorno, menu y acciones frecuentes.  |
|`<siat-column>`| Define una columna con padding, margin y fxLayoutGap. |
|`<siat-row>`| Define una fila responsive con padding, margin, fxLayoutGap y fxLayoutAlign.|
|`<siat-box>`| Define una caja de ancho relativo: padding, margin, fxLayoutGap, fxLayoutAlign y fxFlex.|
|`<siat-wrap>`| Define un contenedor resposive multilineas con con padding, margin, fxLayoutGap y fxLayoutAlign. |
|`<siat-item>`| Define un contenedor de contenido expansible con con padding, margin, fxLayoutGap, fxLayoutAlign, leading y actions. |

### Componentes de lectura
Estos componente estan orientados a visualizar informacion estructurada en diferentes niveles de agrupamiento.
|Etiqueta|Descripción|
|---|---|
| `<siat-section>` | Define una seccion contraible de una pagina con titulo. |
| `<siat-group>` | Define un grupo que contendra informacion estrechamente relacionada. |
| `<siat-output-text>` | Define una propiedad de tipo string, de manera vertical por defecto con la opcion de cambiar su fxLayout.|
| `<siat-output-number>` | Define una propiedad de tipo number, el cual obtiene el formato de centenas, miles.|
| `<siat-output-decimal>` | Define una propiedad de tipo number con decimales, por defecto con 2 decimales, con la opcion de definir la cantidad maxima de decimales, con maxDecimal. |
| `<siat-output-money>` | Define una propiedad de tipo number con  decimales, por defecto con 5 decimales, y la opcion de agregar el tipo de moneda con la propiedad currency. |
| `<siat-output-date>` | Define una propiedad de tipo date, el cual obtiene el formato de dd-MM-yyyy.|
| `<siat-output-datetime>` | Define una propiedad de tipo date, el cual obtiene el formato de dd-MM-yyyy h:mm:ss a.|
| `<siat-progress-bar>` | Define una barra de progreso con: sizeLine, valor y porcentaje de avance.|
| `<siat-progress-spinner>` | Define una dona con porcentaje de progreso. |

<!-- |Columna|`<>`|  |Ejemplo| 
|Columna|`<>`|  |Ejemplo| 
|Columna|`<>`|  |Ejemplo| 
|Columna|`<>`|  |Ejemplo|  -->

### Componentes de escritura
|etiqueta|Descripción|
|---|---|
| `<siat-date>` | Input tipo Date |
| `<siat-number>` |Input tipo Number|
| `<siat-text>` |Input tipo texto|
| `<siat-validator>` |Valida los campos anidados en bloque|
| `<siat-section>` |...|
| `<siat-unit-set>` |...|
| `<siat-vfield>` |...|

### Utilidades
|Tipo|etiqueta|Descripción|Enlace |
|---|---|---|---|
|FontAwesome icons|`<siat-fa-icon>`| FontAwesome icons |...|
|Material Icons|`<siat-mat-icon>`| Material icons |..|
|wrap|`<siat-wrap>`| Define un espacio entre elementos y se adapta al tamaño disponible. |[Ejemplo](#siat-wrap)|

### Aplicación 
Contenedor principal de una aplicación esta definida por:
```html
<siat-app title="My app">
    <router-outlet></router-outlet>
</siat-app>
```
### Menu
El menu drawer se puede iniciar en el archivo `app.component.ts` con la siguiente estructura:
```javascript

  constructor (private menuService: OpcionService){
  }

  ngOnInit() {
    this.menuService.initMenu(this.menuCustom);
  }
  
```
### siat-user
Elemento localizado en el menu lateral derecho donde se muestran los datos del usuario autentificado:
```html
<siat-user> 
    <siat-contribuyente></siat-contribuyente>
</siat-user>
```
### siat-page
Etiqueta para definir el contenido principal de una página, donde se anidaran los formularios ej:
```html
<siat-page>
    <div head>
        encabezado..
    </div>
    <div body>
        contenido..
    </div>
</siat-page>
```
---
### siat-column
Etiqueta para organizar el contenido en columnas
```html
<siat-column margin="15px" fxLayoutGap="5px">
    su contenido...
</siat-column>
```

### siat-row
Etiqueta para organizar el contenido en filas
```html
<siat-column margin="15px" fxLayoutGap="5px">
    <siat-row padding="5px"> su contenido....</siat-row>
</siat-column>
```
### siat-wrap
Etiqueta para dar espacio entre elementos y adaptar el contenido a su contenedor
```html
<siat-wrap>
    Contenido...
</siat-wrap>
```

## Historial de Cambios
Vea los ultimos cambios [aqui][changelog]..


[changelog]: CHANGELOG.md

### Running unit tests

Run `ng test core-lib` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Dependencias Auth
dependencias auth `package.json`
```json
  "keycloak-js": "^18.0.0",
	"str-auth-lib": "^1.0.3",
```


### Compilar proyecto
**PRODUCCIÓN**
```shell
$ ng build --configuration production --base-href /usecase/ --deploy-url /usecase/
```

### Revisión de Componentes
|      COMPONENTE                    |REVISADO |DEMO |USECASE|FECHA     | 
|------------------------------------|---------|-----|-------|----------|
| `<siat-button-rounded>`            |   Si    | Si  |  Si   |25/10/2022|
| `<siat-button>`                    |   Si    | Si  |  Si   |25/10/2022|
| `<siat-button-circle>`             |   Si    | Si  |  Si   |25/10/2022|
| `<siat-button-circle-light>`       |   Si    | Si  |  Si   |25/10/2022|
| `<siat-titles-card>`               |   Si    | Si  |  Si   |25/10/2022|
| `<siat-image-card>`                |   Si    | Si  |  Si   |25/10/2022|
| `<siat-header-card>`               |   Si    | Si  |  Si   |25/10/2022|
| `<siat-icon-vcard>`                |   Si    | Si  |  Si   |25/10/2022|
| `<siat-icon-hcard>`                |   Si    | Si  |  Si   |25/10/2022|
| `<siat-background-card>`           |   Si    | Si  |  Si   |25/10/2022|
| `<siat-category-card>`             |   Si    | Si  |  Si   |25/10/2022|
| `<siat-stats-card>`                |   Si    | Si  |  Si   |25/10/2022|
| `<siat-body-card>`                 |   Si    | Si  |  Si   |25/10/2022|
| `<siat-section-card>`              |   Si    | Si  |  Si   |25/10/2022|
| `<siat-check-title>`               |   Si    | Si  |  Si   |25/10/2022|
| `<siat-check-item>`                |   Si    | Si  |  Si   |25/10/2022|
| `<siat-clasificador-checkbox>`     |   Si    | Si  |  Si   |25/10/2022|
| `<siat-text-input>`                |   Si    | Si  |  Si   |25/10/2022|
| `<siat-number-input>`              |   Si    | Si  |  Si   |25/10/2022|
| `<siat-decimal-input>`             |   Si    | Si  |  Si   |25/10/2022|
| `<siat-money-input>`               |   Si    | Si  |  Si   |25/10/2022|
| `<siat-text-area-input>`           |   Si    | Si  |  Si   |25/10/2022|
| `<mat-form-field>`                 |   Si    | Si  |  Si   |25/10/2022|
| `<siat-text-output>`               |   Si    | Si  |  Si   |25/10/2022|
| `<siat-number-output>`             |   Si    | Si  |  Si   |25/10/2022|
| `<siat-date-output>`               |   Si    | Si  |  Si   |25/10/2022|
| `<siat-datetime-output>`           |   Si    | Si  |  Si   |25/10/2022|
| `<siat-boolean-output>`            |   Si    | Si  |  Si   |25/10/2022|
| `<siat-decimal-output>`            |   Si    | Si  |  Si   |25/10/2022|
| `<siat-money-output>`              |   Si    | Si  |  Si   |25/10/2022|
| `<siat-label-output>`              |   Si    | Si  |  Si   |25/10/2022|
| `<siat-radio-title>`               |   Si    | Si  |  Si   |25/10/2022|
| `<siat-radio-item>`                |   Si    | Si  |  Si   |25/10/2022|
| `<siat-clasificador-radio-select>` |   Si    | Si  |  Si   |25/10/2022|