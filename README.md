# Javascript-Task


1.	Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements.   
                Example 
                Input :   
                ar[] =1 2 3 4 5 
                d = 2  
                n = 5 

                Output: 
                3 4 5 1 2 

                Best Case :  
                Time complexity : O(n)  
                Auxiliary Space : O(1) 

                Worst Case: 
                Time complexity : O(n)  
                Auxiliary Space : O(d) 
  
2.	Write a function which takes an array and prints the majority element (if it exists), otherwise prints “No Majority Element”. 
    A majority element in an array A[] of size n is an element that appears more than n/2 times (and hence there is at most one such element).  
  
          Examples :  

          Input : {3, 3, 4, 2, 4, 4, 2, 4, 4} 
          Output : 4 
          Explanation: The frequency of 4 is 5 which is greater 
          than the half of the size of the array size.  

          Input : {3, 3, 4, 2, 4, 4, 2, 4} 
          Output : No Majority Element 
          Explanation: There is no element whose frequency is 
          greater than the half of the size of the array size. 
 
3.	Three arrays of same size are given. Find a triplet such that maximum – minimum in that triplet is minimum of all the triplets.
    A triplet should be selected in a way such that it should have one number from each of the three given arrays.  
   If there are 2 or more smallest difference triplets, then the one with the smallest sum of its 	elements should be displayed. 

      Examples :  

      Input : arr1[] = {5, 2, 8} 
          arr2[] = {10, 7, 12} 
          arr3[] = {9, 14, 6} 
      Output : 7, 6, 5 

      Input : arr1[] = {15, 12, 18, 9} 
          arr2[] = {10, 17, 13, 8} 
          arr3[] = {14, 16, 11, 5} 
      Output : 11, 10, 9 
      Note:The elements of the triplet are displayed in non-decreasing order. 
 
4.	 Given a matrix of N * M. Find the maximum path sum in matrix. 
     The maximum path is sum of all elements from first row to last row where you are allowed to move only down or diagonally to left or right. 
     You can start from any element in first row. 
  
      Examples:  

      Input : mat[][] = 10 10  2  0 20  4 
                         1  0  0 30  2  5 
                         0 10  4  0  2  0 
                         1  0  2 20  0  4 
      Output : 74 
      The maximum sum path is 20-30-4-20. 

      Input : mat[][] = 1 2 3 
                        9 8 7 
                        4 5 6 
      Output : 17 
      The maximum sum path is 3-8-6. 
 
5.	 Given a Boolean 2D array, where each row is sorted. Find the row with the maximum number of 1s.  
  
      Example:   

      Input matrix 
      0 1 1 1 
      0 0 1 1 
      1 1 1 1  // this row has maximum 1s 
      0 0 0 0 

      Output: 2 
