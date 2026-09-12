function inicializarFiltros() {
  const botones = document.querySelectorAll('.filter-btn');

  botones.forEach(function (boton) {
    boton.addEventListener('click', function (evento) {
      
      botones.forEach(function (b) {
        b.classList.remove('active');
      });

      evento.target.classList.add('active');

      const categoriaSeleccionada = evento.target.dataset.category;

      if (categoriaSeleccionada === 'todos') {
        renderizarProductos(productos);
      } else {
        const productosFiltrados = productos.filter(function (producto) {
          return producto.categoria === categoriaSeleccionada;
        });
        renderizarProductos(productosFiltrados);
      }
    });
  });
}