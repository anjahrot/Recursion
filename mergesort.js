//Sort left half
//Sort right half        
//Merge the two halves   

function mergesort(array) {
   let length = array.length;
   if(length <= 1) return array; 
   if(length > 1){
    const middle = Math.floor(length/2);
    const leftHalf = array.slice(0, middle);
    const rightHalf = array.slice(middle);
    const sortedLeft = mergesort(leftHalf);
    const sortedRight = mergesort(rightHalf);
    return merge(sortedLeft, sortedRight);
   }
   function merge(array1,array2) {
    let i = j = k = 0;
    let C=[];  //C is the sorted merged array
    while(i<array1.length && j<array2.length){
        if(array1[i]<array2[j]){
            C[k++] = array1[i++];
        } else{
            C[k++] = array2[j++];
        }
    }
    for( ;i<array1.length;i++){
        C[k++] = array1[i];
    }
    for( ;j<array2.length;j++){
        C[k++] = array2[j];
    }

    return C;
   }

    }


console.log(mergesort([3,1,5,10,2,11]));




