/**
 * Algoritmos de búsqueda
 * - Búsqueda lineal (linear search)
 *   [7, 9, 1, 4, 6, 12] - 6   // O(n)
 * --------------------------------------
 * - Búsqueda binaria  Divide y vencerás. // O(log(n))
 * Precondición: Elementos estén ordenados (Asc, Des)
 * A, B, C, D, E, F ... Z | 1, 2, 5, 6, 7
 * Z, Y, W, ... A
 * 
 * En el caso de un arreglo, A[0 .. n - 1]
 * 
 * A[1] < A[2] ... < A[n - 1]
 * 
 * - Consiste en dividir en 2 (o más) el arreglo y descartar la mitad 
 *   recursivo.
 * 
 * n = 7
 * ele = 9
 *                               [2, 4, 6, 7, 9, 11, 19]                         1
 *                          [2, 4, 6]X            [7, 9, 11, 19]                 2
 *                                             [7, 9]          [11, 19]X         3
 *                                          [7]X     [9]                         4
 * 
 * N = 4                          [1, 2, 3, 6]
 *                              [1, 2]    [3, 6]
 *                                       [3]   [6]
 * 
 * ¿Cuántas veces tengo que dividir el arreglo para que me queden dos arreglos de longitud 1?
 * 
 *  8 4 2 1  = 3                8 = 2^3             log2(8) = 3
 *  16 8 4 2 1 = 4              16 = 2^4            log2(16) = 4
 *  32 16 8 4 2 1 = 5           32 = 2^5            log2(32) = 5
 *  64 32 16 8 4 2 1 = 6        64 = 2^6
 * 
 * 
 *  Pseudocódigo
 *  BinarySearch(A, ele)
 *  // input: arreglo ordenado A[0 .. n - 1]
 *  // output: ele o -1 si no se encuentra
 * 
 *  IF size of A = 0:
 *    return -1
 *  // calcular el punto medio
 *  mid <- (n - 1) / 2     // se redondea, en este caso hacia abajo
 *  IF A[mid] = ele:
 *    return A[mid]
 *  IF ele > A[mid]:
 *    return BinarySearch(0 .. A[n/2], ele)  // la mitad de arriba
 *  ELSE
 *    return BinarySearch(A[n/2 .. n - 1], ele)
 * 
 */