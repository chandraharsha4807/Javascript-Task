function majorityElement(A){
    let l = A.length
    result = {};
    for(let i = 0; i < l; ++i) {
        if(!result[A[i]])
            result[A[i]] = 0;
        ++result[A[i]];
    }
    console.log(result)
    let m = Math.max(...Object.values(result))
    //console.log(m)
    if (m > l/2){
        for (let i in result){
            if (result[i] === m){
                console.log(i)
            }
        }
    }else{
        console.log("no majority Elements")
    }
    

}
   

//A = [3, 3, 4, 2, 4, 4, 2, 4, 4]
A = [3, 3, 4, 2, 4, 4, 2, 4]
majorityElement(A)