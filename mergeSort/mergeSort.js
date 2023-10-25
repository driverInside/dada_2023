/**
 * Merge Sort
 * 
 * - Divide y vencerás.   
 * 
 *   1. dividir el problema en subproblemas
 *   2. resolver los subproblemas
 *   3. sumar las soluciones
 * 
 * Dos "etapas" -> división - unión
 * 
 * Dado un arreglo A[0..n-1] de elementos ordenables
 * A[0..n/2 - 1] y A[n/2..n-1]
 * 
 *                              O(log2(n))    Solo para esta etapa
 * 
 *                      [5, 7, 2, 1, 8, 9, 3]
 *                   [5, 7, 2]          [1, 8, 9, 3]
 *                [5]      [7, 2]     [1, 8]      [9, 3]
 *                [5]     [7]   [2] [1]    [8]  [9]    [3]
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *                
 *                
 *            ----------------------------------------------
 *  
 * 
 * MergeSort(A[0..n-1]):
 * // input: An array A[0..n-1] of orderable elements
 * // output: An array A[0..n-1] of ordered elements
 * IF n > 1:     
 *   COPY A[0..(n/2) - 1] to B[0..(n/2) - 1]
 *   COPY A[(n/2)..n - 1] to C[0..(n/2) - 1]
 *   
 *   MergeSort(B)
 *   MergeSort(C)
 * 
 *   Merge(B, C, A) 
 * 
 * ---
 * Merge(B[0..p-1], C[0..q-1], A[0..p+q-1]):
 * // input: Arrays B[0..p-1] and C [0..q-1]
 * // output: Sorted Array A[0 .. (p + q) - 1]
 * 
 *   
 * // i para el arreglo B
 * // j para el arreglo C
 * 
 * i <- 0; j <- 0; k <- 0
 * WHILE i < p and j < q DO:
 *   IF B[i] <= C[j] THEN:
 *      A[k] <- B[i]
 *      i <- i+1
 *   ELSE:
 *      A[k] <- C[j]
 *      j <- j+1
 * 
 * IF i = p THEN:
 *   COPY C[j..q-1] TO A[k..(p+q)-1]
 * ELSE
 *   COPY B[i..p-1] TO A[k..(p+q)-1]
 * 
 */               