//PRACTICA 1
//ALGORITMO DE ORDENACION QUICKSORT

const quickSort = (miArray: number[]): number[] => {

    //Comprobamos que el array tenga más de un elemento
        if (miArray.length <= 1) {
        return miArray; 
    }

    //Calculamos la mitad del array 
    const pivoteIndice = Math.floor(miArray.length / 2);

    //Elegimos el pivote como el elemento de la mitad
    const pivote = miArray[pivoteIndice];

    // Filtra los elementos que son menores o iguales que el pivote y que no están en el índice del pivote
    const izq = miArray.filter((element, index) => element <= pivote && index !== pivoteIndice);

    // Filtra los elementos que son mayores o iguales que el pivote y que no están en el índice del pivote
    const derch = miArray.filter((element, index) => element >= pivote && index !== pivoteIndice);

    //Hacemos que la funcion sea recursiva
    return [...quickSort(izq), pivote, ...quickSort(derch)];

};

const arrayNumeros = [ 1, 99, 34, 7, 23, 32, 5, 62 ];

const miArrayOrdenado = quickSort(arrayNumeros);

console.log(miArrayOrdenado);