document.write("71.to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1."+"<br>");
function test71(arr){
    return arr[0]==1 || arr[arr.length-1]==1;
}
document.write("The array :[2,3,1] , Ans :"+test71([2,3,1])+"<br><br>");