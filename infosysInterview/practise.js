// ************************************************checking sum zero

// const arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

// function checksumZero(arr) {
//   // two poinetr approach
//   let left =0;//1
//   let right=arr.length-1;
//   while(left<=right){
//     if(arr[left]+arr[right]>0){
//       right--;

//     }else if(arr[left]+arr[right]<0){
//       left++;

//     }else{
//       return [arr[left],arr[right]]
//     }

//   }
//   console.log(right)
// }
// console.log(checksumZero(arr));

//**************************************Anagram

// let str1 = "hello";
// let str2 = "helpo";
// function checkAnagrma(str1, str2) {
//   if (str1.length != str2.length) return false;
//   console.log(str1)

//   let obj1 = {};
//   for(let i=0;i<str1.length;i++){
//     if(obj1[str1[i]]){
//       obj1[str1[i]]+=1
//     }else{
//       obj1[str1[i]]=1

//     }
//   }
//   console.log(obj1)
//   console.log(str2)
//   for(let i=0;i<str2.length;i++){
//     console.log("45",str2[i])
//     if(!obj1[str2[i]])return false;
//     obj1[str2[i]]--;

//   }
//   return true;

// }
// console.log(checkAnagrma(str1, str2));

// **************************counting unique number   ********solve by other approach
// let arr = [10, 20, 20, 10, 30, 10];
//         10 10 10 20 20 30
// i=0 j=1 10 10 j++
// i=0 j=2 10 10 10 j++
// i=0 j=3 10 10 10 20
// i=1 j=3 10 20 10 10 20 j++
//i=1  j=3 10 20 10 10 20 30

// i=1        j

// function uniqueNos(arr) {
//   let count=0;
//   arr.sort();
//   let i=0;
//   let j=1;
//   while(i<j && j<arr.length){
//     if(arr[i]===arr[j]){
//       j++;
//     }else{
//       let temp=arr[j];
//       arr[j]=arr[i+1];
//       arr[i+1]=temp;
//       console.log(i,j)
//       i++;
//       j++;
//     }
//   }
//   return i+1;
//   // console.log("i",i)

// }
// console.log(uniqueNos(arr));

// ***** largest sum of consuctive
// let arr =[1,2,3,100,3,5,4,6,7,8]
// // n=4
// // n+i

// function findLargestConsecutive(arr,n){
//   let i=0;
//   let j=0;
//   let sum=0;
//   while(i<=arr.length-n && j<n-i){
//     sum+=arr[j]
//     j++;
//   }
//   console.log(sum)
// }
// console.log(findLargestConsecutive(arr,4))

//binary search
// let arr = [1, 3, 5, 7, 8, 9,11]
// let searchEle=  1
// function binarySearch(arr,searchEle){
//   let startIdx=0;
//   let endIdx=arr.length-1;
//   let flag =false;
//   while(startIdx<=endIdx){
//     let mid=Math.floor((startIdx+endIdx)/2);
//     if(arr[mid]>searchEle){
//       endIdx=mid-1;

//     }else if(arr[mid]<searchEle){
//       startIdx=mid+1;
//     }else{
//       flag=true;
//       break;
//     }

//   }
//   if(flag==true){
//     return true;
//   }else{
//     return false;
//   }

// }
// console.log(binarySearch(arr,searchEle))

// let arr1 = [1, 2, 3, 15];
// let arr2 = [9, 4, 225, 1];

// function findSquareinArray(arr1, arr2) {
//   let i = 0;
//   let j = 0;

//   let flag = false;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] * arr1[i] == arr2[j]) {
//       flag = true;
//       i++;
//       j = 0;
//     } else {
//       j++;
//     }
//   }
//   if (flag == false) {
//     return false;
//   } else {
//     return true;
//   }

// }
// console.log(findSquareinArray(arr1, arr2));

// sort using recurive fn

const arr = [3, 2, 1, 4];
//           2  3   1   4
//           2  1   3   4   3.5

//           2  1   3   4   3.5

// function recuriveSort(arr) {
//     let i = 0;
//     let j = 1;
//     while (i < j && j < arr.length - 1) {
//       console.log(i,j)
//       if (arr[i] > arr[j]) {
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//         i = 0;
//         j = 1;
//       } else {
//         i++;
//         j++;
//       }
//     }
//     console.log(arr)
// }

// console.log(recuriveSort(arr));

// find maximium charcter a=occurenece

let str="hello world"
function maxOcc(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }

  let maxVal = 0;
  let ans = null;
  for (let key in obj) {
    if(maxVal<obj[key]){
      maxVal=obj[key];
      ans=key;
    }
  
      
  }

  return {maxVal,ans}
}
console.log(maxOcc(str));
