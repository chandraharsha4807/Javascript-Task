function maxSum(mat){
    for (let i=1;i<mat.length; i++){
        res = -1;
        M = mat[i].length
        for(let j = 0; j < M; j++)
        {
            // When all paths are possible
            if (j > 0 && j < M - 1)
                mat[i][j] += Math.max(mat[i - 1][j],
                             Math.max(mat[i - 1][j - 1],
                                      mat[i - 1][j + 1]));
                                    
            // When diagonal right is not possible
            else if (j > 0)
                mat[i][j] += Math.max(mat[i - 1][j],
                                      mat[i - 1][j - 1]);
  
            // When diagonal left is not possible
            else if (j < M - 1)
                mat[i][j] += Math.max(mat[i - 1][j],
                                      mat[i - 1][j + 1]);
 
            // Store max path sum
            
            res = Math.max(...(mat[i]));
            
        }
    }
    console.log(res)
}

let mat = [ [ 10, 10, 2, 0, 20, 4 ],
              [ 1, 0, 0, 30, 2, 5 ],
              [ 0, 10, 4, 0, 2, 0 ],
              [ 1, 0, 2, 20, 0, 4 ] ];
maxSum(mat)