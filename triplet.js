function max_minus_min(newArray){
    newArray_max = Math.max(...newArray)
    newArray_min = Math.min(...newArray)
    
    return (newArray_max- newArray_min)
}
function sumArray(arr){
    sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

function orderedArray(a,b){
    return (b-a)
}
function smallestDifferenceTriplet(arr1, arr2, arr3, n){
    temp = []
    for (let i = 0; i<n; i++){
        for (let j = 0; j<n; j++){
            for (let k = 0; k<n; k++){
                 temp.push(Array(arr1[i], arr2[j], arr3[k]))
            }
        }
    }
    //console.log(temp)
    num = []
    for(let a = 0; a < temp.length; a++){
        num.push(max_minus_min((temp[a])))
    }
    min_diff = (Math.min(...num))
    //console.log(min_diff)
    tempArray = []
    for(let a = 0; a < temp.length; a++){
         if(max_minus_min((temp[a])) === min_diff){
             tempArray.push(sumArray(temp[a]))
         }
    }
    min_sum = Math.min(...tempArray)
    //console.log(min_sum)
    for(let a = 0; a < temp.length; a++){
        if ((sumArray(temp[a]) === min_sum) && (max_minus_min(temp[a]) === min_diff)){
            //console.log(temp[a])
            console.log((temp[a]).sort(orderedArray))
        }
    }
    //console.log(tempArray)
    
}


let arr1 = [5, 2, 8];
let arr2 = [10, 7, 12];
let arr3 = [9, 14, 6]; 


//let arr1 = [15, 12, 18, 9];
//let arr2 = [10, 7, 13, 8];
//let arr3 = [14, 16, 11, 5];

let n = arr1.length;
 
smallestDifferenceTriplet(arr1, arr2, arr3, n);