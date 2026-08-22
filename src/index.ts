// 1 Crear un array con 5 nombres de estudiantes y mostrar cada nombre en consola usando un ciclo.

const estudiantes: string[] = ["Juan", "María", "Pedro", "Ana", "Luis"];

for (const estudiante of estudiantes) {
    console.log(`- ${estudiante}`);
}

// 2 Imprimir cuántos estudiantes hay en el arreglo.

const cantidadEstudiantes: number = estudiantes.length;
console.log(`La cantidad total de estudiantes en el arreglo es: ${cantidadEstudiantes}`);

// 3 Crear un array de números y calcular la suma total.

const numeros: number[] = [1, 2, 5, 4, 6, 1, 8];

let suma: number = 0

for (const num of numeros){
    suma += num;
}

console.log(`La suma total de los números es: ${suma} `)

// 4 Crear un array de números (mínimo 1500) y calcular la suma total (Usar aleatorios).

const numerosAleatorios: number[] = [];
const TAMANO_ARRAY: number = 1500;

for (let i = 0; i < TAMANO_ARRAY; i++) {
    const numeroAleatorio: number = Math.round(Math.random() * 100);
    numerosAleatorios.push(numeroAleatorio);
}

let sumaTotalAleatorios: number = 0;
for (const numero of numerosAleatorios) {
    sumaTotalAleatorios = sumaTotalAleatorios + numero;
}

console.log("Se ha creado un arreglo con " + numerosAleatorios.length + " números aleatorios.");
console.log("La suma total de los 1500 números es: " + sumaTotalAleatorios);

// 5 Calcular el promedio de los números del punto 3.

const promedioEj3: number = suma / numeros.length;
console.log("El promedio de los números del Ejercicio 3 es: " + promedioEj3);

// 6 Imprimir los números mayor a 50 del punto 3.

console.log("Números mayores a 50:");
for (const numero of numeros) {
    if (numero > 50) {
        console.log("- " + numero);
    }
}

//  7 Crear un objeto de persona con nombre, edad, ciudad e imprimir sus valores.

interface Persona {
    nombre: string;
    edad: number;
    ciudad: string;
}

const persona: Persona = {
    nombre: "Catalina Gómez",
    edad: 21,
    ciudad: "Medellín"
};

console.log("Valores de la Persona:");
console.log("- Nombre: " + persona.nombre);
console.log("- Edad: " + persona.edad + " años");
console.log("- Ciudad: " + persona.ciudad);

//  8 Crear un array de productos (nombre y precio) e imprimirlos.

interface Producto {
    nombre: string;
    precio: number;
    unidadesDisponibles?: number; 
}

const productos: Producto[] = [
    { nombre: "Computador Portátil", precio: 3200000 },
    { nombre: "Mouse Inalámbrico", precio: 85000 },
    { nombre: "Teclado Mecánico", precio: 250000 },
    { nombre: "Monitor 24 pulgadas", precio: 750000 },
    { nombre: "Auriculares Gamer", precio: 180000 }
];

console.log("Lista de productos:");
for (const producto of productos) {
    console.log("- " + producto.nombre + " | Precio: $" + producto.precio);
}

// EJERCICIO 9: Encontrar el producto con mayor precio del array e imprimirlo.

let productoMasCaro: Producto = productos[0];

for (const producto of productos) {
    if (producto.precio > productoMasCaro.precio) {
        productoMasCaro = producto;
    }
}

console.log("El producto más costoso es: " + productoMasCaro.nombre + " (Precio: $" + productoMasCaro.precio + ")");

// 10 Agregar la cantidad de unidades disponibles a cada producto y calcular el valor total de mi inventario.

productos[1].unidadesDisponibles = 50; 
productos[2].unidadesDisponibles = 25; 
productos[3].unidadesDisponibles = 18; 
productos[4].unidadesDisponibles = 30; 

console.log("Inventario con unidades disponibles:");
let valorTotalInventario: number = 0;

for (const producto of productos) {
    const unidades = producto.unidadesDisponibles || 0;
    
    const valorProductoStock = producto.precio * unidades;
    
    valorTotalInventario = valorTotalInventario + valorProductoStock;

    console.log("- " + producto.nombre + " | Unidades: " + unidades + " | Subtotal: $" + valorProductoStock);
}

console.log("\nEl valor total de todo el inventario es: $" + valorTotalInventario);


// EJERCICIO 11: Crear un array de estudiantes donde cada estudiante tiene nombre, semestre y un array de materias.
// Cada materia tiene nombre y nota. Calcular el promedio de cada estudiante y el promedio de todos los estudiantes.

interface Materia {
    nombre: string;
    nota: number;
}

interface EstudianteCompleto {
    nombre: string;
    semestre: number;
    materias: Materia[];
}

const estudiantesUniversidad: EstudianteCompleto[] = [
    {
        nombre: "Laura Rojas",
        semestre: 3,
        materias: [
            { nombre: "Desarrollo Web", nota: 4.5 },
            { nombre: "Bases de Datos", nota: 3.8 },
            { nombre: "Álgebra Lineal", nota: 3.2 }
        ]
    },
    {
        nombre: "Santiago Paz",
        semestre: 5,
        materias: [
            { nombre: "Desarrollo de Aplicaciones", nota: 3.4 },
            { nombre: "Ingeniería de Software", nota: 3.0 },
            { nombre: "Cálculo Multivariable", nota: 2.8 }
        ]
    },
    {
        nombre: "Sofía Martínez",
        semestre: 4,
        materias: [
            { nombre: "Desarrollo de Aplicaciones", nota: 4.8 },
            { nombre: "Bases de Datos", nota: 4.5 },
            { nombre: "Redes", nota: 4.2 }
        ]
    },
    {
        nombre: "Andrés Silva",
        semestre: 2,
        materias: [
            { nombre: "Estructuras de Datos", nota: 3.1 },
            { nombre: "Programación Orientada a Objetos", nota: 3.5 },
            { nombre: "Física Mecánica", nota: 2.9 }
        ]
    }
];

const promediosEstudiantes: number[] = [];
let sumaPromediosGenerales: number = 0;

console.log("Promedio individual de estudiantes:");
for (const estudiante of estudiantesUniversidad) {
    let sumaNotasEstudiante: number = 0;
    
    for (const materia of estudiante.materias) {
        sumaNotasEstudiante = sumaNotasEstudiante + materia.nota;
    }
    
    const promedioEstudiante = sumaNotasEstudiante / estudiante.materias.length;
    
    promediosEstudiantes.push(promedioEstudiante);
    
    sumaPromediosGenerales = sumaPromediosGenerales + promedioEstudiante;

    console.log("- " + estudiante.nombre + " | Promedio: " + promedioEstudiante);
}

const promedioGeneralCurso: number = sumaPromediosGenerales / estudiantesUniversidad.length;
console.log("\nPromedio general del curso: " + promedioGeneralCurso);


// EJERCICIO 12: Imprimir el nombre de los estudiantes que tienen promedio mayor a 3.5.

for (let i = 0; i < estudiantesUniversidad.length; i++) {
    const estudianteActual = estudiantesUniversidad[i];
    const promedioActual = promediosEstudiantes[i];
    
    if (promedioActual > 3.5) {
        console.log("- " + estudianteActual.nombre + " (Promedio: " + promedioActual + ")");
    }
}
