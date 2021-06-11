function maximum_1s (arr, N)
{
    let row = 0, i, j=N-1;
    for (i=0;i<N;i++)
    {
        while (arr[i][j] == 1 && j >= 0)
        {
            row = i;
            j--;
        }
    }
    console.log(row);
    
}
 
let arr = [[0, 1, 1, 1],
                 [0, 1, 1, 1],
                 [1, 1, 1, 1],
                 [0, 0, 0, 0]];
N = arr.length
maximum_1s(arr, N)