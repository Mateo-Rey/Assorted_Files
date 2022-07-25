function dirReduc(arr) {
    let copy = arr
    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i] == 'NORTH' && arr[i] + 1 == "SOUTH") {
        copy.splice(arr[i])
        copy.splice((arr[i] + 1))
        }
        if (arr[i] == 'EAST' && arr[i] + 1 == "WEST") {
            copy.splice(arr[i])
            copy.splice((arr[i] + 1))
        } 
        return copy;
    }
}

console.log(dirReduc(["NORTH","EAST","SOUTH","WEST"]))