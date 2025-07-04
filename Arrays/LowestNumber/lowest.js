arr = [5, 3, 8, 1, 4];
lowest = arr[0];

function findLowest(){
    for( let i=1; i < arr.length; i++){
        if(arr[i]<lowest){
            lowest = arr[i];
        }
    }
    console.log("Lowest element in the array is: " + lowest);
    return lowest;  
}

findLowest(arr);