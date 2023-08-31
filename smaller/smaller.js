function tarea5() {
    let buscador = null;

    const A = [4, 3, 5, 7, -4, 7, 4, 1, -9];

    for (let i = 0; i < A.length; i++) {
        if (buscador === null || A[i] < buscador) {
            buscador = A[i];
        }
    }
    
    console.log("El número menor es: " + buscador);
}

tarea5();