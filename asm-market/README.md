# ASM Market

## Estructura del proyecto

```
asm-market/
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