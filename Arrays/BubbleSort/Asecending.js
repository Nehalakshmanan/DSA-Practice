let arr = [7, 12, 9, 11, 3];

function sort(){
    let n = arr.length;
    
    for(let i=0 ; i< n-1; i++){
        for(let j=0 ; j < n-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp= arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
}
sort();