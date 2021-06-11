/* Rotate Array */
function rotateArray(A, d, n){
    let i = 0;
    if (d < n){
        for (i; i < d; i++){
            //console.log(A[i])
            A.push(A.shift(A[i]))
            //console.log(A)
        }
    } 
    
    return A;
}

A = [1, 2, 3, 4, 5]
d = 1
n = 5
//console.log(A)
console.log(rotateArray(A, d, n))