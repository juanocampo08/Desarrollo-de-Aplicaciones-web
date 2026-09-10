# ASM Market

### URL del Sitio web desplegado.

https://asm-market.vercel.app/

## Documentación

El archivo "catalog.js" se encarga de tomar los productos definidos en "data.js" y mostrarlos en pantalla como tarjetas. Recorre la lista de productos y por cada uno, crea los elementos HTML necesarios (imagen, título, categoría, descripción, precio y botón) usando "*createElement*", y los va insertando en el contenedor del catálogo con "*appendChild*". Así, si mañana cambio o agrego productos en "data.js", el catálogo se actualiza solo sin tocar el HTML.

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