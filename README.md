# ASM Market

### URL del Sitio web desplegado.

https://asm-market.vercel.app/

## Documentación

El archivo "catalog.js" se encarga de tomar los productos definidos en "data.js" y mostrarlos en pantalla como tarjetas. Recorre la lista de productos y por cada uno, crea los elementos HTML necesarios (imagen, título, categoría, descripción, precio y botón) usando "*createElement*", y los va insertando en el contenedor del catálogo con "*appendChild*". Así, si mañana cambio o agrego productos en "data.js", el catálogo se actualiza solo sin tocar el HTML.

---

El archivo "*nav.js*" el menú de navegación en dispositivos móviles. Usa "*classList.toggle('active')*" sobre el menú: si no tiene la clase active se la agrega, y si ya la tiene se la quita — así el mismo botón sirve para abrir y cerrar el menú. El CSS se encarga de mostrar u ocultar el menú según tenga o no esa clase (display: none por defecto, display: block cuando está activo). El botón hamburguesa solo aparece en pantallas de 768px de ancho o menos, gracias al **@media** en el CSS; en escritorio se muestra el menú normal.

---

El archivo "*filters.js*" permite filtrar el catálogo por categoría (Beauty, Vitaminas, Fashion, o Todos). Recorre todos los botones de filtro con "*querySelectorAll*" y le agrega un evento de clic a cada uno. Al hacer clic en un botón, primero se le quita la clase active a todos los demás y se le agrega solo al que se presionó (para resaltar cuál está seleccionado). Luego se lee la categoría del botón usando el atributo data-category del HTML, y con el método **.filter()** de arreglos se crea una nueva lista solo con los productos de esa categoría. Esa lista filtrada se le pasa a **renderizarProductos()** (la misma función de "*catalog.js*") para que vuelva a dibujar el catálogo, ahora solo con los productos que corresponden.

## Estructura del proyecto

```
├── index.html          # Página principal del sitio
├── css/
│   └── styles.css      # Estilos: colores, tipografía, Flexbox, Grid, responsive
├── js/
│   ├── data.js         # Arreglo de objetos con los productos del catálogo
│   ├── catalog.js      # Genera las tarjetas del catálogo en el DOM a partir de data.js
│   ├── filters.js      # Lógica para filtrar el catálogo por categoría
│   ├── nav.js          # Menú de navegación (hamburguesa en móvil)
│   ├── form.js         # Validación del formulario de contacto/encargos
│   └── main.js         # Punto de entrada: importa y conecta los demás módulos JS
└── assets/
    └── images/         # Fotos de los productos e íconos del sitio
```