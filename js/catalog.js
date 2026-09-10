function renderizarProductos(lista){
    const contenedor = document.querySelector('#product-grid');
    if (contenedor === null) {
        return;
    }
    contenedor.innerHTML = '';
    if (lista.length === 0){
        const mensajeVacio = document.createElement('p');
        mensajeVacio.className = 'empty-message';
        mensajeVacio.textContent = 'No se encontraron productos en esta categoria.';
        contenedor.appendChild(mensajeVacio);
        return;
    }
    for (let i = 0; i < lista.length; i++){
        const prod = lista[i];

        const tarjeta = document.createElement('article');
        tarjeta.className = 'product-card';

        const img = document.createElement('img');
        img.src = prod.imagen;
        img.alt = prod.nombre;
        img.className = 'product-image';

        const cardBody = document.createElement('div');
        cardBody.className = 'product-info';

        const categoria = document.createElement('span');
        categoria.className = 'product-category';
        categoria.textContent = prod.categoria;

        const titulo = document.createElement('h3');
        titulo.className = 'product-title';
        titulo.textContent = prod.name;
        
        const descripcion = document.createElement('p');
        descripcion.className = 'product-description';
        descripcion.textContent = prod.descripcion;

        const precio = document.createElement('span');
        precio.className = 'product-price';
        precio.textContent = '$' + prod.precio.toLocaleString('es-CO');

        const boton = document.createElement('span');
        boton.className = 'btn-order';
        boton.textContent = 'Pedir por encargo';

        cardBody.appendChild(categoria);
        cardBody.appendChild(titulo);
        cardBody.appendChild(descripcion);
        cardBody.appendChild(precio);
        cardBody.appendChild(boton);
        
        tarjeta.appendChild(img);
        tarjeta.appendChild(cardBody);
        
        contenedor.appendChild(tarjeta);


    }
}
